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
    position: fixed;
    width: 100vw;
    height: 100vh;
    height: -webkit-fill-available;
    height: fill-available;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch; /* enables “momentum” (smooth) scrolling */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

export default GlobalStyle;
