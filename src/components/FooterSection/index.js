import React from 'react';
import { FooterConatiner, FooterWrapper, Logo, Words } from './FooterElements';
import './app.css';

function Footer() {
  return (
    <>
    <FooterConatiner>
        <Logo to="hero" smooth={true} duration={500} spy={true} exact="true" offset={-80}><img src='../favicon.png' class='logo'></img></Logo>
        <Words>Made by Dhruv Engineer</Words>
    </FooterConatiner>
    
    </>
  )
}

export default Footer