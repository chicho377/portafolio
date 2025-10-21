import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Inter:wght@400;500;600;700&family=Orbitron:wght@600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

  :root {
    color-scheme: dark;
    --bg-primary: #040409;
    --bg-secondary: #0d0d16;
    --bg-elevated: rgba(12, 12, 20, 0.86);
    --text-primary: #f5f5ff;
    --text-muted: rgba(233, 233, 255, 0.72);
    --accent: #38f9d7;
    --accent-2: #8b5cf6;
    --accent-3: #ff7ad9;
    --glass-border: rgba(255, 255, 255, 0.08);
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
    font-family: 'Inter', 'Space Grotesk', 'Roboto', sans-serif;
    background-color: var(--bg-primary);
    background-image: radial-gradient(circle at 20% -10%, rgba(56, 249, 215, 0.08), transparent 45%),
      radial-gradient(circle at 80% 0%, rgba(139, 92, 246, 0.08), transparent 50%),
      linear-gradient(180deg, rgba(4, 4, 9, 0.85) 0%, rgba(2, 2, 8, 0.96) 100%);
    background-attachment: fixed;
    min-height: 100vh;
    color: var(--text-primary);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
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

  ::selection {
    background: rgba(56, 249, 215, 0.2);
    color: var(--text-primary);
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.04);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, rgba(56, 249, 215, 0.6) 0%, rgba(139, 92, 246, 0.6) 100%);
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, rgba(56, 249, 215, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%);
  }
`;

export default GlobalStyle;
