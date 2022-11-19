/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode, StateColorCode } from '@/constants/color';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 10rem;
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

export const Margin = styled.div`
  width: 100%;
  height: 16rem;

  background: ${ColorCode.DISABLED};
`;

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

export const DinnerListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4rem;
`;

export const QCModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 20rem;
  padding: 1rem 5rem 3rem 5rem;

  font-size: 3rem;
`;
