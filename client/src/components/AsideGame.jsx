import React from "react";
import "./AsideGame.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AsideGame = () => {
  const [game, setGame] = useState([]);
  const { id } = useParams();
  const gen = game.genres;
  const plat = game.parent_platforms;

  useEffect(() => {
    fetch(`http://localhost:3001/videogames/${id}`)
      .then((r) => r.json())

      .then((r) => {
        setGame(r);
      });
  }, []);


  return (
    <div className="aside">
      <div className="aside-title">
      
        <section className="dates">
          <h1>Rating: {game.rating}</h1>
          <h2>Lanzamiento: {game.released}</h2>
          <h3>id: {game.id}</h3>
      
      
        </section>
        {/* GENRES */}
        <section className="genres">
          <h2 className="h2">Generos</h2>
          {gen?.map((g) => (
            <button value={g.name}>{g.name}</button>
          ))}
        </section>
        {/* PLATFORMS */}
        <section className="platforms">
        <h2 className="h2">Plataformas</h2>
          {plat?.map((p) => (
            <button value={p.platform.name}>{p.platform.name}</button>
          ))}
        </section>
        <div className="cont-img">
          <img src={game.background_image} className="img"></img>
        </div>
      </div>
    </div>
  );
};
