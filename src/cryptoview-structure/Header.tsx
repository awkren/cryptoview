import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa';
import './Header.css'

const Header = () => {
  
  const[toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleNav = () => {
    // const cryptoLogoText = document.querySelector('.crypto-logo-text');
    const cryptoLogoText = document.querySelectorAll<HTMLElement>('.crypto-logo-text');
    // cryptoLogoText.hidden : true; 
    setToggleMenu(!toggleMenu);
  }
  useEffect(() => {
    const changeWidth = () => {
        setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav>
        <p className='crypto-logo-text'>CryptoView</p>
        {(toggleMenu || screenWidth > 940) && (
            <ul className='list'>
                <li className='items'>Earn</li>
                <li className='items'>Courses</li>
                <li className='crypto-logo-text-mobile'>CryptoView</li>
                <li className='items'>Login</li>
                <li className='items'>Sign Up</li>
            </ul>
            
        )}
        {/* <button onClick={toggleNav} className='btn'>BTN</button> */}
        <div className='btn' onClick={toggleNav}>
                {toggleMenu ? (<FaTimes size={20} style={{color: '#FFF'}}/>) : (<FaBars size={20} style={{color: '#FFF'}}/>)}
        </div>
    </nav>
  )
}
export default Header