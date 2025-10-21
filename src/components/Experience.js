import React from 'react';
import styled from 'styled-components';
import { FiClock, FiExternalLink } from 'react-icons/fi';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 36px;

  &:before {
    content: '';
    position: absolute;
    inset: -60px -18vw -40px;
    background: radial-gradient(circle at 20% 0%, rgba(56, 249, 215, 0.1), transparent 60%),
      radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.12), transparent 65%);
    opacity: 0.7;
    z-index: -1;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 680px;
`;

const Eyebrow = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.82rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.56);

  &:before {
    content: '';
    width: 30px;
    height: 1px;
    background: linear-gradient(90deg, rgba(56, 249, 215, 0.7), rgba(56, 249, 215, 0));
  }
`;

const Title = styled.h2`
  font-size: clamp(2.3rem, 3.4vw, 3rem);
  margin: 0;
  color: #ffffff;
  text-shadow: 0 20px 36px rgba(0, 0, 0, 0.35);
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
    background: linear-gradient(180deg, rgba(56, 249, 215, 0.35) 0%, rgba(139, 92, 246, 0.3) 100%);
  }
`;

const Item = styled.article`
  position: relative;
  margin-left: 32px;
  padding: 26px 30px;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(8, 8, 14, 0.92), rgba(14, 14, 22, 0.94));
  border: 1px solid rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(8px);
  overflow: hidden;
  transition: border-color 0.35s ease, transform 0.35s ease;

  &:hover {
    border-color: rgba(56, 249, 215, 0.45);
    transform: translateY(-6px);
  }

  &:before {
    content: '';
    position: absolute;
    top: 28px;
    left: -35px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #38f9d7;
    box-shadow: 0 0 0 6px rgba(56, 249, 215, 0.2);
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: linear-gradient(135deg, rgba(56, 249, 215, 0.08), rgba(139, 92, 246, 0.1));
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover:after {
    opacity: 1;
  }

  > * {
    position: relative;
    z-index: 1;
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
  color: #38f9d7;
  transition: color 0.35s ease;

  &:hover {
    color: #ff7ad9;
  }
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
