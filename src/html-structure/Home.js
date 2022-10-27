import React from 'react'
import './Home.css'
import './homestyle.scss'
import logoOne from '../assets/img/logo1.png'
import cryptoHeroTwo from '../assets/img/cryptohero2.png'
import cryptoHeroThree from '../assets/img/cryptohero3.png'
import Featured from '../apicall/Featured'
import pcOne from '../assets/img/pc1.png'
import { FiPlus } from "react-icons/fi";

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
         Contamos com um time mundialmente conhecido e com <em className='font-bold not-italic'>informações secretas</em> que nos
         ajudam a garantir um retorno positivo para os nossos parceiros!</p>
        <div id='newsletter-div' className='flex flex-col items-center'>
          <p className='text-center mt-[2rem]'>Inscreva-se para ser atualizado sempre que tivermos novas informações:</p>
          <form id='submit-newsletter' className='m-auto'>
            <input id='input-newsletter' type='mail' placeholder='youremail@something.com' className='w-[30rem] h-[3rem] mt-[2.5px] border-1 rounded-[5px]'>
            </input>
            <span id='sub-button'><a href="#"></a></span>
          </form>
        </div>
        <div className='italic ml-[5rem] text-xs'>
          <p>Powered by <a href='https://www.coingecko.com/pt' target='_blank'>CoinGecko</a></p>
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
    
    <div id='featured' className=' text-[#1f1f1f] flex justify-center pl-[6rem] pr-[6rem]'>
      <div id='second-container' className=''>
        <div id='left' className='flex flex-col justify-center text-center m-auto'>
          <p className='text-3xl font-bold mt-[1rem]'>Explore top crypto's like Bitcoin, Ethereum, and Dogecoin</p>
          <p className='text-2xl font-semibold'>See all available assets: Cryptocurrencies and NFT's</p>
        </div>

        <div id='coin-indexes' className='flex justify-center'>
          <Featured/>
        </div>

        <div className=''>
          <p id='btn-ver-mais' className='text-[#1f1f1f] underline'><a className='flex items-center' href='/'><FiPlus id='plus-icon'/><span></span>Ver mais moedas</a></p>
        </div>

        

        <div id='featured-second' className='mt-[2rem]'>
          <div id='second-content' className='flex justify-evenly'>
            <img src={pcOne} alt='/' id='img-signup' className='w-[600px]'/>
            <div className='w-[40%] flex flex-col justify-center items-center'>
              <p className='text-[3rem] font-bold uppercase'>Ganhe de forma passiva</p>
              <p className='text-[1.4rem] mt-[0.5rem] font-semibold text-center'>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in 
                the app to automatically earn rewards at the end of each month with no lockups 
                and no limits.</p>
                <div className='flex mt-[1rem]'>
                  <input id='subtwo' className='w-[400px]' type="email" placeholder="Enter your email"></input>
                  <button id='btn-ver-mais-two' className='text-[#f2e8de]'>Cadastrar</button>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div id='footer' className='text-[#f2e8de] flex justify-around ml-[6rem] mr-[6rem]'>
      <div id='footer-logo' className='flex flex-col justify-center'>
        <p className='text-4xl font-bold'>CryptoView</p>
        <p>+55 00 0000-0000</p>
        <p>cryptoview@cryptoview.br</p>
      </div>
      <div id='footer-left'>
        <p id='title-left-footer' className='text-[1.5rem] font-semibold underline'>Suporte</p>
        <p>Fale Conosco</p>
        <p>Chat</p>
        <p>FAQ</p>
        <p>Ajuda</p>
      </div>
      <div id='footer-middle'>
        <p id='title-middle-footer' className='text-[1.5rem] font-semibold underline'>Desenvolvedores</p>
        <p>Documentação</p>
        <p>API</p>
        <p>E-Commerce</p>
        <p>Nuvem</p>
      </div>
      <div id='footer-right'>
        <p id='title-right-footer' className='text-[1.5rem] font-semibold underline'>Empresa</p>
        <p>Investimentos</p>
        <p>Sobre</p>
        <p>Documentação Legal</p>
        <p>Privacidade</p>
      </div>
    </div>   

  </>)
}

export default Home 