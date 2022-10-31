import React, { useState } from 'react'
import './Header.css'
import './Header.scss'
import logoOne from '../assets/img/logo1.png'
import cryptoHeroTwo from '../assets/img/cryptohero2.png'
import Featured from '../apicall/Featured'
import pcOne from '../assets/img/pc1.png'
import { FiPlus } from "react-icons/fi";
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Header = () => {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

  return (
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
                {click ? (<FaTimes size={20} style={{color: '#f2e8de'}}/>) : (<FaBars size={20} style={{color: '#f2e8de'}}/>)}
            </div>
        </div>

    </div>
  )
}

export default Header