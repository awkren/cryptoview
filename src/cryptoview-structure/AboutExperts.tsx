import React from 'react'
import '../cryptoview-styles/AboutExperts.css'
import cryptoThree from '../assets/img/crypto3.png'
import { SiCnn, SiBbc, SiThewashingtonpost, SiNewyorktimes } from "react-icons/si";
import {TiArrowForward} from 'react-icons/ti'

const AboutExperts = () => {
  return (
    <div id='main-about-experts' className='w-[75%] m-auto grid grid-cols-2'>
      <div id='about-experts-left' className='m-auto'>
        <img className='w-[500px]' src={cryptoThree} alt='/'/>
      </div>
      <div id='about-experts-right' className='m-auto text-center'>
        <p id='title-experts' className='text-[3.5rem] font-bold'>We work with the best</p>
        <p className='text-[1.5rem] w-[95%] m-auto text-justify mt-[1rem] mb-[1rem]'>Our consultors have worked in the biggest banks in the world.
        We understand what brings results, that's why we are willing to give you the best experience and professionals in the market.</p>
        <p className='text-[1.5rem] w-[95%] m-auto text-center mb-[1rem]'>Our collaborators have more than 8+ years of experience, and the majority of them were featured on some of the biggest news portals in the USA.</p>
        <p id='news' className='flex gap-[3rem] text-[3.2rem] justify-center mb-[1rem]'><SiCnn title='CNN'/><SiBbc title='BBC'/><SiThewashingtonpost title='The Washington Post'/><SiNewyorktimes title='The New York Times'/></p>
        <a href='/' className='text-[1.5rem] font-semibold text-[#3629b0] flex items-center justify-center'><TiArrowForward className='mr-[.3rem]'/>Read more about them!</a>
      </div>
    </div>
  )
}

export default AboutExperts