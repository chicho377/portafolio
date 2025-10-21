import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700&display=swap');

  :root {
    color-scheme: dark;
    --bg-primary: #050506;
    --bg-secondary: #0e0e12;
    --text-primary: #f5f5ff;
    --text-muted: rgba(233, 233, 255, 0.7);
    --accent: #00ffcc;
    --accent-2: #8b5cf6;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'Roboto', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;
