import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
  padding: 2rem;
  box-sizing: border-box;
`;

export const TaskTitle = styled.span`
  font-size: calc(${FontSize.XXL} + 0.15rem);
  font-weight: ${FontWeight.MEDIUM};
`;
