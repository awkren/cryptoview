import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <p className='title-footer'>Crypto<span className='primary'>View</span></p>
                </div>
                <div className='col'>
                    <p className='title-class'>
                        Support
                    </p>
                    <span className='bar'></span>
                        <a className='item-footer' href='/'>Contact Us</a>
                        <a className='item-footer' href='/'>Live Chat</a>
                        <a className='item-footer' href='/'>Help</a>
                        <a className='item-footer' href='/'>FAQ</a>
                </div>
                <div className='col'>
                    <p className='title-class'>
                        Developers
                    </p>
                    <span className='bar'></span>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pricing</a>
                        <a href='/'>API</a>
                </div>
                <div className='col'>
                    <p className='title-class'>
                        Company
                    </p>
                    <span className='bar'></span>
                        <a href='/'>About</a>
                        <a href='/'>Crypto Advisors</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>
                <div className='col-follow'>
                    <span className=''></span>
                    <p className='title-follow'>Follow Us</p>
                    <div className='follow-us'>
                        <a href='/'><FaFacebook className='icon'/>Meta</a>
                        <a href='/'><FaTwitter className='icon'/>Twitter</a>
                        <a href='/'><FaLinkedin className='icon'/>LinkedIn</a>
                        <a href='/'><FaGithub className='icon'/>GitHub</a>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default Footer