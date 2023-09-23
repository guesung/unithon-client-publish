import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    &::-webkit-scrollbar {
      display: none;
    }
    
    scrollbar-width: none;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "baseFont";
  }
  a {
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
  }
  button,
  input,
  textarea {
    outline: none;
    background: none;
    border: none;
  }
  button {
    cursor: pointer;
  }
  li {
    list-style: none;
  }
  img {
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
