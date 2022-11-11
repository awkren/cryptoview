import React from 'react'
import './Footer.css'
import {BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <div id='footer-main-div' className='w-[75%] m-auto grid grid-cols-3 pt-[4rem] pb-[4rem]'>
      <div id='footer-left' className='flex flex-col gap-5'>
        <p id='footer-title' className='text-[2rem] font-bold'>CryptoView</p>
        <label id='label-join' className='text-[1.4rem] font-bold text-[#3629b0] mb-[-1rem] ml-[.5rem]'>Join our newsletter</label>
        <div id='mail-field' className='flex flex-row'>
        <input type='email' className='w-[80%] h-[3rem] rounded border-4 border-[#3629b0]' id='newsletter-mail' placeholder='youremail@address.com' required></input>
        <a href='/' id='sub-btn'>Subscribe</a>
        </div>
      </div>
      <div id='footer-mid' className='flex flex-row text-[1.1rem] font-semibold m-auto gap-6'>
      <div id='div-1st'></div>
      <div id='footer-1st-col' className='flex flex-col gap-8 m-auto'>
        <p>Developers</p>
        <p>Press</p>
        <p>About</p>
      </div>
      </div>
      <div id='footer-right' className='flex flex-row text-[1.1rem] font-semibold m-auto gap-6'>
      <div id='div-2nd'></div>
      <div id='footer-2nd-col' className='flex flex-col gap-8 m-auto'>
        <p className='flex flex-row items-center'><BsInstagram id='footer-icon-size'className='mr-[.5rem]'/><span id='cap-footer'>Instagram</span></p>
        <p className='flex flex-row items-center'><BsTwitter id='footer-icon-size' className='mr-[.5rem]'/><span id='cap-footer'>Twitter</span></p>
        <p className='flex flex-row items-center'><BsYoutube id='footer-icon-size' className='mr-[.5rem]'/><span id='cap-footer'>Youtube</span></p>
      </div>
      </div>
    </div>
    {/* footer mobile */}
    <div id='footer-mobile'>

    </div>
    </>
    
  )
}

export default Footer