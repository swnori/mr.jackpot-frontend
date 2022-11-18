import styled from 'styled-components';

import { FontSize } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const TableRowContainer = styled.tr`
  height: 6rem;
  border-bottom: 1px solid ${ColorCode.GREY};
`;

export const TableRowItem = styled.td`
  font-size: ${FontSize.L};
  text-align: center;
  vertical-align: middle;
`;
