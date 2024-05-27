import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import styled from 'styled-components';


const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background: #0a0a0a;
  color: #fff;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <About />
        <Projects />
        <Contacts />
      </AppContainer>
    </>
  );
}


export default App;
