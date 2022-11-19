import {
  StaffOrderInfoDesc,
  StaffOrderInfoSectionContainer,
  StaffOrderInfoTitle,
  StaffOrderInfoWrapper,
} from '../style';

import { KRWFormat } from '@/utils/format';

interface PaymentInfoData {
  price: number;
  couponPrice: number;
  couponName: string;
}

interface PaymentInfoValue {
  data: PaymentInfoData;
}

const PaymentInfoSection = ({ data }: PaymentInfoValue) => {
  return (
    <StaffOrderInfoSectionContainer>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>주문 금액</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{KRWFormat(data.price - 100000 + data.couponPrice)}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>보증금</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{KRWFormat(100000)}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>쿠폰</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{data.couponName}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>쿠폰 금액</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>(-) {KRWFormat(data.couponPrice)}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>합계</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{KRWFormat(data.price)}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
    </StaffOrderInfoSectionContainer>
  );
};

export default PaymentInfoSection;
