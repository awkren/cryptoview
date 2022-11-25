import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import '../cryptoview-styles/Register.css'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import {validEmail, validPassword} from '../Regex.jsx'
import userEvent from '@testing-library/user-event'

const Register = () => {

  const [toggleRegisterMenu, setRegisterMenu] = useState(false);
  const [registerScreenWidth, setRegisterScreenWidth] = useState(window.innerWidth);
  const [goToHome, setGoToHome] = React.useState(false);
  const [goToLogin, setGoToLogin] = React.useState(false);
  //initial states for email, password and register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("")
  const [register, setRegister] = useState(false)
  //regex email, password
  const [emailErr, setEmailErr] = useState(false)
  // const [pwdError, setPwdError] = useState(false)
  

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
    // if(User.findOne())
    if(password.length < 5){
      alert('passwords must have at least 5 characters!')
      return Error;
    }

    if(!validEmail.test(email)){
      setEmailErr(true)
      return Error;
    }
    // if(!validPassword.test(password)){
    //   setPwdError(true)
    //   return Error;
    // }
    
    axios(configuration)
    .then((result) => {
      setRegister(true);
      if(setRegister === true){
        return <Redirect to='/coins'/>
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
    <div className=''>
      <p className='title-register'>CryptoView</p>
      <div className='outer-register-form'>
        <form className='' onSubmit={(e) => handleSubmit(e)}>
          {/* email */}
          <p className='sub-title-register'>Create a new account</p>
          <div className='email-main-div'>
            <label className='email-label'>Email address</label>
            <input id='mail-input' className='email-input text-[1.1rem] pl-[.5rem]' required type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {/* password */}
          <div className='password-main-div'>
            <div className='password-label'>
              <p className='password-name'>Password</p>
              {/* <p className='password-forgot'>Forgot your password?</p> */}
            </div>
            <input required id='pass-input' className='password-input text-[1.3rem] pl-[.5rem]' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {/* <div className='input-checkbox'>
            <input className='checkbox-signed-in' type='checkbox'></input>
            <p className='text-signed-in'>Stay signed in</p>
          </div> */}
          <button className='create-acc-button' variant='primary' onClick={(e) => handleSubmit(e)} type='submit'>
            Create account
          </button>
          {/* go to login */}
          <p className='already-have-account hover:cursor-pointer hover:underline' onClick={() => {
            setGoToLogin(true);
          }}>Already have an account? Go to login!</p>
          {/* register success msg */}
          {emailErr && <p>Your email is invalid</p>}
          {/* {pwdError && <p>Your password is invalid</p>} */}
          {register ? (
            // <p>Accout created</p>
            alert('Account created, taking you to the login page. :)')
          ) : (
            // <p className=''>You are logged as a <em class  Name='not-italic font-semibold text-[red]'>Guest</em></p>
            // <p>Email already exists in our database!</p>
            <p></p>
          )}
        </form>
      </div>
    </div>

  </>)
}

export default Register