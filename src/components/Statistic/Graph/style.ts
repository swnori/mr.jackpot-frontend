import styled from 'styled-components';

import { ColorCode } from '@/constants/color';

export const GraphContainer = styled.div`
  width: 750px;

  box-sizing: content-box;
  background-color: ${ColorCode.WHITE};
  padding: 2rem;

  border: 1px solid ${ColorCode.BLACK};
  border-radius: 2rem;
  overflow: hidden;
`;
