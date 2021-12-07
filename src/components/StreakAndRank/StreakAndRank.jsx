import React from 'react';
import rankLogo from '../../icons/rank.svg';
import doneLogo from '../../icons/done.svg';
import streakLogo from '../../icons/streak.svg';

const StreakAndRank = ({ ranks, challenges }) => {


  return (
    <div className="main_container">
      <div className="step__container">
        <img className="rank_icon" src={rankLogo} />
        <p className="rank_value">{ranks ? ranks[1].next : []}</p>
        <p className="rank_button">Rank</p>
      </div>

      <div className="step__container">
        <img className="done_icon" src={doneLogo} />
        <p className="done_value">{challenges ? challenges.completed : []}</p>
        <p className="done_button">Done</p>
      </div>

      <div className="step__container">
        <img className="streak_icon" src={streakLogo} />
        <p className="streak_value">{challenges ? challenges.streak : []}</p>
        <p className="streak_button">Current streak</p>
      </div>
    </div>
  );
};

export default StreakAndRank;
