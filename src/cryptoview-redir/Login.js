import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import '../cryptoview-styles/Login.css'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'

const Login = () => {

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
    return <Redirect to='/'/>
  }

  if(goToRegister){
    return <Redirect to='/register'/>;
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
  {/* old form */}
    {/* <div id='login-form' className='grid grid-cols-1 items-center justify-center w-[60%] m-auto text-center pt-[4rem]'>
      <p className='text-[2rem] font-semibold mb-[1rem]'>Login</p>
      <form className='flex flex-col gap-[.5rem]'>
        <label className='text-[1.5rem]'>Enter your email:</label>
        <input className='border-2 border-purple-700 w-[40%] text-[1.3rem] m-auto' type='email'/>
        <label className='text-[1.5rem]'>Enter your password:</label>
        <input className='border-2 border-purple-700 w-[40%] text-[1.3rem] m-auto' type='password'/>
        <p className='text-[1.1rem] hover:underline hover:cursor-pointer w-[100%]' onClick={() => {
          setGoToRegister(true);
        }}>Don't have an account? Sign up.</p>
        <a href='/' className='text-[1.5rem] border-2 border-purple-700 rounded-full w-[10%] align-middle m-auto items-center justify-center bg-[purple] text-[white]'>Login</a>
      </form>
    </div> */}

    <div className='login-form'>
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <div id='formBasicEmail'>
          <label>Email address</label>
          <input type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter an email'/>
        </div>
        {/* password */}
        <div id='formBasicPassword'>
          <label>password</label>
          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        </div>
        {/* submit button */}
        <button variant='primary' type='submit' onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
        {/* login success msg */}
        {login ? (
          <p className='text-success'>You are logged in successfully</p>
        ) : (
          <p className='text-danger'>You are not logged in</p>
        )}
      </form>
    </div>
  </>)
}

export default Login