import React from 'react';
import styled from 'styled-components';
import { FiCode, FiFigma, FiTrendingUp } from 'react-icons/fi';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 720px;
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.5);
`;

const Title = styled.h2`
  font-size: clamp(2.1rem, 3.3vw, 2.7rem);
  margin: 0;
  color: #ffffff;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(233, 233, 255, 0.74);
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
`;

const Card = styled.div`
  position: relative;
  padding: 32px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(8, 8, 12, 0.95) 0%, rgba(14, 14, 20, 0.92) 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 255, 204, 0.4);
  }
`;

const Glow = styled.span`
  position: absolute;
  inset: -120px;
  background: radial-gradient(circle, rgba(0, 255, 204, 0.2) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const Icon = styled.span`
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: rgba(0, 255, 204, 0.14);
  color: #00ffcc;
  font-size: 1.5rem;
  margin-bottom: 18px;
`;

const CardTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 1.3rem;
  color: #fff;
`;

const CardCopy = styled.p`
  margin: 0 0 18px;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(233, 233, 255, 0.7);
`;

const PillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Pill = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(245, 245, 255, 0.84);
`;

const services = [
  {
    icon: <FiFigma />,
    title: 'Diseño UX/UI',
    copy:
      'Wireframes, sistemas de diseño y prototipos interactivos para validar ideas antes de escribir una sola línea de código.',
    tags: ['Investigación', 'Design systems', 'Prototipado'],
  },
  {
    icon: <FiCode />,
    title: 'Desarrollo Frontend',
    copy:
      'Interfaces accesibles y performantes con React, componentes reutilizables y animaciones que elevan la experiencia.',
    tags: ['React', 'SPA', 'SSR', 'Performance'],
  },
  {
    icon: <FiTrendingUp />,
    title: 'Productos escalables',
    copy:
      'Arquitecturas backend, APIs y paneles de administración listos para crecer junto a tu negocio y métricas.',
    tags: ['Node.js', 'APIs', 'Testing', 'CI/CD'],
  },
];

const Services = () => {
  return (
    <Section id="services">
      <TitleGroup>
        <Eyebrow>Servicios</Eyebrow>
        <Title>Todo lo que necesitas para lanzar una marca memorable</Title>
        <Subtitle>
          Desde la estrategia hasta la implementación, cada servicio está pensado para impulsar resultados medibles y crear
          experiencias con personalidad.
        </Subtitle>
      </TitleGroup>
      <CardGrid>
        {services.map((service) => (
          <Card key={service.title}>
            <Glow aria-hidden />
            <Icon>{service.icon}</Icon>
            <CardTitle>{service.title}</CardTitle>
            <CardCopy>{service.copy}</CardCopy>
            <PillList>
              {service.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </PillList>
          </Card>
        ))}
      </CardGrid>
    </Section>
  );
};

export default Services;
