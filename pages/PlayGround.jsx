import React from 'react';
import Header from '../src/components/header/Header';
import CodeEditor from '../src/components/CodeEditor/CodeEditor';
import Info from '../src/components/info/Info';

const PlayGround = () => {

  return (
    <div className="grid-containerPG">
      <Header />
      <div className="item-codeView"><CodeEditor /></div>
      <Info/>
    </div>
  );
};

export default PlayGround;