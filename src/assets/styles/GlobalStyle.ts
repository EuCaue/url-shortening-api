import { createGlobalStyle } from 'styled-components';

import * as colors from './configColors/colors';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
}

html, body, #root {
  height: 100%;
}
`;
