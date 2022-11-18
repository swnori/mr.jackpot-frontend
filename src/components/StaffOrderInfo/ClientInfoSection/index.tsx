import {
  ClientInfoDesc,
  ClientInfoSectionContainer,
  ClientInfoTitle,
  ClientInfoWrapper,
} from './style';

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
    <ClientInfoSectionContainer>
      <ClientInfoWrapper>
        <ClientInfoTitle>주문 ID</ClientInfoTitle>
        <ClientInfoDesc>
          O-{data.orderId} <OrderState stateId={data.stateId} />{' '}
        </ClientInfoDesc>
      </ClientInfoWrapper>
      <ClientInfoWrapper>
        <ClientInfoTitle>회원 구분</ClientInfoTitle>
        <ClientInfoDesc>{data.isMember ? '회원' : '비회원'}</ClientInfoDesc>
      </ClientInfoWrapper>
      <ClientInfoWrapper>
        <ClientInfoTitle>주문자명</ClientInfoTitle>
        <ClientInfoDesc>{data.reserveName}</ClientInfoDesc>
      </ClientInfoWrapper>
      <ClientInfoWrapper>
        <ClientInfoTitle>전화번호</ClientInfoTitle>
        <ClientInfoDesc>{data.contact}</ClientInfoDesc>
      </ClientInfoWrapper>
      <ClientInfoWrapper>
        <ClientInfoTitle>예약일시</ClientInfoTitle>
        <ClientInfoDesc>{dateFormat(data.reserveDate)}</ClientInfoDesc>
      </ClientInfoWrapper>
      <ClientInfoWrapper>
        <ClientInfoTitle>주문일시</ClientInfoTitle>
        <ClientInfoDesc>{dateFormat(data.orderDate)}</ClientInfoDesc>
      </ClientInfoWrapper>
      <ClientInfoWrapper>
        <ClientInfoTitle>주소</ClientInfoTitle>
        <ClientInfoDesc>{data.address}</ClientInfoDesc>
      </ClientInfoWrapper>
      <ClientInfoWrapper>
        <ClientInfoTitle>요청사항</ClientInfoTitle>
        <ClientInfoDesc>{data.requestDetail}</ClientInfoDesc>
      </ClientInfoWrapper>
    </ClientInfoSectionContainer>
  );
};

export default ClientInfoSection;
