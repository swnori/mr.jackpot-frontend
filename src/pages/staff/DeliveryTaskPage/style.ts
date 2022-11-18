/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode, StateColorCode } from '@/constants/color';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TaskTitle = styled.span`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.MEDIUM};
`;

interface TaskBtnValue {
  isOrder?: boolean;
  isNext?: boolean;
}

export const TaskBtn = styled.button<TaskBtnValue>`
  width: 100%;
  height: 5rem;

  border: none;
  border-radius: 2.5rem;

  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.REGULAR};

  background: ${(props) =>
    props.isNext ? StateColorCode.접수 : props.isOrder ? StateColorCode.배달 : StateColorCode.회수};

  &:disabled {
    background: ${ColorCode.DISABLED};
    color: ${ColorCode.BLACK};
  }
`;

export const TaskBtnContainer = styled.div`
  display: flex;
  width: 100%;

  gap: 2rem;
`;
