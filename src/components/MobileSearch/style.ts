import styled from 'styled-components';

import { ColorCode } from '@/constants/color';

export const SearchContainer = styled.div`
  width: calc(100% - 2rem);
  height: 3rem;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.15);
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 15px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  outline: none;
  background: none;
`;

export const SearchBtn = styled.button`
  width: 2rem;
  padding: 0;

  border: none;
  background: none;
`;

export const SearchImg = styled.img`
  width: 100%;

  filter: invert(100%);
`;
