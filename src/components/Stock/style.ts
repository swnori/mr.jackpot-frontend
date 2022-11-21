import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode, StateColorCode } from '@/constants/color';

export const StockModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 40rem;
  padding: 1.5rem 2rem 2rem 2rem;

  box-sizing: border-box;
`;

export const StockModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

export const StockModalInput = styled.input`
  height: 2rem;
  padding: 0.5rem 1rem;

  background: none;
  border: 1px solid ${ColorCode.DARKGREY};
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};

  border-radius: 15px;
`;

export const StockModalInputTitle = styled.span`
  font-size: ${FontSize.M};
  font-weight: ${FontWeight.MEDIUM};
`;

export const StockModalInfoContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const StockModalInfoTitle = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.MEDIUM};
`;

export const StockModalInfoText = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
`;

export const StockModalBtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

interface BtnValue {
  isActive?: boolean;
  isOut?: boolean;
  isIn?: boolean;
  isSet?: boolean;
}

export const StockModalBtn = styled.button<BtnValue>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0;

  width: 6rem;
  height: 2.5rem;

  border: none;
  border-radius: 1.25rem;

  background: ${ColorCode.LIGHTGREY};
  font-size: ${FontSize.L};

  ${(props) => (props.isActive && props.isOut ? `background: ${ColorCode.ERROR};` : '')}
  ${(props) => (props.isActive && props.isIn ? `background: ${StateColorCode.도착};` : '')}
  ${(props) => (props.isActive && props.isSet ? `background: ${StateColorCode.배달};` : '')}
`;
