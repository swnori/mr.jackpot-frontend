import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  padding-bottom: 10rem;
`;

export const OrderInfoBtn = styled.button`
  width: calc(100% - 2.5rem);

  background: rgba(255, 255, 255, 0.15);
  border: 1px solid ${ColorCode.WHITE};
  border-radius: 10px;

  padding: 1rem 1.25rem;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.PRIMARY};

  box-sizing: content-box;
`;
