import { isAbsolute } from 'path'
import React from 'react'
import topWave from '../assets/img/wave.svg'

const Header = () => {
  return (
    <div id='header-outer' className=''>
      {/* <img src={topWave} alt='svg-top'/> */}
    <div id='main-header' className="w-[80%] m-auto flex flex-row justify-around border border-red-500">
      
      <div id='left-header' className='flex flex-row items-center gap-[5rem] text-[1.5rem]'>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div id='mid-header' className='text-[2rem] font-bold'>
        <p>CryptoView</p>
      </div>
      <div id='right-header' className='flex flex-row items-center gap-[5rem] text-[1.5rem]'>
        <p>Login</p>
        <p>Sign Up</p>
      </div>
    </div>
    </div>
  )
}

export default Header