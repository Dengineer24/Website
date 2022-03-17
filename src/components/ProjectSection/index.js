import React, { useState } from 'react'
import './app.css'
import { ProjectContainer, ProjectWrapper, ProjectTitle, CardWrapper, CardContainer, ProjectPic, ProjectInfoContainer, ProjectHeader, ProjectPara, Skills, ButtonWrapper, GtBtn} from './ProjectElements'


function Projects() {
    const [display, setDisplay] = useState("notdisplayed");
    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed")
    };

    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed")
    };


  return (
    <>
        <ProjectContainer id="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            <ProjectWrapper>
                <ProjectTitle >Projects</ProjectTitle>
            </ProjectWrapper>
            <CardWrapper>
                <CardContainer>
                    <div className="projectCards">
                            <ProjectPic src="../undraw_augmented_reality_re_f0qd.svg"></ProjectPic>
                            <ProjectInfoContainer>
                                <ProjectHeader>intARactive Models</ProjectHeader>
                                <ProjectPara>A full stack application that allows 
                                    students to view models of mechanical objects in 
                                    Augmented Reality, and chat at the same time</ProjectPara>
                                <Skills>React JS</Skills>
                                <Skills>Node.js</Skills>
                                <Skills>Express.js</Skills>
                                <Skills>HTML/CSS</Skills>
                            </ProjectInfoContainer>
                            <a class="link" href="https://github.com/Dengineer24/intARactive-models" target="_blank" rel="noopener noreferrer"><button class="viewMore1">GitHub</button></a>
                    </div>
                </CardContainer>
                <CardContainer>
                    <div className="projectCards1">
                        <ProjectPic src="../undraw_developer_activity_re_39tg.svg"></ProjectPic>
                        <ProjectInfoContainer>
                            <ProjectHeader>Sneaker Identifier</ProjectHeader>
                            <ProjectPara>A python application that can detect sneakers through a machine learning algorithm</ProjectPara>
                            <Skills>Python</Skills>
                            <Skills>React JS</Skills>
                            <Skills>HTML/CSS</Skills>
                        </ProjectInfoContainer>
                        <a className="link" href="https://github.com/Dengineer24/Shoe-Identifier" target="_blank" rel="noopener noreferrer"><button className="viewMore1">GitHub</button></a>
                    </div>
                </CardContainer>
                <CardContainer>
                    <div className="projectCards2">
                        <ProjectPic src="../undraw_tabs_re_a2bd.svg"></ProjectPic>
                        <ProjectInfoContainer>
                            <ProjectHeader>Portfolio Website</ProjectHeader>
                            <ProjectPara>A React JS website to view all projects and skills</ProjectPara>
                            <Skills>React JS</Skills>
                            <Skills>HTML/CSS</Skills>
                            <Skills>JavaScript</Skills>
                        </ProjectInfoContainer>
                        <a className="link" href="https://github.com/Dengineer24/Website" target="_blank" rel="noopener noreferrer"><button className="viewMore1">GitHub</button></a>
                    </div>
                </CardContainer>
            </CardWrapper>
            <ButtonWrapper>
                <GtBtn href="https://github.com/Dengineer24?tab=repositories" target="_blank" rel="noopener noreferrer"><button className="viewMore">View More</button></GtBtn>
            </ButtonWrapper>
        </ProjectContainer>
        
    </>
  )
};

export default Projects