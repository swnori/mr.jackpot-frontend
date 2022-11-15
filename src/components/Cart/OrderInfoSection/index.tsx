import { useState } from 'react';

import {
  CartInput,
  CartInputContainer,
  CartInputTitle,
  CartSection,
  CartSectionTitle,
  CartSectionTitleImg,
  CartTextArea,
} from '../style';

import DatePicker from '@/components/DatePicker';

import HomeIcon from '@/assets/icons/icon-home.svg';

const OrderInfoSection = () => {
  const [date, setDate] = useState(new Date());
  return (
    <CartSection>
      <CartSectionTitle>
        <CartSectionTitleImg src={HomeIcon} />
        배달 정보 입력
      </CartSectionTitle>
      <CartInputContainer>
        <CartInputTitle>예약자명</CartInputTitle>
        <CartInput placeholder='예약자명 입력' />
      </CartInputContainer>
      <CartInputContainer>
        <CartInputTitle>예약 시간</CartInputTitle>
        <DatePicker date={date} setDate={setDate} customInput={<CartInput />} />
      </CartInputContainer>
      <CartInputContainer>
        <CartInputTitle>주소</CartInputTitle>
        <CartInput placeholder='배달 받을 주소 입력' />
      </CartInputContainer>
      <CartInputContainer>
        <CartInputTitle>전화번호</CartInputTitle>
        <CartInput placeholder='전화번호 입력(- 빼고 입력)' />
      </CartInputContainer>
      <CartInputContainer>
        <CartInputTitle>요청사항</CartInputTitle>
        <CartTextArea placeholder='요청사항 입력(ex. 문 앞에 놔주세요)' />
      </CartInputContainer>
    </CartSection>
  );
};

export default OrderInfoSection;
