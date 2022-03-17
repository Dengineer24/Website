import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import './app.css'



const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo to="hero" smooth={true} duration={500} spy={true} exact="true" offset={-80} ><img src='../favicon.png' className='logo' alt='logo'></img></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                    <NavItem>
                            <NavLinks to="hero" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
