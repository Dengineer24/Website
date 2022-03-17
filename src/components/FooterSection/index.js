import React from 'react';
import { FooterConatiner, Logo, Words } from './FooterElements';
import './app.css';

function Footer() {
  return (
    <>
    <FooterConatiner>
        <Logo to="hero" smooth={true} duration={500} spy={true} exact="true" offset={-80}><img src='../favicon.png' className='logo' alt='logo'></img></Logo>
        <Words>Made by Dhruv Engineer</Words>
    </FooterConatiner>
    
    </>
  )
}

export default Footer