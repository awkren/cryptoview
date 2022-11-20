import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import '../cryptoview-styles/Register.css'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [toggleRegisterMenu, setRegisterMenu] = useState(false);
  const [registerScreenWidth, setRegisterScreenWidth] = useState(window.innerWidth);
  const [goToHome, setGoToHome] = React.useState(false);
  const [goToLogin, setGoToLogin] = React.useState(false);
  //initial states for email, password and register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("")
  const [register, setRegister] = useState(false)

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

  if(goToHome){
    window.location.href='/'
  }

  if(goToLogin){
    window.location.href= '/login'
  }

  //testing form submit
  const handleSubmit = (e) => {
    //prevent form from refreshing the whole page
    e.preventDefault()
    //axios config
    const configuration = {
      method: 'post',
      url: 'https://cryptoview-server-production.up.railway.app/register',
      data: {
        email,
        password,
      },
    }
    axios(configuration)
    .then((result) => {
      setRegister(true);
      if(setRegister === true){
        return <Redirect to='/auth'/>
        }
      })
      .catch((error) => {
        error = new Error();
      })
  }

  if(register){
    window.location.href='/login'
  }

  return (<>
    <section className='wrapper-register'>
      <nav className='nav-register'>
        <p className='crypto-logo-text-register'>CryptoView</p>
        {(toggleRegisterMenu || registerScreenWidth > 940) && (
          <ul className='list-register'>
            <li className='items-register' onClick={() => {
              setGoToHome(true);
            }}>Home</li>
            <li className='items-register'>Earn</li>
            <li className='items-register'>Courses</li>
            <li className='crypto-logo-text-mobile-register'>CryptoView</li>
            <li className='items-register' onClick={() => {
              setGoToLogin(true);
            }}>Login</li>
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
    <div className=''>
      <p className='title-register'>CryptoView</p>
      <div className='outer-register-form'>
        <p className='sub-title-register'>Create a new account</p>
        <form className='' onSubmit={(e) => handleSubmit(e)}>
          {/* email */}
          <div className='email-main-div'>
            <label className='email-label'>Email address</label>
            <input className='email-input' required type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {/* password */}
          <div className='password-main-div'>
            <label className='password-label'>Password</label>
            <input className='password-input' required type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className='create-acc-button' variant='primary' onClick={(e) => handleSubmit(e)} type='submit'>
            Continue
          </button>
          {/* go to login */}
          <p className='already-have-account'>Already have an account? Go to login!</p>
          {/* register success msg */}
          {register ? (
            <p>Accout created</p>
          ) : (
            // <p className=''>You are logged as a <em className='not-italic font-semibold text-[red]'>Guest</em></p>
            <p></p>
          )}
        </form>
      </div>
    </div>

  </>)
}

export default Register