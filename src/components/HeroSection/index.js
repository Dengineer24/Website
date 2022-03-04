import React from 'react';
import video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, LinkWrapper, GitBtn, HeroGitLink } from './HeroElements';
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
        'Web Development ',
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
  

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Dhruv Engineer</HeroH1>
            <div className='text-wrapper'>
            <span className='text-switch' ref={el} />
            </div>
            <HeroBtnWrapper>
              <Button>Find Out More</Button>
            </HeroBtnWrapper>
             <LinkWrapper>
              <HeroGitLink href="https://github.com/dengineer24" target="_blank"><img class="Github_logo" target="_blank" src="../Github.png"></img></HeroGitLink>
              {/* <HeroLinkedInLink><LinkedInBtn></LinkedInBtn></HeroLinkedInLink>
              <HeroResumeLink><ResumeBtn></ResumeBtn></HeroResumeLink> */}
            </LinkWrapper>
        </HeroContent>
    </HeroContainer>
    

  )
};

export default HeroSection;
