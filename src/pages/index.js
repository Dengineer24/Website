import React, {useState} from 'react';
import Footer from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infoSection/Data';
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
        <InfoSection {...homeObjOne}/>
        <Projects />
        <Footer />
      </>
  );
};

export default Home;
