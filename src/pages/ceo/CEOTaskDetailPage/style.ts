import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode, StateColorCode } from '@/constants/color';

export const CEOTaskDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
  padding: 2rem;
  box-sizing: border-box;
`;

export const CEOTaskDetailBackBtn = styled.button`
  background: ${ColorCode.WHITE};
  width: 2.5rem;
  height: 2.5rem;

  border: none;
  border-radius: 10px;

  margin-left: 1.5rem;
`;

export const CEOTaskDetailBackBtnImg = styled.img`
  width: 100%;
`;

export const CEOTaskDetailTitle = styled.span`
  font-size: calc(${FontSize.XXL} + 0.15rem);
  font-weight: ${FontWeight.MEDIUM};
`;

export const CEOTaskDetailSectionTitle = styled.span`
  font-size: calc(${FontSize.XL} + 0.3rem);
  font-weight: ${FontWeight.MEDIUM};
`;

export const DinnerListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4rem;
`;

export const CEOTaskDetailBtn = styled.button`
  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${StateColorCode.요리};
  border: none;
  border-radius: 15px;
  font-size: ${FontSize.XXL};
  width: 25rem;
  height: 5rem;

  &:disabled {
    background: ${ColorCode.LIGHTGREY};
    color: ${ColorCode.BLACK};
  }

  transition: background 0.3s ease-in-out;
`;

export const CEOTaskDetailBtnImg = styled.img`
  width: 3rem;
  filter: invert(100%);
`;
