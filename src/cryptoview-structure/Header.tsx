import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa';
import '../cryptoview-styles/Header.css'
import { Redirect } from 'react-router-dom';

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

  
  // login routing
  const [goToLogin, setGoToLogin] = React.useState(false);
  const [goToRegister, setGoToRegister] = React.useState(false);
  if(goToLogin){
    return <Redirect to='/login'/>;
  }
  
  // register routing
  if(goToRegister){
    return <Redirect to='/register'/>;
  }

  return (
    <section className='wrapper'>
      <nav>
          <p className='crypto-logo-text'>CryptoView</p>
          {(toggleMenu || screenWidth > 940) && (
              <ul className='list'>
                  <li className='items'>Earn</li>
                  <li className='items'>Courses</li>
                  <li className='crypto-logo-text-mobile'>CryptoView</li>
                  <li className='items' onClick={() => {
                    setGoToLogin(true);
                  }}>Login</li>
                  <li className='items' onClick={() => {
                    setGoToRegister(true);
                  }}>Sign Up</li>
              </ul>
              
          )}
          {/* <button onClick={toggleNav} className='btn'>BTN</button> */}
          <div className='btn' onClick={toggleNav}>
            {toggleMenu ? (<FaTimes size={20} style={{color: '#FFF'}}/>) : (<FaBars size={20} style={{color: '#FFF'}}/>)}
          </div>
      </nav>
      <div className="custom-shape-divider-bottom-1668349927">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
    </section>
  )
}
export default Header