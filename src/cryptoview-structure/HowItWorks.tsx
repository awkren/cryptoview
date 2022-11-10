import React from 'react'
import './HowItWorks.css'
import {FaRegHandPointRight} from 'react-icons/fa'
import {TiArrowRightThick, TiArrowForward} from 'react-icons/ti'

const HowItWorks = () => {
  return (
    <div id='how-it-works-div' className='mt-[3rem]'>
      <p className='text-center text-[2.2rem] font-semibold uppercase'>How it works?</p>
      <div id='how-grid' className='flex flex-col w-[80%] m-auto text-center'>
        <div id='how-top' className='m-auto'>
          <p className='text-[1.7rem] mt-[1.5rem] flex flex-row items-center'><TiArrowRightThick id='icon-how' className='mr-[5px] text-[#3629b0]'/>You create an account, get access to graphs, marketcap and other data from thousands of coins.</p>
          <p className='text-[1.7rem] mt-[1rem] flex flex-row items-center'><TiArrowRightThick id='icon-how' className='mr-[5px] text-[#3629b0]'/>Plus, you are able to save your favorite coins. This way, you get access to them right in your profile.</p>
        </div>
        <div id='how-bot' className='mt-[2rem] m-auto'>
          <p className='text-[1.3rem] font-semibold text-[#3629b0] uppercase flex flex-row items-center'><TiArrowForward className='mr-[5px]'/>Read more</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks