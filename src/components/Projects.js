import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 60px 20px;
  background-color: #1a1a1a;
  color: #fff;
`;

const Title = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  color: #00ffcc;
  text-align: center;
  margin-bottom: 50px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled.div`
  background-color: #2a2a2a;
  padding: 30px;
  border-radius: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

const ProjectTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  color: #00ffcc;
  margin-bottom: 20px;
`;

const ProjectDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.6;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  color: #00ffcc;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #66ffcc;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Title>Proyectos Destacados</Title>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectTitle>Hotel Golden Dream</ProjectTitle>
          <ProjectDescription>
          El proyecto consiste en el desarrollo de una página web completa para un hotel, utilizando PHP como lenguaje de programación principal. El objetivo es proporcionar a los visitantes una experiencia de usuario óptima, permitiéndoles obtener información detallada sobre el hotel, explorar las habitaciones disponibles, realizar reservas en línea y ponerse en contacto fácilmente con el establecimiento. El sitio está diseñado para ser intuitivo, visualmente atractivo y funcional, asegurando que se adapte a diferentes dispositivos y resoluciones de pantalla.
          </ProjectDescription>
          <ProjectLink href="https://github.com/chicho377/Hotel-Golden-Dream" target="_blank">
            Ver en GitHub
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>To Do List</ProjectTitle>
          <ProjectDescription>
          Esta aplicación web permite a los usuarios gestionar sus tareas diarias de manera efectiva. Puedes agregar nuevas tareas especificando el título, fecha de vencimiento, hora, prioridad y categoría. Además, puedes añadir sub tareas, editar y eliminar tareas existentes según sea necesario. Actualmente en desarrollo y una interfaz de usuario intuitiva.
          </ProjectDescription>
          <ProjectLink href="https://github.com/chicho377/to-do-list-app" target="_blank">
            Ver en GitHub
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Gestor de Nóminas</ProjectTitle>
          <ProjectDescription>
          Programa hecho en C++ que calcula salarios netos basados en ingresos ordinarios, bonificaciones y deducciones de la Caja Costarricense de Seguro Social (CCSS). Ideal para empresas que necesitan una herramienta sencilla y eficiente para gestionar la nómina de sus empleados. Actualmente en desarrollo y una interfaz de usuario intuitiva.
          </ProjectDescription>
          <ProjectLink href="https://github.com/chicho377/Gestion-de-Nomina-de-Empleados" target="_blank">
            Ver en GitHub
          </ProjectLink>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
