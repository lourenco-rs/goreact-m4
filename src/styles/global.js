import { createGlobalStyle } from "styled-components";

import "rc-slider/assets/index.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #181818;
    font-family: 'Montserrat', sans-serif;
    color: #FFF;
  }
`;
