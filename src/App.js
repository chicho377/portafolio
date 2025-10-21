import React from 'react';
import styled from 'styled-components';
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

const GridOverlay = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.08;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.12) 1px, transparent 0),
    linear-gradient(0deg, rgba(255, 255, 255, 0.12) 1px, transparent 0);
  background-size: 120px 120px;

  @media (max-width: 768px) {
    background-size: 80px 80px;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding: 0 6vw 120px;
  position: relative;
  z-index: 1;

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
        <Atmosphere aria-hidden />
        <GridOverlay aria-hidden />
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
