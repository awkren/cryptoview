import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer-main-div' className='w-[75%] m-auto grid grid-cols-3 pt-[4rem] pb-[4rem]'>
      <div id='footer-left' className='flex flex-col gap-5'>
        <p className='text-[2rem] font-bold'>CryptoView</p>
        <label className='text-[1.4rem] font-bold text-[#3629b0] mb-[-1rem] ml-[.5rem]'>Join our newsletter</label>
        <div className='flex flex-row'>
        <input type='email' className='w-[80%] h-[3rem] rounded border-4 border-[#3629b0]' id='newsletter-mail' placeholder='youremail@address.com' required></input>
        <a href='/' id='sub-btn'>Subscribe</a>
        </div>
      </div>
      <div id='footer-mid' className='flex flex-row text-[1.1rem] font-semibold m-auto gap-6'>
      <div id='div-1st'></div>
      <div className='flex flex-col gap-8 m-auto'>
        <p>Developers</p>
        <p>Press</p>
        <p>About</p>
      </div>
      </div>
      <div id='footer-right' className='flex flex-row text-[1.1rem] font-semibold m-auto gap-6'>
      <div id='div-2nd'></div>
      <div className='flex flex-col gap-8 m-auto'>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>YouTube</p>
      </div>
      </div>
    </div>
  )
}

export default Footer