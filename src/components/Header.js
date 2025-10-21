import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(8, 8, 14, 0.76);
  backdrop-filter: blur(22px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);

  &:after {
    content: '';
    position: absolute;
    inset: auto 6vw -1px 6vw;
    height: 1px;
    background: linear-gradient(90deg, rgba(56, 249, 215, 0), rgba(56, 249, 215, 0.65), rgba(139, 92, 246, 0));

    @media (max-width: 768px) {
      inset: auto 24px -1px 24px;
    }
  }
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
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: 'Space Grotesk', 'Orbitron', sans-serif;
  font-size: 1.55rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #f8f9ff;
  text-transform: uppercase;
  position: relative;
  padding-left: 20px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at center, #38f9d7 0%, rgba(56, 249, 215, 0) 70%);
    transform: translateY(-50%);
    box-shadow: 0 0 18px rgba(56, 249, 215, 0.6);
  }

  &:hover span {
    opacity: 1;
    transform: translateY(-1px);
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
  font-size: 0.92rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(245, 245, 255, 0.7);
  position: relative;
  padding: 6px 0;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, rgba(56, 249, 215, 0) 0%, rgba(56, 249, 215, 0.8) 50%, rgba(139, 92, 246, 0));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  &:hover {
    color: #f8f9ff;
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
  color: rgba(245, 245, 255, 0.75);
  font-size: 1.18rem;
  transition: transform 0.35s ease, color 0.35s ease, text-shadow 0.35s ease;

  &:hover {
    color: #38f9d7;
    transform: translateY(-3px) scale(1.05);
    text-shadow: 0 8px 18px rgba(56, 249, 215, 0.45);
  }
`;

const ResumeButton = styled.a`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 0.82rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #050505;
  background: linear-gradient(120deg, rgba(56, 249, 215, 0.9) 0%, rgba(139, 92, 246, 0.95) 60%, rgba(255, 122, 217, 0.9) 100%);
  box-shadow: 0 12px 28px rgba(139, 92, 246, 0.35);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0));
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(139, 92, 246, 0.45);
  }

  &:hover:before {
    opacity: 1;
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
  background: linear-gradient(160deg, rgba(9, 9, 16, 0.92) 0%, rgba(15, 15, 26, 0.94) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.06);

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
  padding: 14px 0;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(56, 249, 215, 0.28) 0%, rgba(139, 92, 246, 0.35) 100%);
  color: #050505;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <HeaderWrapper>
      <NavBar>
        <Brand href="#top">
          Fabricio
          <BrandAccent>Mora</BrandAccent>
        </Brand>
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
