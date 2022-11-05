import { BasketBtn, FooterBtnContainer, FooterContainer, FooterIcon } from '../../style';

import BasketIcon from '@/assets/icons/icon-basket.svg';

const motionVariable = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const ClientDinnerFooter = () => {
  return (
    <FooterContainer
      variants={motionVariable}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{ duration: 0.3 }}
    >
      <FooterBtnContainer>KRW 1,234,567</FooterBtnContainer>
      <BasketBtn>
        <FooterIcon src={BasketIcon} />
        장바구니에 담기
      </BasketBtn>
    </FooterContainer>
  );
};

export default ClientDinnerFooter;
