import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const DesktopCardDesc = styled.span`
  font-weight: ${FontWeight.LIGHT};
  font-size: ${FontSize.M};
  color: ${ColorCode.WHITE};
`;

export const MobileCardDesc = styled.span`
  font-weight: ${FontWeight.LIGHT};
  font-size: ${FontSize.L};
  color: ${ColorCode.WHITE};
`;

export const MobileCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;
