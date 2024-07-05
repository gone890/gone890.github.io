import React, { useEffect } from 'react';

import logo from './logo.png';
import './App.css';

function App() {

  //set doc title to evan
  function setDocTitle() {
    useEffect(() => {
      document.title = 'gone890 Projects';
    }, []);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
