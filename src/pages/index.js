import React, {useState} from 'react';
import About from '../components/AboutSection';
import Footer from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Projects from '../components/ProjectSection';
import Sidebar from '../components/SideBar';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/> 
        <HeroSection />
        <About />
        <Projects />
        <Footer />
      </>
  );
};

export default Home;
