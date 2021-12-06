import React from 'react';
import System from '../systempoint/System';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import StreakAndRank from '../StreakAndRank/StreakAndRank';
import UserGraph from '../user-graph/user-graph';
import Achievements from '../achievements/Achievements';
import useInitialState from '../../hooks/useInitialState';

const API = 'http://localhost:3500/data';

const Container = () => {
  const data = useInitialState(API);

  console.log(data);

  return (
    <div className="grid-container">
      <div className="item-header">
        <Header />
      </div>
      <div className="item-minicards">
        <StreakAndRank ranks={data.ranks} challenges={data.challenges} />
      </div>
      <div className="item-navbar">
        <Navbar />
      </div>
      <div className="item-system">{/* <System data={data} ranks={data.ranks} /> */}</div>
      <div className="item-achievements">{/* <Achievements goals={data.achievements} /> */}</div>
      <div className="item-graph">{/* <UserGraph activity={data.activity} /> */}</div>
      <div className="item-footer" />
    </div>
  );
};

export default Container
