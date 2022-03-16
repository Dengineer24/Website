import React from 'react'
import { AboutContainer, AboutWrapper, AboutSkills, SkillList, Cskills, Experince, AboutExperince } from './AboutElements'
import "./app.css"

function About() {
  return (
    <>
        <AboutContainer id="about">
            <div class="about_me_cont">
                <h1 class="about_me">About Me</h1>
            </div>
            <AboutWrapper>
                <AboutSkills>
                    <SkillList><u><b>Technical Skills</b></u>
                        <Cskills>Languauges/Databases: Python, JavaScript, Java, C/C++, HTML/CSS, PHP, SQL</Cskills>
                        <Cskills>Tools/Frameworks: Node.js, Express.js, React JS, Git/GitHub, Flask, jQuery, Arduino, Raspberry PI</Cskills>
                        <Cskills>Other: Linux, VS code, Eclipse, x86 assymbly Microsoft Office</Cskills>
                    </SkillList>
                </AboutSkills>
                <AboutSkills>
                    <SkillList><u><b>Education</b></u>
                        <Cskills>B.S. in Computer Science, Expected in December 2024</Cskills>
                        <Cskills>Part of HackBU, ACM, and Intern at HSC</Cskills>
                    </SkillList>
                </AboutSkills>
                <AboutSkills>
                    <SkillList><u><b>Experince</b></u>
                        <Cskills>Jr. Web Developer at Binghamton University Student Association</Cskills>
                        <Cskills>Software Developer at Alpine Proxies LLC</Cskills>
                        <Cskills>Information Technology Intern at Cornwall Central School District</Cskills>
                    </SkillList>
                </AboutSkills>
                {/* <Experince>
                    <AboutExperince>Hello</AboutExperince>
                </Experince> */}
            </AboutWrapper>
        </AboutContainer>
    </>
  )
}

export default About