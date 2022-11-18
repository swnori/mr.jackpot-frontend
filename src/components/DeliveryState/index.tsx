import { DeliveryStateContainer, DeliveryStateImg } from './style';

import ReturnIcon from '@/assets/icons/icon-truck-return.svg';
import DeliveryIcon from '@/assets/icons/icon-truck-out.svg';

interface DeliveryStateValue {
  isOrder: boolean;
}

const DeliveryState = ({ isOrder }: DeliveryStateValue) => {
  return (
    <DeliveryStateContainer isOrder={isOrder}>
      <DeliveryStateImg src={isOrder ? DeliveryIcon : ReturnIcon} />
    </DeliveryStateContainer>
  );
};

export default DeliveryState;
