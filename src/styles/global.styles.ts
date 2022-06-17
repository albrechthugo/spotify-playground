import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-dark-bg: #111111;
    --color-border: rgb(46, 46, 46);
    --color-white: #ffffff;
    --color-primary: #c2f8cb;
    --color-primary-hover: rgba(194, 248, 203, 0.8);
    --color-primary-active: #D9FFDF;
    --color-shadow-overlay: rgba(46, 46, 46, 0.1);

    --weight-light: 100;
    --weight-regular: 400;
    --weight-bold: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #__next {
    height: 100%;
    background-color: var(--color-dark-bg);
    color: var(--color-white);
  }

  body,
  * {
    font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
`

export default GlobalStyle
