import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, LinkWrapper, GitBtn, HeroGitLink, HeroLinkedInLink, LinkConatiner, HeroResumeLink } from './HeroElements';
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
        'Backend Develoment ',
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
  const resumeLink = "https://drive.google.com/file/d/1dyJSynEy7GADGM3pL1tLepjEHe5-ozS0/view?usp=sharing"
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
                <HeroGitLink href={githubLink} target={target} rel="noopener noreferrer"><img class="Github_logo" target="_blank" src="../Github.png"></img></HeroGitLink>
                <HeroLinkedInLink href={linkedInLink} target={target} rel="noopener noreferrer"><img class="LinkedIn_logo" target="_blank" src="../LI-In-Bug.png"></img></HeroLinkedInLink>
                <HeroResumeLink href={resumeLink} target={target} rel="noopener noreferrer"><img class="Resume_logo" target="_blank" src="../unnamed.png"></img></HeroResumeLink>
              </LinkWrapper>
            </LinkConatiner>
        </HeroContent>
    </HeroContainer>
    

  )
};

export default HeroSection;
