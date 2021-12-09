import React from 'react';
import Header from '../header/Header';
import CodeView from '../codeView/CodeView';
import Info from '../info/Info'


const API = 'http://localhost:3500/data';

const Container = () => {

  return (
    <div className="grid-container">
      <Header />
      <CodeView />
      <Info/>
      <div className="item-footer"></div>
    </div>
  );
};

export default Container;
