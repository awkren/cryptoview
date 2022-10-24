import React from 'react'
import './Home.css'
import './homestyle.scss'
import logoOne from '../assets/img/logo1.png'
import cryptoHeroTwo from '../assets/img/cryptohero2.png'
import cryptoHeroThree from '../assets/img/cryptohero3.png'



const Home = () => {
  
  return (<>
    <div id='header-container' className='flex mt-[0.5rem] text-[1.2rem] items-center'>
      
      <div id='left-nav' className='flex flex-1 ml-[6rem] mb-' >

        <div id='div-text-logo' className='flex flex-row mt-[0] pt-[0] items-center' >
          <img src={logoOne} alt='#' className='w-[100px]'/>
          <p id='text-logo' className=' text-3xl font-semibold'>CryptoView</p>
        </div>

      </div>

      <div id='centered-nav' className='flex flex-1 justify-around'>

        <div className=''>
          <a href='/'><p id='hover-underline-animation' className=''>Sobre nós</p></a>
        </div>
        <div> 
          <a href='/'><p id='hover-underline-animation'>Explore Os Caminhos</p></a>
        </div>
        <div> 
          <a href='/'><p id='hover-underline-animation'>Como Funciona?</p></a>
        </div>

      </div>

      <div id='right-nav' className='flex flex-1 justify-end mr-[6rem] items-center'>

      <div className='mr-[3.5rem] text-[1.3rem]'>
        <a href='/login'><p class='sparkle u-hover--sparkle'>Entrar</p></a>
      </div>
      <div className='underline underline-offset-[7px] text-[1.5rem] font-extrabold uppercase'>
        <a href='/signup'><p id='create-acc'>Criar Conta</p></a>
      </div>

      </div>

    </div>

    <div id='mid-home-content' className='flex flex-row text-xl ml-[6rem] mr-[6rem]'>
      <div id='left-text' className='mt-[9rem] ml-[2rem]'>
        <p className=''>Tudo em um só lugar.</p>
        <p id='' className='text-5xl font-bold leading-[6rem]'>Nós levamos dados a sério!</p>
        <p className=' text-5xl font-bold leading-[1rem]'>Uptime de 99%, 24/7.</p>
        <p className='leading-[6rem]'>Acompanhe suas moedas favoritas 24/7.</p>
      </div>
      <div id='right-img'>
        <img src={cryptoHeroTwo} alt='/'/>
      </div>
    </div>
    
    
  </>)
}

export default Home