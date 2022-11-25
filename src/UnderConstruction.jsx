import React from 'react'
import underConstruction from './assets/img/under-construction.png'
import './cryptoview-styles/UnderConstruction.css'

const UnderConstruction = () => {
  return (
    <div id='main-under' className='flex flex-col items-center gap-[2rem] mt-[5rem]'>
      <p id='page-under' className='text-[4rem]'>Page under construction</p>
      <p id='text-rest' className='text-[2rem]'>We are currently building this page, but don't worry, you can still access other pages</p>
      <img className='w-[800px]' src={underConstruction} alt='/'/>
      <p id='gohome' className='text-[1.5rem] uppercase font-semibold underline text-[blue]'><a href='/'>Click here to go to the homepage</a></p>
    </div>
  )
}

export default UnderConstruction