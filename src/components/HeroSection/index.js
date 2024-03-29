import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, LinkWrapper, HeroGitLink, HeroLinkedInLink, LinkConatiner, HeroResumeLink } from './HeroElements';
import Typed from 'typed.js';
import './app.css';
import {Button} from '../ButtonElement';


const HeroSection = () => {
  const el = React.useRef(null);
 // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        'Aspiring Software Engineer ',
        'Backend Development ',
        'Machine Learning ',
        'Front-End Development ',
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      loopCount: Infinity,
      smartbackspace: true,
      shuffle: false,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  const githubLink = "https://github.com/dengineer24";
  const linkedInLink = "https://linkedIn.com/in/dhruv-engineer";
  const resumeLink = "https://drive.google.com/file/d/1WZSvt1LDSBeGvzCnYjSHYdFWZkgh_M9i/view?usp=sharing"
  const target = "_blank"

  return (
    <HeroContainer id="hero" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
        <HeroBg>
            <VideoBg />
        </HeroBg>
        <HeroContent>
            <HeroH1>Dhruv Engineer</HeroH1>
            <div className='text-wrapper'>
            <span className='text-switch' ref={el} />
            </div>
            <HeroBtnWrapper>
              <Button to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>More Info</Button>
            </HeroBtnWrapper>
            <LinkConatiner>
              <LinkWrapper>
                <HeroGitLink href={githubLink} target={target} rel="noopener noreferrer"><img className="Github_logo" src="../Github.png" alt='git'></img></HeroGitLink>
                <HeroLinkedInLink href={linkedInLink} target={target} rel="noopener noreferrer"><img className="LinkedIn_logo" src="../LI-In-Bug.png" alt='linked'></img></HeroLinkedInLink>
              </LinkWrapper>
              <HeroResumeLink href={resumeLink} target={target} rel="noopener noreferrer"><button className='Resume'>Resume</button></HeroResumeLink>
            </LinkConatiner>
        </HeroContent>
    </HeroContainer>
    

  )
};

export default HeroSection;
