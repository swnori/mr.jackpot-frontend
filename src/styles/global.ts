import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import { ColorCode } from '@/constants/color';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: calc(0.35vw + 8.74px);
  }
  html,
  body,
  span,
  div,
  a,
  input,
  textarea,
  button {
    font-family: 'NotoSansKR', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${ColorCode.BLACK};
    &:visited {
      color: ${ColorCode.BLACK};
    }
  }
  #root {
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
