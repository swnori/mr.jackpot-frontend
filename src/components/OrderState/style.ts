import styled from 'styled-components';

import { KeyOf } from '@/utils/type';

import { FontSize } from '@/constants/font';
import { StateColorCode } from '@/constants/color';

interface OrderStateValue {
  stateName: KeyOf<typeof StateColorCode>;
}

export const OrderStateContainer = styled.span<OrderStateValue>`
  padding: 0.5rem 2.5rem;
  font-size: ${FontSize.M};
  background: ${(props) => StateColorCode[props.stateName] ?? ''};

  border-radius: 2rem;
`;
