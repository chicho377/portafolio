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
  min-height: 100vh;
  background: radial-gradient(circle at top left, rgba(0, 255, 204, 0.16), transparent 45%),
    radial-gradient(circle at bottom right, rgba(128, 90, 213, 0.18), transparent 35%),
    linear-gradient(180deg, #060606 0%, #0c0c0e 100%);
  color: #f5f5ff;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 120px;
  padding: 0 6vw 120px;

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
