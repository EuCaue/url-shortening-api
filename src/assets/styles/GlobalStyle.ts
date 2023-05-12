import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    transition: all 0.2s ease;
}

html, body, #root {
  height: 100%;
}

body {
  overflow-x: hidden;
}

button {
position: relative;
 cursor: pointer;
  &:hover {
    ::before {
      display: block;
      width: 100%;
      height: 100%;
      inset: 0;
      background-color: rgba(255, 255, 250, 0.6);
    }
  }
  ::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 10%;
    height: 100%;
    border-radius: 5px;
    transition: all 550ms ease;
  }
}

`;
