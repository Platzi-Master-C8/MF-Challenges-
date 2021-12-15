import React from 'react';
import System from '../src/components/systempoint/System';
import Header from '../src/components/header/Header';
import Navbar from '../src/components/navbar/Navbar';
import StreakAndRank from '../src/components/StreakAndRank/StreakAndRank';
import UserGraph from '../src/components/user-graph/user-graph';
import Achievements from '../src/components/achievements/Achievements';
import useGetData from '../src/hooks/useGetData';


const API = 'http://localhost:3500/data';
const Profile = () => {
  const Data = useGetData(API);
  return (
    <div className="grid-container">
      <Header />
      <Navbar />
      <StreakAndRank ranks={Data.ranks} challenges={Data.challenges} />
      <System data={Data} ranks={Data.ranks} />
      <Achievements goals={Data.achievements} />
      <UserGraph activity={Data.activity} />
    </div>
  );
};
export default Profile;