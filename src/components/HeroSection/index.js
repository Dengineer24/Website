import React from 'react';
import video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements';


const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Dhruv Engineer</HeroH1>
            <HeroP>#1 Ranked in the US</HeroP>
            <HeroBtnWrapper>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>

  )
};

export default HeroSection;
