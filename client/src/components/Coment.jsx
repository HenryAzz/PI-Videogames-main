
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Coment.css";


export const Coment = () => {
const [game, setGame] = useState([]);
const { id } = useParams();
const coment = game.ratings
const estrella = function (num){

    if (num < 20){
        return "estrella1"
    }
    if(num <40){
            return "estrella2"
        }
        if(num <60){
            return "estrella3"
        }
        if(num <80){
            return "estrella4"
        }
        if(num <=100){
            return "estrella5"
        }
    }
    useEffect(() => {
  fetch(`http://localhost:3001/videogames/${id}`)
    .then((r) => r.json())

    .then((r) => {
      setGame(r);
    });
}, []);

  return (
    <section className="Comentarios">
        <div className="coment">

        {
            coment?.map((c)=> <div className="c">
                <h2>{c.title}</h2>
                <div>{estrella(c.percent)}</div>
            </div>)
        }
        </div>
    </section>
  )
}
