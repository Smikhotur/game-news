import { createGlobalStyle } from 'styled-components';
import didact from '../assets/fonts/DidactGothic-Regular.ttf';
// import { colors } from '../CONST/colors';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
  }

  @font-face {
    font-family: 'Didact Gothic';
    src: url(${didact}) format('ttf');
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-family: 'Didact Gothic', sans-serif;
    min-height: 100%;
    height: 100%;
  }

  body {
    min-height: 100%;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  div {
    /* height: 100%; */
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
