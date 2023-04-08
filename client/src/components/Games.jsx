import React from 'react'
import "./Games.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { page } from "../ducks/Actions";
import { Link } from 'react-router-dom';

export const Games = () => {
    const dispatch = useDispatch()
 const api = useSelector((state)=> state.api)
 const numPage = useSelector((state)=> state.page)

 const totalItems = api.length
 const itemsRec = 15

 const lastIndex = numPage * itemsRec;
 const firstIndex = lastIndex - itemsRec;

 const buttons = Math.ceil(totalItems / itemsRec)
 const totalButtons = []
 
 for(let i = 1 ; i <= buttons ; i++){
  totalButtons.push(i)
 }

const nextPage = numPage + 1;
const previousPage = numPage - 1 
  return (
    <>
    <div className="game-grid">
           {
            api &&  api.map((card , i)=> <Link key={i} className="card" to={`/${card.id}`} >
            
              <img src={card.img}className="targ"></img>
              <div className="card-title">
              <p className="card-name">{card.name}</p>
              </div>

            </Link>).slice(firstIndex,lastIndex)
           }
        </div>
        <div className="paginado">
          <button onClick={() => numPage - 1 !== 0 && dispatch(page(previousPage))}>IZQ</button>
           {totalButtons?.map((e,i )=> <button key={i} onClick={(e)=> dispatch(page(Math.ceil(e.target.value))) } value={i + 1}>{i + 1}</button>)}
          <button onClick={() => numPage < buttons && dispatch(page(nextPage))}>DER</button>
          </div>
        </>  
  )
}
