import React from 'react'
import Coins from './Coins'
import './HomeTwo.css'

export const HomeTwo = () => {
  return (
    <div className='home-two'>
      <div className='container-home-two'>
        <div className='up-side'>
          <p>Tenha acesso as principais moedas do mercado</p>
          <p>Veja todos os ativos disponíveis e NFTs</p>
          
        </div>
        <div className='coins-display'>
          <Coins/>
        </div>
      </div>
    </div>
  )
}

export default HomeTwo