import React, { useState, useEffect } from 'react'
import './HomeOne.css';
import cryptoHeroThree from '../assets/img/cryptohero3.png'
import { FaBars, FaTimes} from 'react-icons/fa';

const HomeOne = () => {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
  return (<>
  {/* HEADER */}
    <div className='header'>
        <div className='container'>
            <h1 id='logo-text'>CryptoView</h1>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='/'>Sobre Nós</a>
                </li>
                <li>
                    <a href='/'>Explores os Caminhos</a>
                </li>
                <li>
                    <a href='/'>Como Funciona?</a>
                </li>
                <li>
                    <a id='conectar-carteira' href='/'>Conectar Carteira</a>
                </li>
            </ul>
            <div className='btn-group'>
                <button className='btn'>Entrar / Registrar</button>
            </div>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: '#1f1f1f'}}/>) : (<FaBars size={20} style={{color: '#1f1f1f'}}/>)}
            </div>
        </div>

    </div>

      {/* CONTENT HOME */}
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

  </>)
}

export default HomeOne