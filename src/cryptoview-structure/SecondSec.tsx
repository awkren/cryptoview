import React from 'react'
import { FaHotjar, FaNapster, FaRust, FaJira, FaEvernote, FaCheck, FaEarlybirds } from "react-icons/fa";
import crypto from '../assets/img/crypto.png'
import './SecondSec.css'

const SecondSec = () => {
  return (
    <div id='second-sec-div' className='flex flex-col w-[80%] items-center m-auto mt-[3rem]'>
      <div id='sponsors' className='text-center'>
        <div className=''>
          <p className='mb-[2rem] text-[2rem] font-semibold'>Sponsored by:</p>
        </div>
        <div id='supported-companies' className='flex flex-row gap-[6rem] text-[1.5rem] text-center'>
          <div id='hotjar'>
            <p className='text-[4rem]'><FaHotjar/></p>
            {/* <p>Hotjar</p> */}
          </div>

          <div id='napster'>
            <p className='text-[4rem] text-center'><FaNapster/></p>
            {/* <p className='text-center'>Napster</p> */}
          </div>

          <div id='rust'>
            <p className='text-[4rem]'><FaRust/></p>
            {/* <p className=''>Rust</p> */}
          </div>

          <div id='jira'>
            <p className='text-[4rem]'><FaJira/></p>
            {/* <p>Jira</p> */}
          </div>

          <div id='evernote'>
            <p className='text-[4rem]'><FaEvernote/></p>
            {/* <p>Evernote</p> */}
          </div>
          <div id='early-birds'>
          <p className='text-[4rem]'><FaEarlybirds/></p>
          </div>
        </div>
      </div>

      <div id='second-sec-div' className='mt-[4rem] grid grid-cols-2'>
        <div className='text-center text-[3.5rem]'>
          <p id='life-easier' className='font-semibold w-[90%] m-auto leading-[3.5rem]'>We make your life easier by simplifiyng data!</p>
          <p id='life-easier-desc' className='w-[60%] m-auto mt-[4rem] text-[1.3rem]'>CryptoView makes it much easier and safer for you to explore and interact with blockchain apps through your favorite web browser.</p>
          <div id='check-section' className='text-[1.3rem] flex flex-row justify-center gap-[4rem] mt-[4rem]'>
            <p className='flex flex-row items-center'><FaCheck className='text-[#3629b0]'/><span className='ml-[.4rem]'>Simple</span></p>
            <p className='flex flex-row items-center'><FaCheck className='mr-[.4rem] text-[#3629b0]'/>Reliable</p>
            <p className='flex flex-row items-center'><FaCheck className='mr-[.4rem] text-[#3629b0]'/>Quick</p>
          </div>
          <div className='border border-b-5 mt-[2rem] w-[60%] m-auto'></div>
          <p className='text-[1.3rem] font-semibold mt-[1.5rem] text-[#3629b0]'>Read our documentation</p>
        </div>
        <div id='img-second-div' className='m-auto'>
          <img id='img-2nd' src={crypto} className='w-[500px]' alt='/'/>
        </div>
      </div>

    </div>
  )
}

export default SecondSec