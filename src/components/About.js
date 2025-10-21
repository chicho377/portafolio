import React from 'react';
import styled from 'styled-components';
import { FiAward, FiFeather, FiGlobe, FiUsers } from 'react-icons/fi';

const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 64px;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    inset: -80px 10% auto;
    height: 1px;
    background: linear-gradient(90deg, rgba(56, 249, 215, 0), rgba(56, 249, 215, 0.5), rgba(139, 92, 246, 0));
    opacity: 0.65;
  }

  &:after {
    content: '';
    position: absolute;
    inset: -120px -18vw;
    background: radial-gradient(circle at 20% 40%, rgba(56, 249, 215, 0.16), transparent 65%),
      radial-gradient(circle at 65% 60%, rgba(139, 92, 246, 0.16), transparent 65%);
    filter: blur(0px);
    opacity: 0.75;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 44px;
    &:before {
      inset: -60px 15% auto;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Eyebrow = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.82rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.55);

  &:before {
    content: '';
    width: 32px;
    height: 1px;
    background: linear-gradient(90deg, rgba(56, 249, 215, 0.7), rgba(56, 249, 215, 0));
  }
`;

const Title = styled.h2`
  font-size: clamp(2.4rem, 3.6vw, 3rem);
  margin: 0;
  color: #ffffff;
  text-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
`;

const Highlight = styled.span`
  background: linear-gradient(90deg, #38f9d7 0%, #8b5cf6 60%, #ff7ad9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 1.08rem;
  line-height: 1.85;
  color: rgba(233, 233, 255, 0.74);
`;

const BulletGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 22px;
`;

const Bullet = styled.div`
  position: relative;
  padding: 22px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(56, 249, 215, 0.08), rgba(139, 92, 246, 0.08));
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover:after {
    opacity: 1;
  }
`;

const BulletIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #38f9d7;
  background: rgba(56, 249, 215, 0.12);
  font-size: 1.2rem;
  box-shadow: 0 10px 24px rgba(56, 249, 215, 0.18);
`;

const BulletTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #fff;
`;

const BulletCopy = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(233, 233, 255, 0.7);
`;

const PortraitWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Portrait = styled.div`
  position: relative;
  width: min(420px, 100%);
  aspect-ratio: 4 / 5;
  border-radius: 38px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: radial-gradient(circle at top left, rgba(56, 249, 215, 0.2), transparent 70%),
    radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.22), transparent 65%),
    rgba(10, 10, 16, 0.92);
  box-shadow: 0 28px 80px rgba(6, 6, 12, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;
    inset: 12px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    opacity: 0.5;
  }
`;

const PortraitGlow = styled.div`
  position: absolute;
  inset: 12px;
  border-radius: 28px;
  background: linear-gradient(150deg, rgba(10, 10, 16, 0.94) 0%, rgba(16, 16, 24, 0.96) 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px;
  text-align: center;
  gap: 16px;
`;

const PortraitEmoji = styled.span`
  font-size: clamp(3.2rem, 5vw, 3.8rem);
`;

const PortraitQuote = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(233, 233, 255, 0.72);
`;

const Signature = styled.span`
  font-family: 'Caveat', cursive;
  font-size: 1.9rem;
  background: linear-gradient(90deg, #38f9d7 0%, #8b5cf6 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const About = () => {
  return (
    <Section id="about">
      <Content>
        <TitleGroup>
          <Eyebrow>Sobre mí</Eyebrow>
          <Title>
            Ingeniero en formación y <Highlight>craftsman digital</Highlight>
          </Title>
        </TitleGroup>
        <Description>
          Soy Fabricio Mora, estudiante de Ingeniería en Sistemas y desarrollador enfocado en crear soluciones web que conecten
          con las personas. Amo trabajar en productos que combinan estética y performance, integrar buenas prácticas y
          mantenerme en constante aprendizaje.
        </Description>
        <Description>
          Me apasiona colaborar con startups, agencias y equipos que quieran ir más allá de una web estándar. Desde la idea
          inicial hasta el lanzamiento, acompaño a mis clientes con una mentalidad estratégica y mucha atención al detalle.
        </Description>
        <BulletGrid>
          <Bullet>
            <BulletIcon>
              <FiAward />
            </BulletIcon>
            <BulletTitle>Experiencia comprobada</BulletTitle>
            <BulletCopy>Más de 10 proyectos entregados con enfoque en rendimiento y calidad visual.</BulletCopy>
          </Bullet>
          <Bullet>
            <BulletIcon>
              <FiFeather />
            </BulletIcon>
            <BulletTitle>Diseño centrado en UX</BulletTitle>
            <BulletCopy>Experiencias pulidas con microinteracciones, accesibilidad y storytelling.</BulletCopy>
          </Bullet>
          <Bullet>
            <BulletIcon>
              <FiGlobe />
            </BulletIcon>
            <BulletTitle>Stack moderno</BulletTitle>
            <BulletCopy>React, Node.js, Express, MongoDB, PHP, Tailwind y herramientas en la nube.</BulletCopy>
          </Bullet>
          <Bullet>
            <BulletIcon>
              <FiUsers />
            </BulletIcon>
            <BulletTitle>Trabajo en equipo</BulletTitle>
            <BulletCopy>Comunicación constante, entregables iterativos y documentación clara.</BulletCopy>
          </Bullet>
        </BulletGrid>
      </Content>
      <PortraitWrapper>
        <Portrait>
          <PortraitGlow>
            <PortraitEmoji role="img" aria-label="Desarrollador">🚀</PortraitEmoji>
            <PortraitQuote>
              "Creo productos digitales que reflejan la esencia de cada marca y que generan confianza desde el primer click."
            </PortraitQuote>
            <Signature>Fabricio Mora</Signature>
          </PortraitGlow>
        </Portrait>
      </PortraitWrapper>
    </Section>
  );
};

export default About;
