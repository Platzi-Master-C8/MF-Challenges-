import React from 'react'
import {render} from 'react-dom'
import App from './containers/App.jsx'
import '../src/styles/_App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayGround from '../pages/PlayGround.jsx'



render
  (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/editor' element={<PlayGround />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('App')
);
