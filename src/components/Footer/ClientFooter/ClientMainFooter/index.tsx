import { BasketBtn, FooterBtn, FooterBtnContainer, FooterContainer, FooterIcon } from '../../style';

import UserIcon from '@/assets/icons/icon-user.svg';
import ReceiptIcon from '@/assets/icons/icon-receipt.svg';
import MicIcon from '@/assets/icons/icon-mic.svg';
import BasketIcon from '@/assets/icons/icon-basket.svg';

const motionVariable = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const ClientMainFooter = () => {
  return (
    <FooterContainer
      variants={motionVariable}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{ duration: 0.3 }}
    >
      <FooterBtnContainer>
        <FooterBtn>
          <FooterIcon src={MicIcon} />
        </FooterBtn>
        <FooterBtn>
          <FooterIcon src={ReceiptIcon} />
        </FooterBtn>
        <FooterBtn>
          <FooterIcon src={UserIcon} />
        </FooterBtn>
      </FooterBtnContainer>
      <BasketBtn>
        <FooterIcon src={BasketIcon} />
        장바구니
      </BasketBtn>
    </FooterContainer>
  );
};

export default ClientMainFooter;
