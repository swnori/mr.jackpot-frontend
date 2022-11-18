import styled from 'styled-components';

import { StateColorCode } from '@/constants/color';

interface DeliveryStateValue {
  isOrder: boolean;
}

export const DeliveryStateContainer = styled.div<DeliveryStateValue>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 1.25rem;

  background: ${(props) => (props.isOrder ? StateColorCode.배달 : StateColorCode.회수)};
`;

export const DeliveryStateImg = styled.img`
  width: 2rem;
`;
