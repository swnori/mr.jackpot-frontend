import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const LoginCardDesc = styled.span`
  margin-top: 7em;
  font-weight: ${FontWeight.LIGHT};
  font-size: ${FontSize.M};
  color: ${ColorCode.WHITE};
  line-height: 1.25em;
`;
