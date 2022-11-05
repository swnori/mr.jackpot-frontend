import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const DinnerContainer = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
`;

export const Title = styled.span`
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.BLACK};
`;

export const SubTitle = styled.span`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.DARKGREY};
`;
