import React from 'react'

const Header = () => {
  return (
    <div id='main-header' className='w-[80%] m-auto flex flex-row justify-around border border-red-500'>
      <div id='left-header' className='flex flex-row items-center gap-[5rem] text-[1.5rem]'>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div id='mid-header' className='text-[3rem] font-bold'>
        <p>CryptoView</p>
      </div>
      <div id='right-header' className='flex flex-row items-center gap-[5rem] text-[1.5rem]'>
        <p>Login</p>
        <p>Sign Up</p>
      </div>
    </div>
  )
}

export default Header