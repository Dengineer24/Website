import styled from "styled-components";
import {Link as LinkS } from "react-scroll"

export const FooterConatiner = styled.div`
    display: flex;
    justify-content: center;
    background-color: #000;
`


export const Logo = styled(LinkS)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
  text-decoration: none; 
`

export const Words = styled.h2`

    align-items: center;
    justify-self: center;
    color: #fff;
    padding-top: 20px;
    padding-left: 20px;
`