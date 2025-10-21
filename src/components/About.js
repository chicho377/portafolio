import React from 'react';
import styled from 'styled-components';
import { FiAward, FiFeather, FiGlobe, FiUsers } from 'react-icons/fi';

const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.5);
`;

const Title = styled.h2`
  font-size: clamp(2.2rem, 3.4vw, 2.8rem);
  margin: 0;
  color: #ffffff;
`;

const Highlight = styled.span`
  color: #00ffcc;
`;

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(233, 233, 255, 0.76);
`;

const BulletGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const Bullet = styled.div`
  padding: 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const BulletIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #00ffcc;
  background: rgba(0, 255, 204, 0.1);
  font-size: 1.2rem;
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
  border-radius: 36px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(135deg, rgba(0, 255, 204, 0.16) 0%, rgba(139, 92, 246, 0.22) 100%);
  box-shadow: 0 24px 70px rgba(6, 6, 10, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PortraitGlow = styled.div`
  position: absolute;
  inset: 12px;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(10, 10, 14, 0.92) 0%, rgba(16, 16, 22, 0.95) 100%);
  border: 1px solid rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 28px;
  text-align: center;
  gap: 16px;
`;

const PortraitEmoji = styled.span`
  font-size: clamp(3rem, 5vw, 3.6rem);
`;

const PortraitQuote = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(233, 233, 255, 0.72);
`;

const Signature = styled.span`
  font-family: 'Caveat', cursive;
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.8);
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
