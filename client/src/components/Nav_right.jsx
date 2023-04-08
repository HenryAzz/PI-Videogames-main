import React from 'react'
import {connect} from "react-redux";
import { mode_darck } from '../ducks/actions';

//ASIDE ------
export const Nav_right = ({props}) => {
  return (
    <button onClick={dispatch(mode_darck(true))}>
    <img src={props.src} className={props.name}></img>
  </button>
  )
}


const pasarAEstado = (state) => {
    return {
        mode: state.mode
    }
}

export default connect(pasarAEstado)(Nav_right)