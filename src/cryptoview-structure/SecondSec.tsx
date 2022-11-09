import React from 'react'
import { FaHotjar, FaNapster, FaRust, FaJira, FaEvernote } from "react-icons/fa";
import crypto from '../assets/img/crypto.png'

const SecondSec = () => {
  return (
    <div id='second-sec-div' className='flex flex-col w-[80%] items-center m-auto mt-[3rem]'>
      <div id='sponsors' className='text-center'>
        <div className=''>
          <p className='mb-[2rem] text-[2rem] font-semibold'>Supported by:</p>
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
        </div>
      </div>

      <div className='mt-[4rem] border border-red-500 w-[100%] grid grid-cols-2 m-auto'>
        <div className='text-center text-[3rem]'>
          <p className='font-semibold'>We make your life easier by simplifiyng data</p>
          <p className='text-[1.3rem]'>CryptoView makes it much easier and safer for you to explore and interact with blockchain apps through your favorite web browser.</p>
        </div>
        <div>
          <img src={crypto} className='w-[500px]' alt='/'/>
        </div>
      </div>

    </div>
  )
}

export default SecondSec