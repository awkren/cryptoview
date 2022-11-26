import React from 'react'
import '../cryptoview-styles/ThirdSec.css'
import cryptotwo from '../assets/img/crypto2.png'

const ThirdSec = () => {
  return (
    <div id='third-div' className='pt-[3.5rem] w-[80%] m-auto grid grid-cols-2'>
      <div id='third-left-side' className='text-center m-auto w-[85%]'>
        <p className='text-[2.5rem] font-semibold'><a href='/register'>Create a <span className='font-bold text-[#3629b0]'>FREE</span> account.</a></p>
        {/* could add a background brush on text above */}
        
        <p className='text-[1.3rem] italic font-semibold'>Really! It's free forever</p>
        <p id='third-margin' className='text-[2.2rem] mt-[3rem]'>But if you want access to our consultors, we are giving 50% off until Dec. 2022<span className='text-[1.3rem] align-top'>*</span></p>
        <p id='support-off' className='italic text-right'>*Talk to our support to see how we can help you</p>
      </div>
      <div id='third-right-side' className='m-auto'>
        <img id='third-img' src={cryptotwo} className='w-[500px]' alt='.'/>
        <a id='book-call' className='hidden' href='/'>Book a call</a>
      </div>
    </div>
  )
}

export default ThirdSec