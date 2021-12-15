import React from 'react';
import nextRank from '../../utils/nextRank.js';

const System = ({ data, ranks }) => {
  if (data && ranks) {
    let dataP = data.points;
    return (
      <div className="item-system">
        <div className="container">
          <div className="first-circle">
            <p>{dataP}</p>
          </div>
          <p>Puntos Obtenidos</p>
          <div className="second-circle">
            <p>{ranks[1].required_points}</p>
          </div>
          <p>Siguiente rango</p>
        </div>
      </div>
    );
  } else {
    return `hola`;
  }
};
 


export default System;
