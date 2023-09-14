import React from 'react'

import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi';
import { GiKnifeFork } from 'react-icons/gi'

import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer container'>
            <div className='footer-sections'>
                <div className='footer-section'>
                    <p className='title logo'><GiKnifeFork style={{color: 'var(--primary-color)'}} /> <span style={{color: 'var(--primary-color)'}}>GOOD</span>FOOD</p>
                    <p>Become a chef, with the best chefs in the world</p>
                    <p className='icons'><FaInstagram/> <FaFacebookF/> <FaXTwitter/>   </p>
                    <p className='rights'>&copy; 2023 | All Rights Reserved</p>
                </div>
                <div className='footer-section'>
                    <p className='title'>Contact Us</p>
                    <p>contact@goodfood.com</p>
                    <p>+342-5324-9454</p>
                    <p>293 Street NYC</p>
                </div>
                <div className='footer-section'>
                    <p className='title'>Author</p>
                    <p><a href="jlmp2002@gmail.com"><BiLogoGmail />jlmp2002@gmail.com</a></p>
                    <p><a href="https://github.com/jorgeprj"><FaGithub />Github</a></p>
                    <p><a href="https://www.linkedin.com/in/jorgeprj/"><FaLinkedin />Linkedin</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer