import React from "react";
import datos from '../../../dataCode.json'

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
      <div>
        <h2>Debug</h2>
        <p>{reto.debug}</p>
      </div>
      <div className="item-info_button">
        <button className="item-info_button-run" >Run Test</button>
        <button className="item-info_button-submit">Submit</button>
      </div>
    </div>
  )
};

export default Info;