import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 60px 20px;
  background: #1a1a1a;
  color: #fff;
`;

const Title = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  color: #00ffcc;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const ProjectCard = styled.div`
  background: #2a2a2a;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: #00ffcc;
`;

const ProjectDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: #bbb;
  margin-top: 10px;
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Title>Projects</Title>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectTitle>Project 1</ProjectTitle>
          <ProjectDescription>
            Descripción breve del proyecto 1.
          </ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Project 2</ProjectTitle>
          <ProjectDescription>
            Descripción breve del proyecto 2.
          </ProjectDescription>
        </ProjectCard>
        {/* Añade más ProjectCard según sea necesario */}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
