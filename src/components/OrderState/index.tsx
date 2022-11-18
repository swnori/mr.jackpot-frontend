import { useRecoilValue } from 'recoil';

import { OrderStateContainer } from './style';

import { KeyOf } from '@/utils/type';

import { stateState } from '@/stores/state';

import { StateColorCode } from '@/constants/color';

interface OrderStateValue {
  stateId: number;
}

const OrderState = ({ stateId }: OrderStateValue) => {
  const orderState = useRecoilValue(stateState);
  return orderState[stateId]?.name ? (
    <OrderStateContainer stateName={orderState[stateId].name as KeyOf<typeof StateColorCode>}>
      {orderState[stateId].name}
    </OrderStateContainer>
  ) : null;
};

export default OrderState;
