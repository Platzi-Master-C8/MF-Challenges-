import React from "react";
import datos from '../../../dataCode.json'
import Coolicon from '../../icons/Coolicon.svg'

const { reto } = datos;

const Info = () => {
  return (
    <div className="item-info">
      <h1 className = "item-info_title" >{reto.title}</h1>
      <div>
        <h2>Instructions</h2>
        <p>{reto.instructions}</p>
      </div>
      <div>
        <h2>Objetives</h2>
        <p>{reto.objectives}</p>
      </div>
      <div className="item-info_button">
        <button className="item-info_button-run" onClick={() => alert('Running Challenge ... ')} >
          Run Challenge 
          <img className="run-challenge-icon" id='img-icon' src={Coolicon} alt='Run Challenge' />
        </button>
        <button className="item-info_button-submit" onClick={() => alert('Sending Challenge ...')}>Submit</button>
      </div>
    </div>
  )
};

export default Info;