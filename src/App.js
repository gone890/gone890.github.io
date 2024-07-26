import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import calbean from './calbean_cover.png';
import './App.css';
import Navbar from './components/Navbar.js';
import BodyOld from './components/BodyOld.js';

function App() {

  const [calvin, setCalvin] = useState(false)

  function handleCalvin(e){
    e.preventDefault();
    setCalvin(!calvin);
  }
  

  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<BodyOld/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
