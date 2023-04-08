import React from "react";
import "./Aside.css";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";

export const Aside = () => {
  // const dispatch = useDispatch();
  const state = useSelector((state) => state.api);
  const sortState = state.sort((a, b) => b.rating - a.rating);
  const ratingGame = sortState[0]
  return (
    <div className="aside-cont">


      <div className="aside-title">
         {/* A */}
        <img src="img/top.png" className="img-title" />

        <div className="aside-title">
          {
         
          state &&
           
                  <div className="best-game-cont">
                    <img className="best-game" src={ratingGame?.img}></img>
                    <h3 className="h3-game">{ratingGame?.name}</h3>
                    <h3>{ratingGame?.rating}</h3>
                  </div>
             
            }
        </div>
       {/* B */}
      
      </div>
       <div className="create-game">
        <Link to="/formulario" >
          <img  className="create-img" src="img/create.png" alt="Create GAME" />
        </Link>

        </div>
    </div>
  );
};
