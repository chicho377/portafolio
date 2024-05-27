// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #0a0a0a;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
