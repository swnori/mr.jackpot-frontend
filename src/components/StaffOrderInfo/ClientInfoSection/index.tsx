import {
  StaffOrderInfoDesc,
  StaffOrderInfoSectionContainer,
  StaffOrderInfoTitle,
  StaffOrderInfoWrapper,
} from '../style';

import OrderState from '@/components/OrderState';

import { dateFormat } from '@/utils/format';

import { OrderInfo } from '@/types/order';

interface ClientInfoData extends OrderInfo {
  orderId: number;
  isMember: boolean;
  orderDate: Date;
  stateId: number;
}

interface ClientInfoValue {
  data: ClientInfoData;
}

const ClientInfoSection = ({ data }: ClientInfoValue) => {
  return (
    <StaffOrderInfoSectionContainer>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>주문 ID</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>
          O-{data.orderId} <OrderState stateId={data.stateId} />{' '}
        </StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>회원 구분</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{data.isMember ? '회원' : '비회원'}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>주문자명</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{data.reserveName}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>전화번호</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{data.contact}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>예약일시</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{dateFormat(data.reserveDate)}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>주문일시</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{dateFormat(data.orderDate)}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>주소</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{data.address}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>요청사항</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{data.requestDetail}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
    </StaffOrderInfoSectionContainer>
  );
};

export default ClientInfoSection;
