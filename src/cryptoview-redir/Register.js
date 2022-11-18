import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import '../cryptoview-styles/Register.css'
import { Navigate } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap';

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
    return <Navigate to='/'/>;
  }

  if(goToLogin){
    return <Navigate to='/login'/>;
  }

  //testing form submit
  const handleSubmit = (e) => {
    //prevent form from refreshing the whole page
    e.preventDefault()
    //popup alert showing submit text
    alert('Submitted')
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

    {/* form | old form */} 
    {/* <div id='login-form' className='grid grid-cols-1 items-center justify-center w-[60%] m-auto text-center pt-[4rem]'>
      <p className='text-[2rem] font-semibold mb-[1rem]'>Create Account</p>
      <form className='flex flex-col gap-[.5rem]'>
        <label className='text-[1.5rem]'>Enter your email:</label>
        <input className='border-2 border-purple-700 w-[40%] text-[1.3rem] m-auto' type='email'/>
        <label className='text-[1.5rem]'>Enter your password:</label>
        <input className='border-2 border-purple-700 w-[40%] text-[1.3rem] m-auto' type='password'/>
        <label className='text-[1.5rem]'>Repeat your password:</label>
        <input className='border-2 border-purple-700 w-[40%] text-[1.3rem] m-auto' type='password'/>
        <p className='text-[1.1rem] hover:underline hover:cursor-pointer' onClick={() => {
          setGoToLogin(true);
        }}>Already have an account? Login instead.</p>
        <a href='/' className='text-[1.5rem] border-2 border-purple-700 rounded-full w-[20%] align-middle m-auto items-center justify-center bg-[purple] text-[white]'>Create Account</a>
      </form>
    </div> */}

    <div className='register-form'>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter an email'/>
        </Form.Group>
        {/* password */}
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>password</Form.Label>
          <Form.Control type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        </Form.Group>
        {/* submit button */}
        <Button variant='primary' onClick={(e) => handleSubmit(e)} type='submit'>
          Submit
        </Button>
      </Form>
    </div>

  </>)
}

export default Register