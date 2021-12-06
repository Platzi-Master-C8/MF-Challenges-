import React from 'react';
import nextRank from '../../utils/nextRank.js';

const System = ({ data }, { ranks }) => {
  return (
    <div className="container">
      <div className="first-circle">
        <p>Points</p>
      </div>
      <p>{data.points}</p>
      <div className="second-circle">
        <p>{ nextRank(data.points, ranks) }</p>
      </div>
      <p>Next Rank</p>
    </div>
  );
};

export default System;
