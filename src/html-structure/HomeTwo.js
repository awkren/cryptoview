import React from 'react'
import Coins from './Coins'
import './HomeTwo.css'

export const HomeTwo = () => {
  return (
    <div className='home-two'>
      <div className='container-home-two'>
        <div className='up-side'>
          <p className='text-[2.5rem] font-semibold'>Tenha acesso as principais moedas do mercado</p>
          <p className='text-[2rem]'>Veja todos os ativos disponíveis e NFTs</p>
        </div>
        <div className='coins-display'>
          <Coins/>
        </div>
      </div>
    </div>
  )
}

export default HomeTwo