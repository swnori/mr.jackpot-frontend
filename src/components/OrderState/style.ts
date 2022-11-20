import styled from 'styled-components';

import { KeyOf } from '@/utils/type';

import { StateColorCode } from '@/constants/color';

interface OrderStateValue {
  stateName: KeyOf<typeof StateColorCode>;
}

export const OrderStateContainer = styled.span<OrderStateValue>`
  padding: 0.5rem 2.25rem;
  font-size: 1.25rem;
  background: ${(props) => StateColorCode[props.stateName] ?? ''};

  border-radius: 2rem;
`;
