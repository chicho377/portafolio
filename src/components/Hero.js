import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiArrowUpRight } from 'react-icons/fi';

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-14px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0.18;
    transform: scale(0.96);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.03);
  }
  100% {
    opacity: 0.18;
    transform: scale(0.96);
  }
`;

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const HeroSection = styled.section`
  position: relative;
  padding: 140px 6vw 100px;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 70px;
  align-items: center;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    inset: -120px -20vw;
    background: radial-gradient(circle at 20% 20%, rgba(56, 249, 215, 0.18), transparent 55%),
      radial-gradient(circle at 75% 35%, rgba(139, 92, 246, 0.22), transparent 60%),
      radial-gradient(circle at 60% 80%, rgba(255, 122, 217, 0.12), transparent 70%);
    filter: blur(0px);
    z-index: -1;
    opacity: 0.85;
  }

  &:after {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(180deg, rgba(56, 249, 215, 0.08) 0%, rgba(10, 10, 16, 0) 45%);
    z-index: -2;
  }

  @media (max-width: 1024px) {
    padding: 120px 5vw 84px;
    grid-template-columns: 1fr;
    gap: 48px;
  }

  @media (max-width: 768px) {
    padding: 110px 24px 72px;
  }
`;

const HeroContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Eyebrow = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.82rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.6);

  &:before {
    content: '';
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, rgba(56, 249, 215, 0.8), rgba(56, 249, 215, 0));
  }
`;

const Title = styled.h1`
  font-size: clamp(3rem, 5vw, 4.4rem);
  line-height: 1.05;
  margin: 0;
  color: #ffffff;
  text-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
`;

const GradientText = styled.span`
  background: linear-gradient(100deg, #38f9d7 0%, #8b5cf6 50%, #ff7ad9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  position: relative;
  filter: drop-shadow(0 0 22px rgba(56, 249, 215, 0.35));
`;

const Description = styled.p`
  font-size: 1.12rem;
  line-height: 1.8;
  max-width: 560px;
  color: rgba(233, 233, 255, 0.75);
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
  padding: 16px 30px;
  border-radius: 18px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #050505;
  background: linear-gradient(125deg, #38f9d7 0%, #8b5cf6 60%, #ff7ad9 100%);
  box-shadow: 0 22px 60px rgba(139, 92, 246, 0.35);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 26px 80px rgba(139, 92, 246, 0.45);
  }
`;

const SecondaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 30px;
  border-radius: 18px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #f5f5ff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
  transition: transform 0.35s ease, border-color 0.35s ease, background 0.35s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(56, 249, 215, 0.6);
    background: rgba(255, 255, 255, 0.09);
  }
`;

const HeroVisual = styled.div`
  position: relative;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Blob = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 40px;
  background: radial-gradient(circle at 30% 30%, rgba(56, 249, 215, 0.2), transparent 65%),
    radial-gradient(circle at 70% 40%, rgba(139, 92, 246, 0.2), transparent 60%),
    radial-gradient(circle at 50% 70%, rgba(255, 122, 217, 0.16), transparent 55%);
  opacity: 0.9;
  animation: pulse 9s ease-in-out infinite;
`;

const Card = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  padding: 38px;
  border-radius: 30px;
  background: linear-gradient(150deg, rgba(10, 10, 16, 0.94) 0%, rgba(16, 16, 26, 0.96) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 28px 70px rgba(8, 8, 14, 0.55);
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
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(6px);
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

const Orb = styled.span`
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(56, 249, 215, 0.22), rgba(56, 249, 215, 0));
  filter: blur(0px);
  opacity: 0.65;
  animation: ${float} 12s ease-in-out infinite;

  &:nth-child(1) {
    top: -40px;
    left: 40px;
    animation-delay: -4s;
  }

  &:nth-child(2) {
    bottom: -60px;
    right: 20px;
    background: radial-gradient(circle at center, rgba(139, 92, 246, 0.24), rgba(139, 92, 246, 0));
    animation-delay: -2s;
  }

  &:nth-child(3) {
    top: 50%;
    right: -60px;
    transform: translateY(-50%);
    background: radial-gradient(circle at center, rgba(255, 122, 217, 0.22), rgba(255, 122, 217, 0));
    animation-delay: -6s;
  }
`;

const Orbit = styled.div`
  position: absolute;
  inset: 16px;
  border-radius: 32px;
  border: 1px dashed rgba(255, 255, 255, 0.08);
  pointer-events: none;
`;

const Badge = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #f5f5ff;
  backdrop-filter: blur(8px);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.25);

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #38f9d7;
    box-shadow: 0 0 10px rgba(56, 249, 215, 0.8);
  }

  &:nth-child(1) {
    top: -18px;
    right: 60px;
  }

  &:nth-child(2) {
    bottom: 40px;
    left: -26px;
  }

  &:nth-child(3) {
    top: 45%;
    right: -34px;
  }
`;

const Ticker = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 40px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(8, 8, 14, 0.6);
  backdrop-filter: blur(8px);
`;

const TickerTrack = styled.div`
  display: flex;
  gap: 36px;
  padding: 14px 0;
  animation: ${marquee} 28s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const TickerItem = styled.span`
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.58);
  display: inline-flex;
  align-items: center;
  gap: 12px;

  &:after {
    content: '•';
    color: rgba(245, 245, 255, 0.3);
    font-size: 1rem;
  }

  &:last-child:after {
    display: none;
  }
`;

const tickerItems = ['React', 'Node.js', 'UX/UI', 'Design systems', 'TypeScript', 'MongoDB', 'Clean code', 'Storytelling', 'Firebase', 'Next.js'];
const orbitBadges = ['Frontend craft', 'Brand first', 'Impacto medible'];

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
        <Ticker>
          <TickerTrack>
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <TickerItem key={`${item}-${index}`}>{item}</TickerItem>
            ))}
          </TickerTrack>
        </Ticker>
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
        <Orbit aria-hidden>
          {orbitBadges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </Orbit>
        <Orb aria-hidden />
        <Orb aria-hidden />
        <Orb aria-hidden />
      </HeroVisual>
    </HeroSection>
  );
};

export default Hero;
