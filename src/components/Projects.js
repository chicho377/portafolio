import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 60px 20px;
  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const Title = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  color: #00ffcc;
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.div`
  background-color: #2a2a2a;
  padding: 30px;
  border-radius: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 1.8rem;
  color: #00ffcc;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CardDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardLink = styled.a`
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
    <Section id="projects">
      <Title>Proyectos Destacados</Title>
      <Grid>
        <Card>
          <CardTitle>Hotel Golden Dream</CardTitle>
          <CardDescription>
            Desarrollo de una página web completa para un hotel, utilizando PHP como lenguaje principal. Diseño intuitivo y responsive, permitiendo reservas en línea y exploración de habitaciones disponibles.
          </CardDescription>
          <CardLink href="https://github.com/chicho377/Hotel-Golden-Dream" target="_blank">
            Ver en GitHub
          </CardLink>
        </Card>
        <Card>
          <CardTitle>To Do List</CardTitle>
          <CardDescription>
            Aplicación web para gestionar tareas diarias de manera efectiva. Interfaz intuitiva con funciones avanzadas de gestión de tareas.
          </CardDescription>
          <CardLink href="https://github.com/chicho377/to-do-list-app" target="_blank">
            Ver en GitHub
          </CardLink>
        </Card>
        <Card>
          <CardTitle>Gestor de Nóminas</CardTitle>
          <CardDescription>
            Programa en C++ para calcular salarios netos, bonificaciones y deducciones de la CCSS. Ideal para gestionar nóminas de empleados de manera eficiente.
          </CardDescription>
          <CardLink href="https://github.com/chicho377/Gestion-de-Nomina-de-Empleados" target="_blank">
            Ver en GitHub
          </CardLink>
        </Card>
      </Grid>
    </Section>
  );
};

export default Projects;
