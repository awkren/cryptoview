import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import '../cryptoview-styles/Register.css'
import { Navigate } from 'react-router-dom'

const Register = () => {

  const [toggleRegisterMenu, setRegisterMenu] = useState(false);
  const [registerScreenWidth, setRegisterScreenWidth] = useState(window.innerWidth);
  const toggleRegisterNav = () => {
    setRegisterMenu(!toggleRegisterMenu);
  }
  useEffect(() => {
    const changeRegisterWidth = () => {
      setRegisterScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeRegisterWidth)
    return () => {
      window.removeEventListener('resize', changeRegisterWidth);
    }
  }, []);

  return (
    <section className='wrapper-register'>
      <nav className='nav-register'>
        <p className='crypto-logo-text-register'>CryptoView</p>
        {(toggleRegisterMenu || registerScreenWidth > 940) && (
          <ul className='list-register'>
            <li className='items-register'>Home</li>
            <li className='items-register'>Earn</li>
            <li className='items-register'>Courses</li>
            <li className='crypto-logo-text-mobile-register'>CryptoView</li>
            <li className='items-register'>Login</li>
          </ul>
        )}
        <div className='btn-register' onClick={toggleRegisterNav}>
          {toggleRegisterMenu ? (<FaTimes size={20} style={{color: '#FFF'}}/>) : (<FaBars size={20} style={{color: '#FFF'}}/>)}
        </div>
      </nav>
      <div className="custom-shape-divider-bottom-1668349927-register">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill-register"></path>
        </svg>
      </div>
    </section>
  )
}

export default Register