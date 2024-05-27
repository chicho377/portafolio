import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #1a1a1a;
    color: #fff;
    line-height: 1.6;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
