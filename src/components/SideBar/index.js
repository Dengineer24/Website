import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
              <SidebarLink to="hero" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                      Home
                  </SidebarLink>
                  <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                      About
                  </SidebarLink>
                  <SidebarLink to="projects" onClick={toggle} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                      Projects
                  </SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
  )
}

export default Sidebar;
