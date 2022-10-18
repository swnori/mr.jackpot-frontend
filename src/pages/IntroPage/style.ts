import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const IntroTitle = styled.span`
  font-weight: ${FontWeight.LIGHT};
  font-size: ${FontSize.XXL};
  color: ${ColorCode.WHITE};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const IntroCardContainer = styled.div`
  display: flex;
  gap: 5rem;
  width: 100%;
  height: 60%;
  justify-content: center;
`;
