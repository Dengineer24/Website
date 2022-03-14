import React from 'react'
import { Button } from '../ButtonElement'
import { ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img } from './infoElements'



const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt, primary, dark, dark2, buttonLabel}) => {
  
    return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={darkText}>{headline}</Heading>
                            <Subtitle darktext={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                 <Button to="projects" 
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 exact="true"
                                 offset={-80}
                                 primary={primary ? 1 : 0}
                                 dark={dark ? 0 : 1}
                                 dark2={dark2 ? 0 : 1}
                                 >{buttonLabel}</Button>   
                            </BtnWrap> 
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  );
};

export default InfoSection;
