import React from 'react'
import './Footer.css'
import {BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <section className='wrapper'>
      <div id='footer-main-div' className='w-[75%] text-[#FFFFFF] m-auto grid grid-cols-3 pt-[4rem] pb-[4rem]'>
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
      <div className="custom-shape-divider-top-1668345511">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  )
}

export default Footer