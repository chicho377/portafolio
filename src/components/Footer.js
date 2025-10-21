import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  margin-top: auto;
  padding: 60px 6vw 40px;
  background: rgba(6, 6, 10, 0.95);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    padding: 48px 24px 32px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 32px;

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
  font-family: 'Orbitron', sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.08em;
  color: #00ffcc;
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
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.5);
`;

const LinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
`;

const FooterLink = styled.a`
  color: rgba(233, 233, 255, 0.78);
  font-size: 0.95rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00ffcc;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialIcon = styled.a`
  color: rgba(233, 233, 255, 0.75);
  font-size: 1.4rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #00ffcc;
    transform: translateY(-3px);
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  color: rgba(233, 233, 255, 0.5);
  font-size: 0.85rem;
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
