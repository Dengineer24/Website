import styled from "styled-components";

export const AboutContainer = styled.div`
    justify-content: center;
    background-color: #000;
`

export const AboutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 600px){
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
    padding-top: 75px;
    padding-bottom: 75px;
    width: 300px;
    font-size: 25px;
`

export const Cskills = styled.li`
    text-decoration: none;
    list-style-type: none;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
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