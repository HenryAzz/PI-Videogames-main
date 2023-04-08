import React, { useEffect } from "react";
import "./Formulario.css";
import { useState } from "react";


export const Formulario = () => {
    const [error,setError] = useState({})
  const [clickGenres, setClickGenres] = useState([])
  const [totalGames, setTotalGames] = useState([]);
  const [genresTotal, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [input, setInput] = useState({
    name: "",
    img: undefined,
    description: "",
    release: "",
    rating: 0,
    genres: [],
    platforms: [],
  });

  useEffect(() => {
    fetch("http://localhost:3001/genres")
      .then((r) => r.json())
      
      .then((r) => r.map((g)=> g.name))
      .then((r)=>setGenres(r));

    fetch("http://localhost:3001/platforms")
      .then((r) => r.json())
      .then((r) => setPlatforms(r));
 

}, []);


  const handle = function (e) {
    setError({})
    let date = e.target.name;
    let value = e.target.value;

    var str = new RegExp(/^[A-Za-z0-9\s]+$/g);
    var res = str.test(e.target.value);

    let valid = true;
    if (value == "") res = true;

    switch (date) {
      case "name":
        if (value.length == 20 || res == false) {
            valid = !valid;
             setError({error:"Alcanzaste el maximo de caracteres."})
        }
        break;
      case "description":

        if (value.length == 500 || res == false) {
            valid = !valid;
        setError({error:"Alcanzaste el maximo de caracteres."})
        }
        break;

   
      case "img":
        valid = !valid;
        setInput({
          ...input,

          [e.target.name]: e.target.files[0],
        });
        break;

      default:
        break;
    }
    if (valid) {
      setInput({
        ...input,

        [e.target.name]: e.target.value,
      });
    }
  };

//HANDLE GENRES

    const handleCheckboxChange = (event) => {
        setError({})
        const value = event.target.value;
        const checked = event.target.checked;
        
        if(checked && input.genres.length == 6) return setError({error:"Alcanzaste el maximo de generos."});
    
        if (checked) {
            if(input.genres.length < 6)
          setInput({...input,genres:[...input.genres, value]});
        } else {
            setInput({...input,genres: input.genres.filter((item) => item !== value)});
        }
      };
     
    
   
  





const handlePlatforms = function (e){
    setError({})

    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
        
      setInput({...input,platforms:[...input.platforms, value]});
    } else {
      setInput({...input,platforms: input.platforms.filter((item) => item !== value)});
    }
  };




  const click = function (e) {
    e.preventDefault();
    setError({})
    let img = "";
    if(input.img == undefined) img = "";
    else img = input.img.type;
    let extensionesValidas = ['jpg', 'jpeg', 'png', 'gif'];
    let val = extensionesValidas.map( (v)=> img.includes(v))
    val.includes(true) ? img = true : img = false
  
    if(input.name.length < 3) return setError({error:"El nombre requiere un minimo de 3 letras"})
    if (!img) return setError({error:"Imagen no valida"})
    if (input.description.length < 50) return setError({error:"Su descripcion es muy corta"})
    if (input.release == "") return setError({error:"La fecha de lanzamiento esta incompleta"})
    if (input.rating == 0) return setError({error:"El rating no puede ser 0"})
    if (input.genres.length == 0) return setError({error:"Debe tener por lo menos 1 genero"})
    if (input.platforms.length == 0) return setError({error:"Debe jugarse por lo menos en 1 plataforma"})
   console.log("casi")
    if (error.error == undefined){
        fetch("http://localhost:3001/videogames",{method:"POST", body: JSON.stringify(input),headers:{"Content-Type":"application/json"},});
    
       
    }
};


  return (
    <div>
      <div className="caja">
        {/* FORMULARIO */}
        <form className="formulario">
          <label style={{ color: "white" }}>Nombre</label>
          <input
            name="name"
            onChange={(e) => handle(e)}
            autoComplete="off"
            value={input.name}
          />

          <label style={{ color: "white" }}>Imagen</label>
          <input
            name="img"
            onChange={(e) => handle(e)}
            autoComplete="off"
            type="file"
            
          />
          {
            input.img && <img  style={{ width: '10%', height: 'auto' }}  src={URL.createObjectURL(input.img)}></img>
          }
          <label style={{ color: "white" }}>Description</label>
          <input
            name="description"
            value={input.description}
            onChange={(e) => handle(e)}
            autoComplete="off"
            type="text"
          />

          <label style={{ color: "white" }}>Release</label>
          <input
            name="release"
            onChange={(e) => handle(e)}
            autoComplete="off"
            type="date"
          />

          <label style={{ color: "white" }}>Rating {input.rating}</label>
          <input
            name="rating"
            min="1"
            max="100"
            onChange={(e) => handle(e)}
            autoComplete="off"
            type="range"
          />

          <label style={{ color: "white" }}>Genres</label>

          <div className="genres">
            {genresTotal?.map(function (g, i) {
              return (
                <div key={i} style={{ color: "white" }}>
                  <label for={i}>{g}</label>
                  <input
                    value={g}
                    id={i}
                    type="checkbox"
                    checked={input.genres.includes(g)}
                    onClick={(e) => handleCheckboxChange(e)}
                  ></input>
                </div>
              );
            })}
          </div>
          <div>
          {platforms?.map(function (p, i) {
              return (
                <div key={i} style={{ color: "white" }}>
                  <label for={i}>{p}</label>
                  <input
                    value={p}
                    id={i}
                    type="checkbox"
                    checked={input.platforms.includes(p)}
                    onChange={(e) => handlePlatforms(e)}
                  ></input>
                </div>
              );
            })}
          
            <div style={{ color: "white" }}>{
                error.error && <h1>{`${error.error}`}</h1>
                }</div>
          </div>

          <button onClick={(e) => click(e)}>Crear Game</button>
        </form>
      </div>
    </div>
  );
};

// -  Nombre.
// -  Imagen.
// -  Descripción.
// -  Plataformas.
// -  Fecha de lanzamiento.
// -  Rating.
// -  Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// -  Botón para crear el nuevo videojuego.
