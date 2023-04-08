import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./GameDetail.css"
import { Game } from "./Game";
import { AsideGame } from "./AsideGame";
import { Coment } from "./Coment";


export const GameDetail = () => {
 
  return (
    <div className="GameDetail" >
    <Game></Game>
    <AsideGame></AsideGame>
    <Coment></Coment>
    </div>
  );
};


// -  ID.
// -  Nombre.
// -  Imagen.
// -  Plataformas.
// -  Descripción.
// -  Fecha de lanzamiento.
// -  Rating.
// -  Géneros.
