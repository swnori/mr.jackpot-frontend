import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const SectionContainer = styled.section`
  width: calc(100% - 4rem);
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SectionTitle = styled.span`
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.MEDIUM};
`;

export const SectionDesc = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.DARKGREY};

  text-align: end;
`;
