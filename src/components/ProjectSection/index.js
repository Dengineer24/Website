import React from 'react'
import './app.css'

function Projects() {
  return (
      <div class="full_wrapper" id="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
        <div class="card_conatiner">
            <div class="card">
                <img class="mg2" src="../undraw_augmented_reality_re_f0qd.svg" alt="Avatar"></img>
                <div class="container">
                    <h4 class="header"><b>IntARactive Models</b></h4>
                    <p class="para">A full-stack application that allows students to view models of mechanical objects in Augmented Reality, and chat at the same time</p>
                    <p id="skills">React JS</p>
                    <p id="skills">Node.js</p>
                    <p id="skills">Express.js</p>
                </div>
            </div>
        </div>
        <div class="card_conatiner">
            <div class="card">
                <img class="mg2" src="../undraw_developer_activity_re_39tg.svg" alt="Avatar"></img>
                <div class="container">
                    <h4 class="header"><b>Sneaker Identifier</b></h4>
                    <p class="para">A full-stack application that can detect shoes through a machine learngin algorythm</p>
                    <p id="skills">React JS</p>
                    <p id="skills">Node.js</p>
                    <p id="skills">Express.js</p>
                    <p id="skills">Python</p>
                </div>
            </div>
        </div>
        <div class="card_conatiner">
            <div class="card">
                <img class="mg2" src="../undraw_tabs_re_a2bd.svg" alt="Avatar"></img>
                <div class="container">
                    <h4 class="header"><b>Portoflio Website</b></h4>
                    <p class="para">A React JS website to view all projects and skills</p>
                    <p id="skills">React JS</p>
                    <p id="skills">Node.js</p>
                    <p id="skills">Express.js</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects