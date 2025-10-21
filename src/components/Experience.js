import React from 'react';
import styled from 'styled-components';
import { FiClock, FiExternalLink } from 'react-icons/fi';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 680px;
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.5);
`;

const Title = styled.h2`
  font-size: clamp(2.1rem, 3.2vw, 2.7rem);
  margin: 0;
  color: #ffffff;
`;

const Timeline = styled.div`
  display: grid;
  gap: 28px;
  position: relative;
  margin-left: 12px;

  &:before {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 0;
    width: 2px;
    background: linear-gradient(180deg, rgba(0, 255, 204, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%);
  }
`;

const Item = styled.article`
  position: relative;
  margin-left: 32px;
  padding: 24px 28px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(6px);
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: rgba(0, 255, 204, 0.35);
    transform: translateY(-4px);
  }

  &:before {
    content: '';
    position: absolute;
    top: 28px;
    left: -35px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #00ffcc;
    box-shadow: 0 0 0 6px rgba(0, 255, 204, 0.18);
  }
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 12px 20px;
  margin-bottom: 12px;
`;

const Role = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #ffffff;
`;

const Company = styled.span`
  font-size: 1rem;
  color: rgba(233, 233, 255, 0.68);
`;

const Period = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(233, 233, 255, 0.55);
`;

const Description = styled.p`
  margin: 0 0 16px;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(233, 233, 255, 0.74);
`;

const Highlights = styled.ul`
  margin: 0;
  padding-left: 20px;
  color: rgba(233, 233, 255, 0.72);
  display: grid;
  gap: 8px;
`;

const Highlight = styled.li`
  line-height: 1.6;
`;

const CTA = styled.a`
  margin-top: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #00ffcc;
`;

const experiences = [
  {
    role: 'Freelance Frontend Developer',
    company: 'Clientes Latam',
    period: '2022 - Actualidad',
    description:
      'Trabajo con emprendimientos y negocios locales para diseñar y desarrollar sitios web modernos que transmitan confianza.',
    highlights: [
      'Implementación de landing pages con optimización de velocidad y SEO técnico.',
      'Automatización de contenidos con CMS headless y despliegues continuos.',
    ],
  },
  {
    role: 'Mentor voluntario',
    company: 'Comunidades de programación',
    period: '2021 - 2023',
    description:
      'Acompaño a estudiantes en la creación de proyectos, revisión de código y adopción de buenas prácticas para su primer empleo.',
    highlights: [
      'Sesiones semanales de pair programming y resolución de dudas en vivo.',
      'Diseño de retos prácticos y guías para acelerar el aprendizaje.',
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <TitleGroup>
        <Eyebrow>Experiencia</Eyebrow>
        <Title>Un recorrido impulsado por el aprendizaje y la colaboración</Title>
      </TitleGroup>
      <Timeline>
        {experiences.map((item) => (
          <Item key={`${item.role}-${item.period}`}>
            <Header>
              <Role>{item.role}</Role>
              <Company>{item.company}</Company>
              <Period>
                <FiClock />
                {item.period}
              </Period>
            </Header>
            <Description>{item.description}</Description>
            <Highlights>
              {item.highlights.map((highlight) => (
                <Highlight key={highlight}>{highlight}</Highlight>
              ))}
            </Highlights>
            <CTA href="mailto:morafabricio86@gmail.com?subject=Hablemos%20sobre%20tu%20experiencia">
              Solicita referencias
              <FiExternalLink />
            </CTA>
          </Item>
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience;
