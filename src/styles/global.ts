import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    font-size: 16px;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #312E38;
    color: #fff ;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto Slab', serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
  `;
