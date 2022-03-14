import styled from "styled-components";

export const ProjectContainer = styled.div`
    background-color: #232a34;
`

export const ProjectWrapper = styled.div`
    justify-items: center;
    justify-content: cetner;
    justify-self: center;
    text-align: center;
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
    margin: 0 auto;
    padding-bottom: 10%;
    padding-left: 10%;
    padding-top: 3%;
    padding-right: 10%;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 10px;

    @media screen and (max-width: 1050px) {
        grid-template-columns: 1fr 1fr;
    }

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
            margin: 0 auto;
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

`

export const ButtonWrapper = styled.div`
justify-content: center;
text-align: center;

`