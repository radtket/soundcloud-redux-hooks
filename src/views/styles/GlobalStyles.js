import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { size } from "polished";

// color: #F1F1F2;
export default createGlobalStyle`
${styledNormalize}

  html {
    background: #141625;
    box-sizing: border-box;
    color: #fff;
    font-family: 'Heebo', sans-serif;
    font-size: 100%;
    line-height: 1.5;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin: 0;
  }

  .visuallyhidden {
    ${size("1px")};
    border: 0;
    clip: rect(0 0 0 0);
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }


  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  dd {
    margin-left: 0;
  }

  a {
    text-decoration: none;
    transition: color 0.2s ease;
    color: rgba(255, 255, 255, .50);
  }

  figure {
    margin: 0;
  }

  img,
  picture {
    margin: 0;
    max-width: 100%;
  }

  img {
    display: block;
    height: auto;
  }

  button {
    appearance: none;
    background: transparent;
    border: 0;
    cursor: pointer;
    display: inline-block;
    font-family: 'Maisonneue Book';
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
  }

  .container {
    padding-left: 24px;
    padding-right: 24px;
    margin: 0 auto;
    max-width: 1200px;
    position: relative;
  }

  .ellipsis-one-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 1px;
    margin-right: -1px;
  }

`;
