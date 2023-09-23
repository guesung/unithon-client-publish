import { createGlobalStyle } from "styled-components";

import pretendardBold from "../asstes/fonts/Pretendard-Bold.woff2";
import pretendardRegular from "../asstes/fonts/Pretendard-Regular.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    font-weight: normal;
    src: url(${pretendardRegular}) format("woff2");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: bold;
    src: url(${pretendardBold}) format("woff2");
  }

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
    font-family: "Pretendard";
    white-space: pre-wrap;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
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
