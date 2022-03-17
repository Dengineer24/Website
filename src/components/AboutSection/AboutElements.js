import styled from "styled-components";

export const AboutContainer = styled.div`
    justify-content: center;
    background-color: #13171c;
    position: relative;
    min-height: 100vh;
    align-items: center;
    border: none;
`

export const AboutWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    @media screen and (max-width: 1016px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 673px){
        grid-template-columns: 1fr;
    }
`

export const AboutSkills = styled.div`
    display: flex;
    color: #000;
    justify-content: center;
    text-decoration: none;
    border: none;
    background-color: #fff;
    border-radius: 20px;
    border: 1px solid rgb(70.90,155);
    overflow: hidden;
    max-width: 500px;
    justify-items: center;
    margin: 0 auto;
    padding: 20px 20px;
    grid-row-gap: 10px;
    transition: 0.3s all ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition: 0.3s all ease-in-out;
    }
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
`