import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { GiKnifeFork } from 'react-icons/gi'

import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer container'>
            <div className='footer-sections'>
                <div className='footer-section'>
                    <p className='title'><GiKnifeFork /> GoodFood.com</p>
                    <p>Welcome to GoodFood - your one-stop culinary hub! Dive into a world of delectable recipes crafted by our expert chefs, uncover kitchen tips, explore captivating food articles, and more. Whether you're a seasoned cook or a novice, GoodFood is your free gateway to culinary inspiration.</p>
                    <p style={{ color: '#fff' }}>&copy; 2023 | All Rights Reserved</p>
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
            <p className='footer-logo'><GiKnifeFork size={64}/></p>
        </div>
    )
}

export default Footer