import {
  OrderInputContainer,
  OrderInfoText,
  OrderInputTitle,
  OrderSection,
  OrderSectionTitle,
  OrderSectionTitleImg,
  OrderTextArea,
} from '../style';

import { digitFormat } from '@/utils/format';

import { OrderInfo } from '@/types/order';

import HomeIcon from '@/assets/icons/icon-home.svg';

interface OrderInfoValue {
  orderInfo: OrderInfo;
}

const OrderInfoSection = ({ orderInfo }: OrderInfoValue) => {
  const reserveTimeText = (date: Date) => {
    const [year, month, day, hour, minute] = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
    ];
    return `${year}.${digitFormat(month, 2)}.${digitFormat(day, 2)} ${digitFormat(
      hour,
      2,
    )}:${digitFormat(minute, 2)}:00`;
  };
  return (
    <OrderSection>
      <OrderSectionTitle>
        <OrderSectionTitleImg src={HomeIcon} />
        배달 정보
      </OrderSectionTitle>
      <OrderInputContainer>
        <OrderInputTitle>예약자명</OrderInputTitle>
        <OrderInfoText>{orderInfo.reserveName}</OrderInfoText>
      </OrderInputContainer>
      <OrderInputContainer>
        <OrderInputTitle>예약 시간</OrderInputTitle>
        <OrderInfoText>{reserveTimeText(orderInfo.reserveDate)}</OrderInfoText>
      </OrderInputContainer>
      <OrderInputContainer>
        <OrderInputTitle>주소</OrderInputTitle>
        <OrderInfoText>{orderInfo.address}</OrderInfoText>
      </OrderInputContainer>
      <OrderInputContainer>
        <OrderInputTitle>전화번호</OrderInputTitle>
        <OrderInfoText>{orderInfo.contact}</OrderInfoText>
      </OrderInputContainer>
      <OrderInputContainer>
        <OrderInputTitle>요청사항</OrderInputTitle>
        <OrderTextArea>{orderInfo.requestDetail}</OrderTextArea>
      </OrderInputContainer>
    </OrderSection>
  );
};

export default OrderInfoSection;
