import {
  OrderInfoText,
  OrderInputContainer,
  OrderInputTitle,
  OrderPaymentContainer,
  OrderPaymentMoney,
  OrderPaymentTitle,
  OrderPaymentWrapper,
  OrderSection,
  OrderSectionTitle,
  OrderSectionTitleImg,
} from '../style';

import CouponIcon from '@/assets/icons/icon-coupon.svg';

interface PaymentValue {
  price: number;
  couponName: string;
  couponPrice: number;
}

const OrderPaymentSection = ({ price, couponName, couponPrice }: PaymentValue) => {
  return (
    <OrderSection>
      <OrderSectionTitle>
        <OrderSectionTitleImg src={CouponIcon} />
        결제 정보
      </OrderSectionTitle>
      <OrderInputContainer>
        <OrderInputTitle>할인 쿠폰</OrderInputTitle>
        <OrderInfoText>{couponName !== '' ? couponName : '쿠폰 선택 안함'}</OrderInfoText>
      </OrderInputContainer>
      <OrderInputContainer>
        <OrderInputTitle>결제 금액</OrderInputTitle>
        <OrderPaymentContainer>
          <OrderPaymentWrapper>
            <OrderPaymentTitle>주문 금액</OrderPaymentTitle>
            <OrderPaymentMoney>{(price - 100000).toLocaleString()}</OrderPaymentMoney>
          </OrderPaymentWrapper>
          <OrderPaymentWrapper>
            <OrderPaymentTitle>보증 금액</OrderPaymentTitle>
            <OrderPaymentMoney>{(100000).toLocaleString()}</OrderPaymentMoney>
          </OrderPaymentWrapper>
          <OrderPaymentWrapper>
            <OrderPaymentTitle>할인</OrderPaymentTitle>
            <OrderPaymentMoney>(-){couponPrice.toLocaleString()}</OrderPaymentMoney>
          </OrderPaymentWrapper>
        </OrderPaymentContainer>
        <OrderPaymentWrapper>
          <OrderPaymentTitle>합계</OrderPaymentTitle>
          <OrderPaymentMoney>{price.toLocaleString()}</OrderPaymentMoney>
        </OrderPaymentWrapper>
      </OrderInputContainer>
    </OrderSection>
  );
};

export default OrderPaymentSection;
