import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  position: relative;
  margin-top: auto;
  padding: 70px 6vw 46px;
  background: linear-gradient(180deg, rgba(8, 8, 14, 0.96) 0%, rgba(4, 4, 10, 0.98) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 36px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    inset: -120px -20vw;
    background: radial-gradient(circle at 20% 0%, rgba(56, 249, 215, 0.12), transparent 65%),
      radial-gradient(circle at 80% -10%, rgba(139, 92, 246, 0.12), transparent 60%);
    opacity: 0.8;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 56px 24px 36px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 32px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BrandName = styled.h3`
  margin: 0;
  font-family: 'Space Grotesk', 'Orbitron', sans-serif;
  font-size: 1.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: linear-gradient(90deg, #38f9d7 0%, #8b5cf6 60%, #ff7ad9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BrandCopy = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(233, 233, 255, 0.7);
`;

const Links = styled.div`
  display: grid;
  gap: 14px;
`;

const LinkTitle = styled.span`
  font-size: 0.82rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.58);
  position: relative;

  &:after {
    content: '';
    display: block;
    margin-top: 6px;
    width: 44px;
    height: 1px;
    background: linear-gradient(90deg, rgba(56, 249, 215, 0.7), rgba(56, 249, 215, 0));
  }
`;

const LinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
`;

const FooterLink = styled.a`
  position: relative;
  color: rgba(233, 233, 255, 0.78);
  font-size: 0.95rem;
  padding-bottom: 2px;
  transition: color 0.35s ease;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, rgba(56, 249, 215, 0), rgba(56, 249, 215, 0.65), rgba(139, 92, 246, 0));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  &:hover {
    color: #f5f5ff;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

const Social = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialIcon = styled.a`
  position: relative;
  color: rgba(233, 233, 255, 0.75);
  font-size: 1.35rem;
  transition: color 0.35s ease, transform 0.35s ease, text-shadow 0.35s ease;

  &:hover {
    color: #38f9d7;
    transform: translateY(-4px) scale(1.05);
    text-shadow: 0 8px 18px rgba(56, 249, 215, 0.35);
  }
`;

const Bottom = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  color: rgba(233, 233, 255, 0.58);
  font-size: 0.86rem;
  z-index: 1;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Grid>
        <Brand>
          <BrandName>Fabricio Mora</BrandName>
          <BrandCopy>
            Construyo experiencias digitales memorables con foco en la gente, los resultados y el detalle.
          </BrandCopy>
        </Brand>
        <Links>
          <LinkTitle>Explorar</LinkTitle>
          <LinkList>
            <FooterLink href="#about">Sobre mí</FooterLink>
            <FooterLink href="#services">Servicios</FooterLink>
            <FooterLink href="#projects">Proyectos</FooterLink>
            <FooterLink href="#experience">Experiencia</FooterLink>
            <FooterLink href="#skills">Habilidades</FooterLink>
            <FooterLink href="#contact">Contacto</FooterLink>
          </LinkList>
          <Social>
            <SocialIcon href="https://github.com/chicho377" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/fabricio-mora-904927255/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://x.com/FabricioMora377" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </SocialIcon>
          </Social>
        </Links>
      </Grid>
      <Bottom>
        <span>© {new Date().getFullYear()} Fabricio Mora. Todos los derechos reservados.</span>
        <span>Disponible para proyectos remotos o híbridos.</span>
      </Bottom>
    </FooterWrapper>
  );
};

export default Footer;
