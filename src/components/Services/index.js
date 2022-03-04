import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import icon1 from "../../images/logo.png"
import icon2 from "../../images/logo.png"
import icon3 from "../../images/logo.png"

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon scr={icon1}></ServicesIcon>
                <ServicesH2>Reduce Expensives</ServicesH2>
                <ServicesP>We help reduce revenue</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon scr={icon2}></ServicesIcon>
                <ServicesH2>Virtual office</ServicesH2>
                <ServicesP>Bests fortnite player</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon scr={icon3}></ServicesIcon>
                <ServicesH2>Dog Water</ServicesH2>
                <ServicesP>1000pr kbm PC 240 dog</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services