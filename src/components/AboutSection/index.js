import React from 'react'
import { AboutContainer, AboutWrapper, AboutSkills, SkillList, Cskills, Experince, AboutExperince } from './AboutElements'


function About() {
  return (
    <>
        <AboutContainer id="about">
            <AboutWrapper>
                <AboutSkills>
                    <SkillList><u><b>Skills</b></u>
                        <Cskills>Python</Cskills>
                        <Cskills>JavaScript</Cskills>
                        <Cskills>Java</Cskills>
                        <Cskills>C/C++</Cskills>
                        <Cskills>HTML/CSS</Cskills>
                    </SkillList>
                </AboutSkills>
                <Experince>
                    <AboutExperince>Hello</AboutExperince>
                </Experince>
            </AboutWrapper>
        </AboutContainer>
    </>
  )
}

export default About