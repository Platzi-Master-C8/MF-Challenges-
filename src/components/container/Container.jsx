import React from 'react';
import System from '../systempoint/System';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import StreakAndRank from '../StreakAndRank/StreakAndRank';
import UserGraph from '../user-graph/user-graph';
import Achievements from '../achievements/Achievements';
import useGetData from '../../hooks/useGetData';

const API = 'http://localhost:3500/data';

const Container = () => {
  const Data = useGetData(API);

  return (
    <div className="grid-container">
      <div className="item-system">
        <System data={Data} ranks={Data.ranks} />
      </div>
      <div className="item-header">
        <Header />
      </div>
      <div className="item-minicards">
        <StreakAndRank ranks={Data.ranks} challenges={Data.challenges} />
      </div>
      <div className="item-navbar">
        <Navbar />
      </div>
      <div className="item-achievements">
        <Achievements goals={Data.achievements} />
      </div>
      <div className="item-graph">
        <UserGraph activity={Data.activity} />
      </div>
      <div className="item-footer"></div>
    </div>
  );
};

export default Container;
