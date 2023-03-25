import { createGlobalStyle } from "styled-components";

import GlobalFont from './AkiraExpandedDemo.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AkiraExpanded';
    font-style: normal;
    src: url(${GlobalFont}) format('opentype');
  }
`;

export default GlobalStyle;