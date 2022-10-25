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

    <div id='mid-home-content' className='flex flex-row text-xl ml-[6rem] mr-[6rem] items-center pt-[2rem]'>
      <div id='left-text' className='w-[50%]'>
        <div id='second-text' className=''>
        <p id='left1' className='text-6xl font-extrabold leading-[6rem]'>Nós levamos dados a sério!</p>
        <p id='left1' className=' text-6xl font-extrabold leading-[3rem]'>Uptime de 99%, 24/7.</p>
        </div>
        <p id='highlight' className='leading-[4rem] text-center underline text-2xl'>Tudo em um só lugar.</p>
        <p id='left1' className='mt-[1.2rem]'>Acompanhe suas moedas favoritas em tempo real.
         Nós da CryptoView garantimos aproximadamente 95% de precisão em nossas análises.<br></br>
         Contamos com um time mundialmente conhecidos e com <em className='font-bold not-italic'>informações secretas</em> que nos
         ajudam a garantir um retorno posivo para os nossos parceiros!</p>
        <div id='newsletter-div' className='flex flex-col items-center'>
          <p className='text-center mt-[3rem]'>Inscreva-se para ser atualizado sempre que tivermos novas informações:</p>
          <form id='submit-newsletter' className='m-auto'>
            <input id='input-newsletter' type='mail' placeholder='youremail@something.com' className='w-[30rem] h-[3rem] mt-[2.5px] border-1 rounded-[5px]'>
            </input>
            <span id='sub-button'><a href="#"></a></span>
          </form>
        </div>
      </div>
      <div id='right-img' className='w-[50%]'>
        <img src={cryptoHeroTwo} alt='/'/>
      </div>
    </div>

    <div class="scroll-downs">
        <div class="mousey">
          <div class="scroller"></div>
        </div>
    </div>
    <br></br>
    <br></br>
    
    <div id='second-half-homepage' className='bg-[#f2e8de] text-[#1f1f1f]'>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
    </div>

  </>)
}

export default Home