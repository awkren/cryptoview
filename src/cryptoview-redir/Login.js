import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import '../cryptoview-styles/Login.css'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'
import AuthComponent from './AuthComponent'


export default function Login({setUserEmail}) {

  const [toggleLoginMenu, setLoginMenu] = useState(false);
  const [loginScreenWidth, setloginScreenWidth] = useState(window.innerWidth);
  const [goToHome, setGoToHome] = React.useState(false);
  const [goToRegister, setGoToRegister] = React.useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState(false);

  const cookies = new Cookies();

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
    // return <Redirect to='/'/> *react-router-dom v5.1.2+
    window.location.href ='/'
  }

  if(goToRegister){
    // return <Redirect to='/register'/>; *react-router-dom v5.1.2+
    window.location.href ='/register'
  }

  const handleSubmit = (e) => {
   // prevent form from refreshing the whole page 
    e.preventDefault()
    const configuration = {
      method: "post",
      url: "https://cryptoview-server-production.up.railway.app/login",//change it to the deploy version
      data: {
        email,
        password,
      },
    }
    //api call
    axios(configuration)
      .then((result) => {
        setLogin(true)
        cookies.set("TOKEN", result.data.token, {
          path: '/',
        })
        window.location.href = '/auth'
        
      })
      .catch((error) => {
        error = new Error()
      })
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
    <div className=''>
      <p className='title-register'>CryptoView</p>
      <div className='outer-register-form'>
        <form className='' onSubmit={(e) => handleSubmit(e)}>
          {/* email */}
          <p className='sub-title-register'>Sign in</p>
          <div className='email-main-div'>
            <label className='email-label'>Email address</label>
            <input className='email-input' required type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {/* password */}
          <div className='password-main-div'>
            <div className='password-label'>
              <p className='password-name'>Password</p>
              <p className='password-forgot'>Forgot your password?</p>
            </div>
            <input className='password-input' required type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='input-checkbox'>
            <input className='checkbox-signed-in' type='checkbox'></input>
            <p className='text-signed-in'>Stay signed in</p>
          </div>
          <button className='create-acc-button' variant='primary' onClick={(e) => handleSubmit(e)} type='submit'>
            Continue
          </button>
          {/* go to login */}
          <p className='already-have-account'>Don't have an account? Create one!</p>
          {/* register success msg */}
          {login ? (
            // <p>Login successful</p>
            alert("Login successful")
          ) : (
            // <p className=''>You are logged as a <em className='not-italic font-semibold text-[red]'>Guest</em></p>
            <p></p>
          )}
        </form>
      </div>
    </div>
  </>)
}