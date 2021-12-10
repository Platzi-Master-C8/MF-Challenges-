import React from 'react';
/* import System from '../systempoint/System'; */
import Header from '../header/Header';
import {Link} from 'react-router-dom'
/* import Navbar from '../navbar/Navbar';
import StreakAndRank from '../StreakAndRank/StreakAndRank';
import UserGraph from '../user-graph/user-graph';
import Achievements from '../achievements/Achievements';
import useGetData from '../../hooks/useGetData'; */
const API = 'http://localhost:3500/data';
const Container = () => {
  /* const Data = useGetData(API); */
  return (
    <div className="grid-container">
      <Header />
      <Link to='/editor'>
        EDITOR
      </Link>
      {/* <Navbar /> */}
      {/* <StreakAndRank ranks={Data.ranks} challenges={Data.challenges} />
      <System data={Data} ranks={Data.ranks} />
      <Achievements goals={Data.achievements} />
      <UserGraph activity={Data.activity} /> */}
      <div className="item-footer"></div>
    </div>
  );
};
export default Container;