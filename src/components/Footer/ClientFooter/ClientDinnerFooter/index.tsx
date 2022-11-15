import { useParams } from 'react-router-dom';

import { BasketBtn, FooterBtnContainer, FooterContainer, FooterIcon } from '../../style';

import useOrder from '@/hooks/useOrder';
import { useLink } from '@/hooks/useLink';

import { KRWFormat } from '@/utils/format';

import BasketIcon from '@/assets/icons/icon-basket.svg';

const BtnTextMap: { [key: string]: string } =
  {
    create: '장바구니에 담기',
    update: '주문 수정하기',
  } ?? '';

const motionVariable = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const ClientDinnerFooter = () => {
  const { dinnerOrderPrice, addDinnerToCart, updateDinnerToCart } = useOrder();
  const { mode, id } = useParams();
  const link = useLink();
  const CartBtnHandler = () => {
    if (mode === 'create') {
      addDinnerToCart();
      link.back();
    }
    if (mode === 'update') {
      updateDinnerToCart(Number(id));
      link.back();
    }
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
      <BasketBtn onClick={() => CartBtnHandler()}>
        <FooterIcon src={BasketIcon} />
        {BtnTextMap[mode ?? '']}
      </BasketBtn>
    </FooterContainer>
  );
};

export default ClientDinnerFooter;
