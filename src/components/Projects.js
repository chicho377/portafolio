import React from 'react';
import styled from 'styled-components';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 36px;

  &:before {
    content: '';
    position: absolute;
    inset: -80px -18vw -60px;
    background: radial-gradient(circle at 25% 20%, rgba(56, 249, 215, 0.12), transparent 65%),
      radial-gradient(circle at 80% 40%, rgba(139, 92, 246, 0.12), transparent 65%);
    opacity: 0.75;
    z-index: -1;
  }
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
  gap: 10px;
  font-size: 0.82rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.55);

  &:before {
    content: '';
    width: 30px;
    height: 1px;
    background: linear-gradient(90deg, rgba(56, 249, 215, 0.7), rgba(56, 249, 215, 0));
  }
`;

const Title = styled.h2`
  font-size: clamp(2.3rem, 3.5vw, 3rem);
  margin: 0;
  color: #ffffff;
  text-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(233, 233, 255, 0.74);
  max-width: 760px;
`;

const Grid = styled.div`
  display: grid;
  gap: 32px;
`;

const Card = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
  gap: 44px;
  padding: 38px;
  border-radius: 34px;
  background: linear-gradient(140deg, rgba(10, 10, 16, 0.94) 0%, rgba(16, 16, 26, 0.96) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transition: transform 0.45s ease, border-color 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(56, 249, 215, 0.4);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  @media (max-width: 640px) {
    padding: 26px;
  }
`;

const CardGlow = styled.div`
  position: absolute;
  inset: 1px;
  border-radius: 32px;
  background: linear-gradient(135deg, rgba(56, 249, 215, 0.08), rgba(139, 92, 246, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.5rem, 2.2vw, 1.9rem);
  color: #ffffff;
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(233, 233, 255, 0.72);
`;

const CardIndex = styled.span`
  position: absolute;
  top: 26px;
  right: 32px;
  font-size: 0.8rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.35);
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  padding: 9px 16px;
  border-radius: 999px;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(233, 233, 255, 0.82);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #f5f5ff;
  transition: transform 0.35s ease, border-color 0.35s ease, background 0.35s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(56, 249, 215, 0.55);
    background: rgba(56, 249, 215, 0.1);
  }
`;

const Preview = styled.div`
  position: relative;
  border-radius: 26px;
  background: radial-gradient(circle at top left, rgba(56, 249, 215, 0.18), transparent 60%),
    radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.2), transparent 55%),
    rgba(12, 12, 18, 0.85);
  min-height: 240px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    inset: 20%;
    border-radius: 22px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    opacity: 0.4;
  }
`;

const PreviewText = styled.span`
  font-size: 1rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(233, 233, 255, 0.5);
`;

const projects = [
  {
    title: 'Hotel Golden Dream',
    description:
      'Sitio web completo para un hotel boutique con motor de reservas, catálogo de habitaciones y panel de administración en PHP.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Responsive'],
    repo: 'https://github.com/chicho377/Hotel-Golden-Dream',
    demo: 'https://github.com/chicho377/Hotel-Golden-Dream#readme',
  },
  {
    title: 'ToDo Momentum',
    description:
      'Aplicación de gestión de tareas con enfoque en productividad, etiquetas, recordatorios y sincronización multi-dispositivo.',
    tags: ['React', 'Context API', 'Framer Motion', 'Firebase'],
    repo: 'https://github.com/chicho377/to-do-list-app',
    demo: 'https://github.com/chicho377/to-do-list-app#readme',
  },
  {
    title: 'Gestor de Nóminas',
    description:
      'Sistema en C++ para calcular salarios netos, bonificaciones y deducciones automatizadas con reportes exportables.',
    tags: ['C++', 'CLI', 'Clean architecture'],
    repo: 'https://github.com/chicho377/Gestion-de-Nomina-de-Empleados',
    demo: 'https://github.com/chicho377/Gestion-de-Nomina-de-Empleados#readme',
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <TitleGroup>
        <Eyebrow>Portafolio</Eyebrow>
        <Title>Proyectos que combinan estrategia, diseño y tecnología</Title>
        <Subtitle>
          Cada entrega se basa en investigación, prototipado y pruebas reales. Aquí algunos proyectos que reflejan mi proceso y
          obsesión por los detalles.
        </Subtitle>
      </TitleGroup>
      <Grid>
        {projects.map((project, index) => (
          <Card key={project.title}>
            <CardGlow aria-hidden />
            <CardIndex>{`0${index + 1}`}</CardIndex>
            <CardContent>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <TagList>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList>
              <Actions>
                <ActionButton href={project.demo} target="_blank" rel="noreferrer">
                  <FiExternalLink /> Demo en vivo
                </ActionButton>
                <ActionButton href={project.repo} target="_blank" rel="noreferrer">
                  <FiGithub /> Ver código
                </ActionButton>
              </Actions>
            </CardContent>
            <Preview>
              <PreviewText>{project.title}</PreviewText>
            </Preview>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
