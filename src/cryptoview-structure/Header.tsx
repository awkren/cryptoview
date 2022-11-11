import { isAbsolute } from 'path'
import React, {useState} from 'react'
import topWave from '../assets/img/wave.svg'
import {FaBars, FaTimes} from 'react-icons/fa';
import './Header.css'

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(prev => !prev);
  }

  return (
    <div className='header'>
        <div className='container'>
            <h1>Crypto<span className='primary'>View</span></h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>Featured</a>
                </li>
                <li>
                    <a href='/'>Earn</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
            <div className='btn-group'>
                <button className='btn'>Connect Wallet</button>
            </div>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}}/>)}
            </div>
        </div>

    </div>
  );
}

export default Header