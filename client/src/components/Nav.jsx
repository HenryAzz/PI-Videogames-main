import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { mode_dark, mode_music } from '../ducks/Actions';



//rafc
export const Nav = () => {
  

    const dispatch = useDispatch()
    const state = useSelector((state)=> state)
  return (
    // NAVBAR
    <nav>
      <div className="title-cont">
        {/* LEFTH */}
        <Link to="/">
          <img  className="title-nav" src="img/title.png" alt="Botón Inicio" />
        </Link>
      </div>
      {/* CENTER */}
      <div className="button-buscar">
        <input autoComplete="off"></input>
        <button className="button-buscar">
          <img src="img/fine.png" className="img-buscar"></img>
        </button>
      </div>

      {/* RIGHT */}
      <div className="buttons">
        {/*--MUSIC */}

        <button className="button-music" onClick={()=> dispatch(mode_music())}>
          <img src={state.music == true ? "img/mus.png" : "img/musb.png"} className={state.music == true ? "black" : "withe" }></img>
        </button>
        {/* --BLAK AND WITHE */}


        <button className="button-blakAndWithe" onClick={()=> dispatch(mode_dark())}>
          <img src={state.mode == true ? "img/white.png" : "img/dark.png"} className={state.mode == true ? "black" : "withe" }></img>
        </button>
     


      </div>
    </nav>
  );
};

