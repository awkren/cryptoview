import React, {useEffect, useState} from 'react'
import '../cryptoview-styles/Profile.css'
import { Navigate } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Profile = () => {

  const [toggleProfileMenu, setProfileMenu] = useState(false);
  const [profileScreenWidth, setProfileScreenWidth] = useState(window.innerWidth);
  const [goToHome, setGoToHome] = React.useState(false);

  const toggleProfileNav = () => {
    setProfileMenu(!toggleProfileMenu);
  }
  useEffect(() => {
    const changeProfileWidth = () => {
      setProfileScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeProfileWidth)
    return () => {
      window.removeEventListener('resize', changeProfileWidth);
    }
  }, []);

  if(goToHome){
    return <Navigate to='/'/>;
  }

  return (<>
    <section className='wrapper-profile'>
      <nav className='nav-profile'>
        <p className='crypto-logo-text-profile'>CryptoView</p>
        {(toggleProfileMenu || profileScreenWidth > 940) && (
          <ul className='list-profile'>
            <li className='items-profile' onClick={() =>{
              setGoToHome(true);
            }}>Home</li>
            <li className='items-profile'>Earn</li>
            <li className='items-profile'>Courses</li>
            <li className='crypto-logo-text-mobile-profile'>CryptoView</li>
            <li className='items-profile'>Sign Up</li>
          </ul>
        )}
        <div className='btn-profile' onClick={toggleProfileNav}>
          {toggleProfileMenu ? (<FaTimes size={20} style={{color: '#FFF'}}/>) : (<FaBars size={20} style={{color: '#FFF'}}/>)}
        </div>
      </nav>
    <div className="custom-shape-divider-bottom-1668349927-profile">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill-profile"></path>
      </svg>
    </div>
  </section>
  <div className='mt-[3rem] text-[2rem] text-center'>Profile Page<p className='font-bold'>Only auth users can see this :p</p></div>
  </>)
}

export default Profile