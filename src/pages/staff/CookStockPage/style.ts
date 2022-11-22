import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { StateColorCode } from '@/constants/color';

export const StockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  padding: 2rem;
  box-sizing: border-box;
`;

export const StockTitle = styled.span`
  font-size: calc(${FontSize.XXL} + 0.15rem);
  font-weight: ${FontWeight.MEDIUM};
`;

export const AddItemBtn = styled.button`
  width: 10rem;
  height: 4rem;

  padding: 0;
  margin: 0;

  border: none;
  border-radius: 2rem;

  font-size: ${FontSize.L};
  background: ${StateColorCode.요리};

  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const AddItemBtnImg = styled.img`
  width: 1.5rem;
`;
