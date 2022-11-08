import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';

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
