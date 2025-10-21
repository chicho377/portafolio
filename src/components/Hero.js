import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiArrowUpRight } from 'react-icons/fi';

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const HeroSection = styled.section`
  position: relative;
  padding: 120px 6vw 80px;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 60px;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 100px 5vw 72px;
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    padding: 90px 24px 64px;
  }
`;

const HeroContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Eyebrow = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.64);
`;

const Title = styled.h1`
  font-size: clamp(2.8rem, 4vw, 3.8rem);
  line-height: 1.05;
  margin: 0;
  color: #ffffff;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #00ffcc 0%, #8b5cf6 50%, #f472b6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 540px;
  color: rgba(233, 233, 255, 0.78);
`;

const CTAGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const PrimaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  border-radius: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #050505;
  background: linear-gradient(135deg, #00ffcc 0%, #8b5cf6 100%);
  box-shadow: 0 20px 60px rgba(0, 255, 204, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 24px 70px rgba(139, 92, 246, 0.4);
  }
`;

const SecondaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  border-radius: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #f5f5ff;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.04);
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(0, 255, 204, 0.6);
  }
`;

const HeroVisual = styled.div`
  position: relative;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Blob = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 32px;
  background: radial-gradient(circle at 30% 30%, rgba(0, 255, 204, 0.2), transparent 65%),
    radial-gradient(circle at 70% 40%, rgba(139, 92, 246, 0.18), transparent 60%),
    radial-gradient(circle at 50% 70%, rgba(244, 114, 182, 0.16), transparent 55%);
  filter: blur(0px);
  opacity: 0.9;
`;

const Card = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  padding: 36px;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(10, 10, 14, 0.9) 0%, rgba(18, 18, 26, 0.92) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 60px rgba(8, 8, 10, 0.45);
  animation: ${float} 8s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const CardTitle = styled.h2`
  font-size: 1.35rem;
  margin: 0;
`;

const CardCopy = styled.p`
  color: rgba(233, 233, 255, 0.72);
  margin: 0;
  line-height: 1.6;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const Stat = styled.div`
  padding: 16px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.02);
`;

const StatValue = styled.p`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #00ffcc;
`;

const StatLabel = styled.span`
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(233, 233, 255, 0.6);
`;

const Hero = () => {
  return (
    <HeroSection id="top">
      <HeroContent>
        <Eyebrow>Desarrollador fullstack</Eyebrow>
        <Title>
          Construyo experiencias digitales <GradientText>memorables</GradientText>
        </Title>
        <Description>
          Diseño y desarrollo productos web escalables y con identidad propia. Me enfoco en combinar ingeniería, diseño y
          estrategia de producto para crear experiencias que las personas disfrutan usar.
        </Description>
        <CTAGroup>
          <PrimaryCTA href="#contact">
            Inicia tu proyecto
            <FiArrowUpRight />
          </PrimaryCTA>
          <SecondaryCTA href="#projects">
            Ver portafolio
            <FiArrowUpRight />
          </SecondaryCTA>
        </CTAGroup>
      </HeroContent>
      <HeroVisual>
        <Blob aria-hidden />
        <Card>
          <CardTitle>Experiencia diseñada para impulsar marcas</CardTitle>
          <CardCopy>
            Desde landing pages modernas hasta plataformas completas, cada proyecto es una oportunidad para entregar valor a
            usuarios reales.
          </CardCopy>
          <Stats>
            <Stat>
              <StatValue>+10</StatValue>
              <StatLabel>Proyectos lanzados</StatLabel>
            </Stat>
            <Stat>
              <StatValue>4</StatValue>
              <StatLabel>Años explorando tech</StatLabel>
            </Stat>
            <Stat>
              <StatValue>100%</StatValue>
              <StatLabel>Enfoque UX/UI</StatLabel>
            </Stat>
            <Stat>
              <StatValue>24/7</StatValue>
              <StatLabel>Colaboración</StatLabel>
            </Stat>
          </Stats>
        </Card>
      </HeroVisual>
    </HeroSection>
  );
};

export default Hero;
