import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './Game.css'

export const Game = () => {
    const [game , setGame] = useState([])
    const { id } = useParams();
    const x = game.background_image
    
    document.body.style.backgroundImage = `url(${game.background_image_additional})`;
    document.body.style.backgroundSize = "cover";

   useEffect( () => {
     fetch(`http://localhost:3001/videogames/${id}`)
     .then((r)=> r.json())
    
     .then((r)=>{ setGame(r); 

   
    })
   
   },[])


   
       


  return (
    <div className="Game">
        <div className="cont-game">
    <section className='TOP'>
      <div className='title'><h2>{game.name}</h2></div>
      <div className='GIFT'></div>
    </section>

    <section className='CENTER'>
     <p className='text'>{game.description}</p>
    </section>

    <section className='BOTTOM'>
    <a href={game.website} target="_blank">
          <img  className="create-img" src="img/create.png" alt="Create GAME" />

    </a>


    </section>
    
    </div>
    </div>
  )
}
