import {
  CartInputBtn,
  CartInputBtnImg,
  CartInputContainer,
  CartInputTitle,
  CartPaymentContainer,
  CartPaymentMoney,
  CartPaymentTitle,
  CartPaymentWrapper,
  CartSection,
  CartSectionTitle,
  CartSectionTitleImg,
} from '../style';

import useOrder from '@/hooks/useOrder';
import { useLink } from '@/hooks/useLink';

import CouponIcon from '@/assets/icons/icon-coupon.svg';
import ArrowRightIcon from '@/assets/icons/icon-arrow-right.svg';

const PaymentSection = () => {
  const { orderPrice } = useOrder();

  const link = useLink();

  return (
    <CartSection>
      <CartSectionTitle>
        <CartSectionTitleImg src={CouponIcon} />
        결제 정보
      </CartSectionTitle>
      <CartInputContainer>
        <CartInputTitle>할인 쿠폰</CartInputTitle>
        <CartInputBtn onClick={() => link.to('/client/coupon')}>
          할인 쿠폰 선택
          <CartInputBtnImg src={ArrowRightIcon} />
        </CartInputBtn>
      </CartInputContainer>
      <CartInputContainer>
        <CartInputTitle>결제 금액</CartInputTitle>
        <CartPaymentContainer>
          <CartPaymentWrapper>
            <CartPaymentTitle>주문 금액</CartPaymentTitle>
            <CartPaymentMoney>{orderPrice().toLocaleString()}</CartPaymentMoney>
          </CartPaymentWrapper>
          <CartPaymentWrapper>
            <CartPaymentTitle>보증 금액</CartPaymentTitle>
            <CartPaymentMoney>{(100000).toLocaleString()}</CartPaymentMoney>
          </CartPaymentWrapper>
          <CartPaymentWrapper>
            <CartPaymentTitle>할인</CartPaymentTitle>
            <CartPaymentMoney>(-){0}</CartPaymentMoney>
          </CartPaymentWrapper>
        </CartPaymentContainer>
        <CartPaymentWrapper>
          <CartPaymentTitle>합계</CartPaymentTitle>
          <CartPaymentMoney>{(orderPrice() + 100000).toLocaleString()}</CartPaymentMoney>
        </CartPaymentWrapper>
      </CartInputContainer>
    </CartSection>
  );
};

export default PaymentSection;
