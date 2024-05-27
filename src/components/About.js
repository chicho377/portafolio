import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 60px 20px;
  background: #111;
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 2.5rem;
  color: #00ffcc;
`;

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: #bbb;
  max-width: 800px;
  margin: 20px auto;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Title>About Me</Title>
      <Description>
        Soy estudiante de Ingeniería en Sistemas y soy un desarrollador apasionado por la tecnología y el diseño moderno. Me encanta crear nuevos programas y aprender nuevas tecnologías.
      </Description>
    </AboutSection>
  );
};

export default About;
