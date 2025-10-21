import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 700px;
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.5);
`;

const Title = styled.h2`
  font-size: clamp(2rem, 3vw, 2.6rem);
  margin: 0;
  color: #ffffff;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 18px;
`;

const SkillCard = styled.div`
  padding: 22px 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 255, 204, 0.35);
  }
`;

const SkillCategory = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(233, 233, 255, 0.6);
`;

const SkillName = styled.h3`
  margin: 0;
  font-size: 1.15rem;
  color: #ffffff;
`;

const SkillList = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
  color: rgba(233, 233, 255, 0.7);
  font-size: 0.95rem;
`;

const skills = [
  {
    category: 'Frontend',
    name: 'Interfaces dinámicas',
    items: ['React', 'Next.js', 'Styled-components', 'Tailwind CSS', 'Redux Toolkit'],
  },
  {
    category: 'Backend',
    name: 'APIs y microservicios',
    items: ['Node.js', 'Express', 'PHP', 'REST', 'Autenticación JWT'],
  },
  {
    category: 'Herramientas',
    name: 'Flujos de trabajo',
    items: ['Git & GitHub', 'Jest', 'React Testing Library', 'Postman', 'CI/CD'],
  },
  {
    category: 'Soft skills',
    name: 'Trabajo colaborativo',
    items: ['Mentoría', 'Comunicación efectiva', 'Metodologías ágiles', 'Resolución creativa de problemas'],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <TitleGroup>
        <Eyebrow>Habilidades</Eyebrow>
        <Title>Una combinación equilibrada de ingeniería y diseño</Title>
      </TitleGroup>
      <SkillsGrid>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            <SkillCategory>{skill.category}</SkillCategory>
            <SkillName>{skill.name}</SkillName>
            <SkillList>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default Skills;
