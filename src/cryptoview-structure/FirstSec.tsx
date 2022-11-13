import React from 'react'
import './FirstSec.css'

const FirstSec = () => {
  return (
    <div id='main-first-sec' className='w-[80%] flex flex-col justify-center items-center m-auto'>
      <div id='title-first-sec' className='mt-[10rem] text-[5rem] font-bold leading-[4.5rem]'>
        <div id='blob-title'>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#3629B0" d="M39.8,-52.7C53.3,-45,67,-35.6,69.5,-23.6C72.1,-11.5,63.5,3.1,55.2,14.6C46.9,26.1,39,34.5,29.9,47.9C20.7,61.3,10.4,79.9,-4.2,85.6C-18.8,91.4,-37.5,84.5,-49.3,71.9C-61.2,59.3,-66,41.2,-68,24.6C-70,7.9,-69.2,-7.1,-64.7,-21.1C-60.3,-35,-52.2,-47.8,-40.8,-56.1C-29.4,-64.4,-14.7,-68.2,-0.8,-67.2C13.2,-66.1,26.4,-60.3,39.8,-52.7Z" transform="translate(100 100)" />
</svg>
        </div>
        <p id='top-title' className='text-center'>It's all about accuracy.</p>
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
        <p>Get a message when it's ready</p>
      </div>

    </div>
    
  )
}

export default FirstSec