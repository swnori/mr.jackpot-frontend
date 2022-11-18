import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const MainTitle = styled.span`
  font-size: calc(${FontSize.XXL} + 0.15rem);
  font-weight: ${FontWeight.MEDIUM};
`;
