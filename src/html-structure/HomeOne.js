import React from 'react'
import './HomeOne.css';
import cryptoHeroThree from '../assets/img/cryptohero3.png'

const HomeOne = () => {
  return (
    <div className='home-one'>
      <div className='container'>
        <div className='left-side'>
          <p className='text-[3rem] uppercase font-extrabold text-center'>Porque nós levamos dados a sério!</p>
          <p className='underline font-light text-[1.5rem] text-center'>Tudo em um só lugar.</p><br></br>
          <p className='text-center'>Acompanhe suas moedas favoritas em tempo real. Nós da CryptoView garantimos aproximadamente 95% de precisão em nossas análises.</p><br></br>
          <p className='text-center'>Contamos com um time mundialmente conhecido e com informações secretas que nos ajudam a garantir um retorno positivo para os nossos parceiros!</p><br></br>
          <p className='text-center'>Inscreva-se para ser atualizado sempre que tivermos novas informações:</p>
          <div className='mail-container'>
            <input className='email-topo' type='email' placeholder='Insira seu email'/>
            <button className='btn'>Saiba Mais</button>
          </div>
        </div>
        <div className='right-side'>
          <div className='img-container'>
            <img src={cryptoHeroThree} alt='#'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeOne