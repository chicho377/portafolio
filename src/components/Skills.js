import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 36px;

  &:before {
    content: '';
    position: absolute;
    inset: -60px -18vw -60px;
    background: radial-gradient(circle at 25% 50%, rgba(56, 249, 215, 0.12), transparent 65%),
      radial-gradient(circle at 75% 50%, rgba(139, 92, 246, 0.12), transparent 60%);
    opacity: 0.75;
    z-index: -1;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 700px;
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
  font-size: clamp(2.2rem, 3.4vw, 2.9rem);
  margin: 0;
  color: #ffffff;
  text-shadow: 0 18px 34px rgba(0, 0, 0, 0.35);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
`;

const SkillCard = styled.div`
  position: relative;
  padding: 24px 22px;
  border-radius: 20px;
  background: linear-gradient(150deg, rgba(8, 8, 14, 0.9), rgba(12, 12, 20, 0.92));
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  transition: transform 0.35s ease, border-color 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(56, 249, 215, 0.4);
  }

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(56, 249, 215, 0.08), rgba(139, 92, 246, 0.08));
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover:before {
    opacity: 1;
  }

  > * {
    position: relative;
    z-index: 1;
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
  color: rgba(233, 233, 255, 0.72);
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
