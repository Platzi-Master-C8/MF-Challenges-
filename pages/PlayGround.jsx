import React from 'react';
import Header from '../src/components/header/Header';
import CodeView from '../src/components/codeView/CodeView';
import Info from '../src/components/info/Info';

const PlayGround = () => {

  return (
    <div className="grid-containerPG">
      <Header />
      <CodeView />
      <Info/>
      <div className="item-footer"></div>
    </div>
  );
};

export default PlayGround;