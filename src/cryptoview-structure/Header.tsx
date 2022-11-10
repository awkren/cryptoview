import { isAbsolute } from 'path'
import React, {useState} from 'react'
import topWave from '../assets/img/wave.svg'
import {FaBars, FaTimes} from 'react-icons/fa';
import './Header.css'

// const Header = () => {

  // import React, { useState } from 'react';

const Header = () => {
  // set a variable 'responsive' to false. Update it using 'setResponsive'
  const [responsive, setResponsive] = useState(false);

  const toggleResponsive = () => {
    //take current value of responsive and flip it
    setResponsive(prev => !prev);
  }

  return (
    <nav>
      <div className={responsive ? 'topnav responsive' : 'topnav'}>
        <a href='#home'>Home</a>
        <a href="">Basdasdasd</a>
        <a href="">Afdadsd</a>
        <a href="">Aboyte</a>
        <a className='icon' onClick={toggleResponsive}>
          {/* <p><FaBars/></p> */}
          {responsive ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}}/>)}
        </a>
      </div>
    </nav>
  );
}

export default Header