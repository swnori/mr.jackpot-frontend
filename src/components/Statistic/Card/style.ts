import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  width: 10rem;

  background-color: ${ColorCode.WHITE};
  padding: 2rem;

  border: 1px solid ${ColorCode.BLACK};
  border-radius: 2rem;
`;

export const CardImg = styled.img`
  width: 1.75rem;
`;

export const CardTitle = styled.span`
  font-size: ${FontSize.L};
  line-height: 1.5em;
  color: ${ColorCode.DARKGREY};
`;

export const CardValueContainer = styled.div``;

export const CardValue = styled.span`
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.MEDIUM};
`;

export const CardUnit = styled.span`
  margin-left: 0.5rem;
  font-size: ${FontSize.L};
`;
