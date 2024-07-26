import React, { useState } from 'react';
import style from '../style/Navbar.css';

function Navbar() {

  return (
    <div className="navbar-outer">
      <div className='navbar-name-logo'>ek</div>
      
      <div className='navbar-items'>projects</div>
      <div className='navbar-items'>about</div>
      
    </div>
  );
}

export default Navbar;
