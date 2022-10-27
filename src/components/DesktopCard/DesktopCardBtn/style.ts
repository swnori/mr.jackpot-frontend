import styled from 'styled-components';

import { ColorCode } from '@/constants/color';

export const DesktopCardBtnContainer = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #ffffff;
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;

  width: 100%;
  height: 3em;

  cursor: pointer;

  color: ${ColorCode.WHITE};

  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0);
  }
`;
