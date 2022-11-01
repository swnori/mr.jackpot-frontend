import { BasketBtn, FooterBtn, FooterBtnContainer, FooterContainer, FooterIcon } from '../../style';

import UserIcon from '@/assets/icons/icon-user.svg';
import ReceiptIcon from '@/assets/icons/icon-receipt.svg';
import MicIcon from '@/assets/icons/icon-mic.svg';
import BasketIcon from '@/assets/icons/icon-basket.svg';

const ClientMainFooter = () => {
  return (
    <FooterContainer>
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
