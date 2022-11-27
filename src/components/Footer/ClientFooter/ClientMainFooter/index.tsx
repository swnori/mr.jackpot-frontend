import { useRecoilValue } from 'recoil';

import {
  BasketBtn,
  BasketCount,
  FooterBtn,
  FooterBtnContainer,
  FooterContainer,
  FooterIcon,
} from '../../style';

import VoiceRec from '@/components/VoiceRec';

import useOrder from '@/hooks/useOrder';
import useModal from '@/hooks/useModal';
import { useLink } from '@/hooks/useLink';

import { clientState } from '@/stores/user';

import UserIcon from '@/assets/icons/icon-user.svg';
import ReceiptIcon from '@/assets/icons/icon-receipt.svg';
import MicIcon from '@/assets/icons/icon-mic.svg';
import BasketIcon from '@/assets/icons/icon-basket.svg';

const motionVariable = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const ClientMainFooter = () => {
  const { showModal } = useModal();
  const me = useRecoilValue(clientState);
  const link = useLink();
  const openVoiceRecHandler = () => {
    showModal({
      type: 'none',
      children: <VoiceRec />,
    });
  };
  const goOrderHistoryPageHandler = () => {
    if (me.isMember) {
      link.to('/client/order');
    } else {
      link.to('/client/order/0');
    }
  };
  const goMyPageHandler = () => {
    link.to('/client/mypage');
  };
  const { cartLength } = useOrder();
  return (
    <FooterContainer
      variants={motionVariable}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{ duration: 0.3 }}
    >
      <FooterBtnContainer>
        <FooterBtn onClick={() => openVoiceRecHandler()}>
          <FooterIcon src={MicIcon} />
        </FooterBtn>
        <FooterBtn onClick={() => goOrderHistoryPageHandler()}>
          <FooterIcon src={ReceiptIcon} />
        </FooterBtn>
        <FooterBtn onClick={() => goMyPageHandler()}>
          <FooterIcon src={UserIcon} />
        </FooterBtn>
      </FooterBtnContainer>
      <BasketBtn onClick={() => link.to('/client/cart')}>
        <FooterIcon src={BasketIcon} />
        장바구니
        {cartLength > 0 ? <BasketCount>{cartLength}</BasketCount> : null}
      </BasketBtn>
    </FooterContainer>
  );
};

export default ClientMainFooter;
