import styled from 'styled-components';

import { FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const DesktopCardInputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
`;

export const DesktopCardInputBox = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */

  height: 2.5em;
  border-radius: 10px;
  padding-left: 1em;

  color: ${ColorCode.WHITE};

  &::placeholder {
    color: ${ColorCode.OFFWHITE};
    font-weight: ${FontWeight.LIGHT};
  }

  &:focus-visible {
    outline: none;
  }
`;

export const DesktopCardInputIcon = styled.img`
  width: 2em;
  height: 2em;

  filter: invert(100%);
`;
