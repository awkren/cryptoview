import React from 'react'
import { FaHotjar, FaNapster, FaRust, FaJira, FaEvernote, FaCheck, FaEarlybirds } from "react-icons/fa";
import crypto from '../assets/img/crypto.png'
import '../cryptoview-styles/SecondSec.css'

const SecondSec = () => {
  return (

    <div id='second-sec-div-two' className='mt-[4rem] grid grid-cols-2'>
      <div className='text-center text-[3.5rem]'>
        <p id='life-easier' className='font-semibold w-[90%] m-auto leading-[3.5rem]'>We make your life easier by simplifiyng data!</p>
        <p id='life-easier-desc' className='w-[60%] m-auto mt-[4rem] text-[1.3rem]'>CryptoView makes it much easier and safer for you to explore and interact with blockchain apps through your favorite web browser.</p>
       <div id='check-section' className='text-[1.3rem] flex flex-row justify-center gap-[4rem] mt-[4rem]'>
         <p className='flex flex-row items-center'><FaCheck className='text-[#3629b0]'/><span className='ml-[.4rem]'>Simple</span></p>
          <p className='flex flex-row items-center'><FaCheck className='mr-[.4rem] text-[#3629b0]'/>Reliable</p>
          <p className='flex flex-row items-center'><FaCheck className='mr-[.4rem] text-[#3629b0]'/>Quick</p>
        </div>
        <div className='border border-b-5 mt-[2rem] w-[60%] m-auto'></div>
        <p className='text-[1.3rem] font-semibold mt-[1.5rem] text-[#3629b0]'><a href='/docs'>Read our documentation</a></p>
        </div>
        <div id='img-second-div' className='m-auto'>
          <img id='img-2nd' src={crypto} className='w-[500px]' alt='/'/>
        </div>
      </div>

  )
}

export default SecondSec