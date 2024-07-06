import React, { useState } from 'react';
import logo from './logo.png';
import calbean from './calbean_cover.png'
import './App.css';

function App() {

  const [calvin, setCalvin] = useState(null)

  function handleCalvin(e){
    e.preventDefault();
    setCalvin(1);
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1><code>gone890</code></h1>
        {calvin ? <img src={calbean} className="App-logo" alt="logo" /> : null}
        <p>
          <code>Hello :{")"} </code>
        </p>
        <p><code>I'm Evan, here are my projects.</code></p>
        <button onClick={handleCalvin}><code>calvin mode</code></button>
      </header>
    </div>
  );
}

export default App;
