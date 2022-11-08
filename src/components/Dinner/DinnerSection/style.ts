import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const AddMenuBtnContainer = styled.button`
  background: ${ColorCode.PRIMARY};
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;

  color: ${ColorCode.WHITE};
  font-size: ${FontSize.M};
  font-weight: ${FontWeight.REGULAR};

  align-self: flex-end;

  display: flex;
  max-width: fit-content;
  padding: 0.7rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const AddMenuImg = styled.img`
  width: 1.5rem;
`;
