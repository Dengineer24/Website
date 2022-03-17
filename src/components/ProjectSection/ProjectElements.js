import styled from "styled-components";

export const ProjectContainer = styled.div`
    background-color: #232a34;
    min-height: 100vh;
`

export const ProjectWrapper = styled.div`
    justify-items: center;
    justify-content: cetner;
    justify-self: center;
    text-align: center;
    padding-top: 50px;
`

export const ProjectTitle = styled.h1`
    color: #fff;
    padding: 10px 16px;
    text-align: center;
    justify-self: center;
`

export const CardWrapper = styled.div`
    background-color: #232a34;
    display: grid;
    justify-items: center;
    justify-content: center;
    padding-bottom: 5%;
    padding-top: 3%;
    overflow: hidden;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 10px;

    @media screen and (max-width: 1050px) {
        grid-template-columns: 1fr 1fr;
    }

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
            
        }
`

export const CardContainer = styled.div`
    background-color: #232a34;
`
export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: white;
    max-width: 350px;
    justify-content: center;
    justify-items: center;
    border-radius: 10px;
    height: 455px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgb(90, 70, 155);
        transform: scale(1.05);
    }
`

export const ProjectPic = styled.img`
    max-width: 350px;
    max-height: 250px;
    justify-content: center;
    padding: 2px all;
`

export const ProjectInfoContainer = styled.div`
    padding: 5px 20px;
`
export const ProjectHeader = styled.h4`
    padding: 10px;
`

export const ProjectPara = styled.p`
    padding: 10px;
`

export const Skills = styled.p`
    border: 2px solid rgb(90, 70, 155);
    border-radius: 2px;
    display: inline;
    padding: 1px;
    margin: 1px;
    text-align: center;
`

export const GtBtn = styled.a`
text-decoration: none;
padding: 2px 16px;
text-align: center;
display: inline;
margin: 0 auto;

`

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
text-align: center;
padding-bottom: 20px;
padding-top: 20px;
`
