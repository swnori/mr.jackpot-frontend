import { BasketBtn, FooterBtnContainer, FooterContainer, FooterIcon } from '../../style';

import useOrder from '@/hooks/useOrder';
import { useLink } from '@/hooks/useLink';

import { KRWFormat } from '@/utils/format';

import BasketIcon from '@/assets/icons/icon-basket.svg';

const motionVariable = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const ClientDinnerFooter = () => {
  const { dinnerOrderPrice, addDinnerToCart } = useOrder();
  const link = useLink();
  const addCartHandler = () => {
    addDinnerToCart();
    link.back();
  };
  return (
    <FooterContainer
      variants={motionVariable}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{ duration: 0.3 }}
    >
      <FooterBtnContainer>{KRWFormat(dinnerOrderPrice() ?? 0)}</FooterBtnContainer>
      <BasketBtn onClick={() => addCartHandler()}>
        <FooterIcon src={BasketIcon} />
        장바구니에 담기
      </BasketBtn>
    </FooterContainer>
  );
};

export default ClientDinnerFooter;
