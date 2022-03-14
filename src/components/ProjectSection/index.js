import React from 'react'
import './app.css'
import { ProjectContainer, ProjectWrapper, ProjectTitle, CardWrapper, CardContainer, Card, ProjectPic, ProjectInfoContainer, ProjectHeader, ProjectPara, Skills, GtBtn, ButtonWrapper } from './ProjectElements'

function Projects() {
  return (
    <>
        <ProjectContainer id="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            <ProjectWrapper>
                <ProjectTitle>Projects</ProjectTitle>
            </ProjectWrapper>
            <CardWrapper>
                <CardContainer>
                    <Card>
                        <ProjectPic src="../undraw_augmented_reality_re_f0qd.svg"></ProjectPic>
                        <ProjectInfoContainer>
                            <ProjectHeader>"intARactive Models</ProjectHeader>
                            <ProjectPara>A full-stack application that allows students to view models of mechanical objects in Augmented Reality, and chat at the same time</ProjectPara>
                            <Skills>React JS</Skills>
                            <Skills>Node.js</Skills>
                            <Skills>Express.js</Skills>
                            <Skills>HTML/CSS</Skills>
                        </ProjectInfoContainer>
                    </Card>
                </CardContainer>
                <CardContainer>
                    <Card>
                        <ProjectPic src="../undraw_developer_activity_re_39tg.svg"></ProjectPic>
                        <ProjectInfoContainer>
                            <ProjectHeader>Sneaker Identifier</ProjectHeader>
                            <ProjectPara>A full-stack application that can detect shoes through a machine learngin algorythm</ProjectPara>
                            <Skills>Python</Skills>
                            <Skills>React JS</Skills>
                            <Skills>HTML/CSS</Skills>
                        </ProjectInfoContainer>
                    </Card>
                </CardContainer>
                <CardContainer>
                    <Card>
                        <ProjectPic src="../undraw_tabs_re_a2bd.svg"></ProjectPic>
                        <ProjectInfoContainer>
                            <ProjectHeader>Portfolio Website</ProjectHeader>
                            <ProjectPara>A React JS website to view all projects and skills</ProjectPara>
                            <Skills>React JS</Skills>
                            <Skills>HTML/CSS</Skills>
                            <Skills>JavaScript</Skills>
                        </ProjectInfoContainer>
                    </Card>
                </CardContainer>
            </CardWrapper>
            <ButtonWrapper>
            <GtBtn href="https://github.com/Dengineer24?tab=repositories" target="_blank"><button class="viewMore">View More</button></GtBtn>
            </ButtonWrapper>
        </ProjectContainer>
    </>
  )
}

export default Projects