import React from 'react';
import System from '../systempoint/System';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import StreakAndRank from '../StreakAndRank/StreakAndRank';
import UserGraph from '../user-graph/user-graph';
import Achievements from '../achievements/Achievements';

const Container = () => {
  return (
    <div className='grid-container'>
      <div className='item-header'>
        <Header />
      </div>
      <div className='item-minicards'>
        <StreakAndRank />
      </div>
      <div className='item-navbar'>
        <Navbar />
      </div>
      <div className='item-system'>
        <System />
      </div>
      <div className='item-achievements'>
        <Achievements />
      </div>
      <div className='item-graph'>
        <UserGraph />
      </div>
      <div className='item-footer' />
    </div>
  )
}

export default Container
