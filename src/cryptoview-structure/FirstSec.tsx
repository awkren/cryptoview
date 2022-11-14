import React from 'react'
import '../cryptoview-styles/FirstSec.css'

const FirstSec = () => {
  return (
    <div id='main-first-sec' className='w-[80%] flex flex-col justify-center items-center m-auto'>
      <div id='title-first-sec' className='mt-[10rem] text-[5rem] font-bold leading-[4.5rem]'>
        <div id='blob-title'>
        
        </div>
        <div id='blend'>
          <p id='top-title' className='text-center'>It's all about accuracy.</p>
        </div>
      </div>
      <div id='sub-title-first-sec' className='mt-[3rem]' >
        <p className='text-[2rem]'>All coins, 99% of uptime, 24/7,</p>
        <p className='text-[2rem] text-center'>that's how we play, baby!</p>
      </div>
      <div id='btn-try-first-sec' className='mt-[3rem]'>
        <a href='/' className='p-[1rem] bg-[black] text-[white] text-[1.6rem] font-semibold border border-red rounded-full'>Try CryptoView</a>
      </div>
      <div id='below-button' className='mt-[2rem] text-center leading-[1.5rem] italic'>
        <p>CryptoView 2.0 is on it's way</p>
        <p>Get a <b>message</b> when it's ready</p>
      </div>

    </div>
    
  )
}

export default FirstSec