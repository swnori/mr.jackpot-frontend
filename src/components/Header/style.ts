import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 2rem;
  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.span`
  font-weight: ${FontWeight.REGULAR};
  font-size: ${FontSize.XXL};
`;

export const HeaderBtn = styled.button`
  position: absolute;
  left: 0;
  padding: 0;
  background: none;
  outline: none;
  border: none;

  width: 2rem;
`;

export const HeaderImg = styled.img`
  width: 100%;
`;
