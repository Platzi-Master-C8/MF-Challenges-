import React from 'react';

function nextRank(points, ranks) {
  let pointsData = points;
  let requiredPoints = 0;
  if (pointsData < 101) {
    requiredPoints = ranks[1].required_points;
  }
  else if (pointsData < 201 && points >= 101) {
    requiredPoints = ranks[2].required_points;
  }
  return requiredPoints;
};

export default nextRank;
