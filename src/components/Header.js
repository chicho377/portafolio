import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #0a0a0a;
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  color: #00ffcc;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
`;

const NavLink = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #00ffcc;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;

  &:hover {
    color: #00ffcc;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Mi Portafolio</Logo>
      <Nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#portafolio">Contacts</NavLink>
      </Nav>
      <SocialIcons>
        <IconLink href="https://github.com/chicho377" target="_blank"><FaGithub /></IconLink>
        <IconLink href="https://www.linkedin.com/in/fabricio-mora-904927255/" target="_blank"><FaLinkedin /></IconLink>
        <IconLink href="https://x.com/FabricioMora377" target="_blank"><FaTwitter /></IconLink>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default Header;
