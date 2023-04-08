import React from "react";
import "./Platforms.css"
import {  useSelector, useDispatch } from "react-redux";
import { filters } from "../ducks/Actions";

export const Platforms = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  const filterGames = function (plat){
    const totalGames = []
        let games = state.apiCopi.map(function (game){
         game.platforms.map(function(e){
          if(e.name === plat){
           totalGames.push(game)
          }
         })})
      dispatch(filters(totalGames))
  }

  return (
    <div className="buttons-platfroms">
      {
        state.platform.map((p)=> <button value={p} onClick={(e)=> filterGames(e.target.value)}>{p}</button>)
      }
    </div>
  );
};
