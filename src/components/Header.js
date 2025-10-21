import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(6, 6, 10, 0.85);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 6vw;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

const Brand = styled.a`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #00ffcc;
  text-transform: uppercase;
  transition: color 0.3s ease;

  &:hover {
    color: #8b5cf6;
  }
`;

const BrandAccent = styled.span`
  background: linear-gradient(90deg, #38f9d7 0%, #8b5cf6 50%, #ff7ad9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.9;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 992px) {
    gap: 20px;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(245, 245, 255, 0.82);
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #00ffcc 0%, #8b5cf6 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #fff;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 992px) {
    gap: 12px;
  }
`;

const SocialIcon = styled.a`
  color: rgba(245, 245, 255, 0.82);
  font-size: 1.2rem;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #00ffcc;
    transform: translateY(-3px);
  }
`;

const ResumeButton = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.16);
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(135deg, rgba(0, 255, 204, 0.18) 0%, rgba(139, 92, 246, 0.24) 100%);
  box-shadow: 0 10px 30px rgba(0, 255, 204, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 36px rgba(0, 255, 204, 0.22);
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 860px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  padding: 0 24px 24px;
  gap: 18px;
  background: rgba(10, 10, 14, 0.94);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 860px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
`;

const MobileLink = styled.a`
  color: rgba(245, 245, 255, 0.9);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const MobileResume = styled.a`
  margin-top: 8px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(0, 255, 204, 0.28) 0%, rgba(139, 92, 246, 0.32) 100%);
  color: #0a0a0e;
  font-weight: 600;
  letter-spacing: 0.08em;
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <HeaderWrapper>
      <NavBar>
        <Brand href="#top">Fabricio Mora</Brand>
        <Nav>
          <NavLink href="#about">Sobre mí</NavLink>
          <NavLink href="#services">Servicios</NavLink>
          <NavLink href="#projects">Proyectos</NavLink>
          <NavLink href="#experience">Experiencia</NavLink>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#contact">Contacto</NavLink>
        </Nav>
        <SocialLinks>
          <SocialIcon href="https://github.com/chicho377" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/fabricio-mora-904927255/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="https://x.com/FabricioMora377" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter />
          </SocialIcon>
          <ResumeButton href="mailto:morafabricio86@gmail.com?subject=Quiero%20colaborar%20contigo" rel="noreferrer">
            Escríbeme
          </ResumeButton>
          <MobileToggle onClick={toggleMenu} aria-label="Abrir menú">
            {menuOpen ? <HiX /> : <HiMenu />}
          </MobileToggle>
        </SocialLinks>
      </NavBar>
      <MobileMenu open={menuOpen}>
        <MobileLink href="#about" onClick={closeMenu}>
          Sobre mí
        </MobileLink>
        <MobileLink href="#services" onClick={closeMenu}>
          Servicios
        </MobileLink>
        <MobileLink href="#projects" onClick={closeMenu}>
          Proyectos
        </MobileLink>
        <MobileLink href="#experience" onClick={closeMenu}>
          Experiencia
        </MobileLink>
        <MobileLink href="#skills" onClick={closeMenu}>
          Habilidades
        </MobileLink>
        <MobileLink href="#contact" onClick={closeMenu}>
          Contacto
        </MobileLink>
        <MobileResume href="mailto:morafabricio86@gmail.com?subject=Quiero%20colaborar%20contigo" rel="noreferrer">
          Escríbeme
        </MobileResume>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;
