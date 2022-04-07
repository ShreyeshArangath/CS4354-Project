import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import Drive from './pages/Drive';
import Ride from './pages/Ride';
import Admin from './pages/Admin';
import Trip from './pages/Trip';
import AdminCompleted from './pages/AdminCompleted';
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Drive' element={<Drive />} />
      <Route path='/Ride' element={<Ride />} />
      <Route path='/Admin' element={<Admin />} />
      <Route path='/Trip' element={<Trip />} />
      <Route path='/Admin/Completed' element={<AdminCompleted />} />
      <Route path='/Admin/InProgress' element={<AdminCompleted />} />
      <Route path='/Admin/InQueue' element={<AdminCompleted />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
