import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${ColorCode.OFFWHITE};
  color: ${ColorCode.BLACK};
`;

export const ErrorTitle = styled.span`
  font-size: calc(${FontSize.XXL} * 4);
  font-weight: ${FontWeight.BOLD};
  margin-bottom: 3rem;
`;

export const ErrorDesc = styled.span`
  font-size: ${FontSize.XXL};
  margin-bottom: 2rem;
`;

export const ErrorBtn = styled.button`
  width: 16rem;
  height: 4rem;
  padding: 1rem;
  background-color: #ffdba4;

  font-size: ${FontSize.L};

  border: none;
  border-radius: 15px;

  cursor: pointer;
  outline: none;

  transition: all 0.3s ease-out;

  &:hover {
    opacity: 0.7;
  }
`;

export const ErrorImg = styled.img`
  width: 15rem;
  height: auto;

  margin-bottom: 3rem;
`;
