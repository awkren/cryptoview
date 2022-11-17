import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import '../cryptoview-styles/Login.css'
import { Form, Navigate } from 'react-router-dom'

const Login = () => {

  const [toggleLoginMenu, setLoginMenu] = useState(false);
  const [loginScreenWidth, setloginScreenWidth] = useState(window.innerWidth);
  const [goToHome, setGoToHome] = React.useState(false);
  const [goToRegister, setGoToRegister] = React.useState(false);
  const toggleLoginNav = () => {
    setLoginMenu(!toggleLoginMenu);
  }
  useEffect(() => {
    const changeLoginWidth = () => {
      setloginScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeLoginWidth)
    return () => {
      window.removeEventListener('resize', changeLoginWidth);
    }
  }, []);

  if(goToHome){
    return <Navigate to='/'/>
  }

  if(goToRegister){
    return <Navigate to='/register'/>;
  }

  return (<>
    <section className='wrapper-login'>
      <nav className='nav-login'>
        <p className='crypto-logo-text-login'>CryptoView</p>
        {(toggleLoginMenu || loginScreenWidth > 940) && (
          <ul className='list-login'>
            <li className='items-login' onClick={() =>{
              setGoToHome(true);
            }}>Home</li>
            <li className='items-login'>Earn</li>
            <li className='items-login'>Courses</li>
            <li className='crypto-logo-text-mobile-login'>CryptoView</li>
            <li className='items-login' onClick={() => {
              setGoToRegister(true);
            }}>Sign Up</li>
          </ul>
        )}
        <div className='btn-login' onClick={toggleLoginNav}>
          {toggleLoginMenu ? (<FaTimes size={20} style={{color: '#FFF'}}/>) : (<FaBars size={20} style={{color: '#FFF'}}/>)}
        </div>
      </nav>
      <div className="custom-shape-divider-bottom-1668349927-login">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill-login"></path>
        </svg>
      </div>
    </section>
    <div id='login-form' className='grid grid-cols-1 items-center justify-center w-[60%] m-auto text-center pt-[4rem]'>
      <p className='text-[2rem] font-semibold mb-[1rem]'>Login</p>
      <form className='flex flex-col gap-[.5rem]'>
        <label className='text-[1.5rem]'>Enter your email:</label>
        <input className='border-2 border-purple-700 w-[40%] text-[1.3rem] m-auto' type='email'/>
        <label className='text-[1.5rem]'>Enter your password:</label>
        <input className='border-2 border-purple-700 w-[40%] text-[1.3rem] m-auto' type='password'/>
        <p className='text-[1.1rem] hover:underline w-[100%]'><a href='/'>Don't have an account? Sign up.</a></p>
        <a href='/' className='text-[1.5rem] border-2 border-purple-700 rounded-full w-[10%] align-middle m-auto items-center justify-center bg-[purple] text-[white]'>Login</a>
      </form>
    </div>
  </>)
}

export default Login