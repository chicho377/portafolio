import React from 'react';
import styled, { keyframes } from 'styled-components';
import GlobalStyle from './GlobalStylec';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const twinkle = keyframes`
  0%,
  100% {
    opacity: 0.55;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 0.85;
    transform: translate3d(-0.8%, -0.6%, 0);
  }
`;

const grain = keyframes`
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 15% 20%;
  }
  50% {
    background-position: 35% 40%;
  }
  75% {
    background-position: 55% 25%;
  }
  100% {
    background-position: 0 0;
  }
`;

const AppShell = styled.div`
  position: relative;
  min-height: 100vh;
  background: #020208;
  color: #f5f5ff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Atmosphere = styled.div`
  position: fixed;
  inset: -20vh -10vw -40vh;
  pointer-events: none;
  z-index: 0;

  &:before,
  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.55;
    mix-blend-mode: screen;
    animation: drift 26s ease-in-out infinite;
  }

  &:before {
    width: 75vw;
    height: 75vw;
    top: -10vh;
    left: -18vw;
    background: radial-gradient(circle at center, rgba(0, 255, 204, 0.35), transparent 65%);
    animation-delay: -8s;
  }

  &:after {
    width: 60vw;
    height: 60vw;
    right: -22vw;
    bottom: -18vh;
    background: radial-gradient(circle at center, rgba(139, 92, 246, 0.4), transparent 70%);
  }

  @keyframes drift {
    0% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(4%, -3%, 0) scale(1.05);
    }
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
  }
`;

const AuroraRays = styled.div`
  position: fixed;
  inset: -40vh -25vw;
  pointer-events: none;
  z-index: 0;
  filter: blur(140px);
  opacity: 0.38;
  mix-blend-mode: screen;

  &:before,
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(from 90deg at 50% 50%, rgba(56, 249, 215, 0.38), rgba(139, 92, 246, 0.25), rgba(255, 122, 217, 0.35), rgba(56, 249, 215, 0.38));
    animation: ${rotate} 48s linear infinite;
  }

  &:after {
    transform: scale(0.65);
    filter: blur(20px);
    opacity: 0.8;
    animation-duration: 66s;
    animation-direction: reverse;
  }
`;

const GridOverlay = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.08;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 0),
    linear-gradient(0deg, rgba(255, 255, 255, 0.12) 1px, transparent 0);
  background-size: 120px 120px;

  @media (max-width: 768px) {
    background-size: 80px 80px;
  }
`;

const Starfield = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.24;
  mix-blend-mode: screen;
  background-image: radial-gradient(1px 1px at 15% 25%, rgba(255, 255, 255, 0.7), transparent 50%),
    radial-gradient(1px 1px at 35% 75%, rgba(139, 92, 246, 0.45), transparent 55%),
    radial-gradient(1px 1px at 65% 35%, rgba(56, 249, 215, 0.6), transparent 45%),
    radial-gradient(1px 1px at 85% 60%, rgba(255, 122, 217, 0.5), transparent 55%),
    radial-gradient(2px 2px at 50% 50%, rgba(255, 255, 255, 0.8), transparent 60%);
  animation: ${twinkle} 22s ease-in-out infinite;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(1px 1px at 25% 45%, rgba(255, 255, 255, 0.45), transparent 55%),
      radial-gradient(1px 1px at 70% 20%, rgba(139, 92, 246, 0.38), transparent 55%),
      radial-gradient(2px 2px at 40% 60%, rgba(56, 249, 215, 0.32), transparent 55%);
    animation: ${twinkle} 18s ease-in-out infinite;
    animation-direction: reverse;
  }
`;

const NoiseTexture = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  opacity: 0.12;
  mix-blend-mode: soft-light;
  background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 0);
  background-size: 4px 4px;
  animation: ${grain} 12s steps(10) infinite;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding: 0 6vw 120px;
  position: relative;
  z-index: 3;

  @media (max-width: 1024px) {
    gap: 80px;
    padding: 0 5vw 80px;
  }

  @media (max-width: 768px) {
    gap: 64px;
    padding: 0 24px 64px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppShell>
        <AuroraRays aria-hidden />
        <Atmosphere aria-hidden />
        <Starfield aria-hidden />
        <GridOverlay aria-hidden />
        <NoiseTexture aria-hidden />
        <Header />
        <Hero />
        <Main>
          <About />
          <Services />
          <Projects />
          <Experience />
          <Skills />
          <Contacts />
        </Main>
        <Footer />
      </AppShell>
    </>
  );
}

export default App;
