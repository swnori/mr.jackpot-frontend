import styled from 'styled-components';

import { FontSize } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const SearchContainer = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: none;
  border: 1px solid ${ColorCode.DARKGREY};

  border-radius: 15px;

  box-sizing: border-box;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  outline: none;
  background: none;

  font-size: ${FontSize.XL};
  &::placeholder {
    color: ${ColorCode.GREY};
  }
`;

export const SearchBtn = styled.button`
  width: 2rem;
  padding: 0;

  border: none;
  background: none;
`;

export const SearchImg = styled.img`
  width: 100%;
`;
