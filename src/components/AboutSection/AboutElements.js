import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #000;
`

export const AboutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 700px){
        grid-template-columns: 1fr;
    }
`

export const AboutSkills = styled.div`
    display: flex;
    color: #fff;
    justify-content: center;
    text-decoration: none;
    border: none;
`

export const SkillList = styled.ul`
    text-decoration: none;
    list-style-type: none;
    padding-bottom: 50px;
    width: 300px;
`

export const Cskills = styled.li`
    text-decoration: none;
    list-style-type: none;
`

export const Experince = styled.div`
    display: flex;
    color: #fff;
    justify-content: center;
    text-decoration: none;
    border: none;
`

export const AboutExperince = styled.div`
    background-color: red;
`