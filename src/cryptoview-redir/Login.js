import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import '../cryptoview-styles/Login.css'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'
import AuthComponent from './AuthComponent'
import { validEmail, validPassword } from '../Regex'


export default function Login({setUserEmail}) {

  const [toggleLoginMenu, setLoginMenu] = useState(false);
  const [loginScreenWidth, setloginScreenWidth] = useState(window.innerWidth);
  const [goToHome, setGoToHome] = React.useState(false);
  const [goToRegister, setGoToRegister] = React.useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState(false);
  //regex email, password
  const [emailErr, setEmailErr] = useState(false);
  // const [pwdError, setPwdError] = useEffect(false)

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
        cookies.set('currentUser', result.data.email, {
          path: '/'
        })
        
        window.location.href = '/coins'
        
      })
      .catch((error) => {
        error = new Error()
      })
  }

  return (<>
    <div className=''>
      <p className='title-register'>CryptoView</p>
      <div className='outer-register-form'>
        <form className='' onSubmit={(e) => handleSubmit(e)}>
          {/* email */}
          <p className='sub-title-register'>Sign in</p>
          <div className='email-main-div'>
            <label className='email-label'>Email address</label>
            <input id='mail-input' className='email-input text-[1.3rem] pl-[.5rem]' required type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {/* password */}
          <div className='password-main-div'>
            <div className='password-label'>
              <p className='password-name'>Password</p>
              <p className='password-forgot'>Forgot your password?</p>
            </div>
            <input id='pass-input' className='password-input text-[1.3rem] pl-[.5rem]' required type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <p className='forgot-mobile'>Forgot your password?</p>
          </div>
          <div className='input-checkbox'>
            <input className='checkbox-signed-in' type='checkbox'></input>
            <p className='text-signed-in'>Stay signed in</p>
          </div>
          <button className='create-acc-button' variant='primary' onClick={(e) => handleSubmit(e)} type='submit'>
            Continue
          </button>
          {/* go to login */}
          <p className='already-have-account hover:cursor-pointer hover:underline' onClick={() => {
            setGoToRegister(true)
          }}>Don't have an account? Create one!</p>
          {/* register success msg */}
          {login ? (
            // <p>Login successful</p>
            alert("Login successful")
          ) : (
            <p></p>
          )}
        </form>
      </div>
    </div>
  </>)
}