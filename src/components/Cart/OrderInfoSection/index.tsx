/* eslint-disable react-hooks/exhaustive-deps */
import { useRecoilState, useRecoilValue } from 'recoil';
import React, { useEffect } from 'react';

import {
  CartInput,
  CartInputContainer,
  CartInputTitle,
  CartSection,
  CartSectionTitle,
  CartSectionTitleImg,
  CartTextArea,
} from '../style';

import MobileDatePicker from '@/components/MobileDatePicker';

import { clientState } from '@/stores/user';
import { orderState } from '@/stores/order';

import HomeIcon from '@/assets/icons/icon-home.svg';

const OrderInfoSection = () => {
  const [order, setOrder] = useRecoilState(orderState);
  const me = useRecoilValue(clientState);

  useEffect(() => {
    if (order.info.reserveName === '') {
      setOrder((prev) => ({
        ...prev,
        info: {
          reserveName: me.name,
          reserveDate: new Date(),
          contact: me.contact,
          address: me.address,
          requestDetail: '',
        },
      }));
    }
  }, [setOrder, me]);

  const inputReserveNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder((prev) => ({ ...prev, info: { ...prev.info, reserveName: e.currentTarget.value } }));
  };
  const setDateHandler = (date: Date) => {
    setOrder((prev) => ({ ...prev, info: { ...prev.info, reserveDate: date } }));
  };
  const inputReserveAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder((prev) => ({ ...prev, info: { ...prev.info, address: e.currentTarget.value } }));
  };
  const inputReserveContactHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder((prev) => ({ ...prev, info: { ...prev.info, contact: e.currentTarget.value } }));
  };
  const inputRequestDetailHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOrder((prev) => ({ ...prev, info: { ...prev.info, requestDetail: e.currentTarget.value } }));
  };

  return (
    <CartSection>
      <CartSectionTitle>
        <CartSectionTitleImg src={HomeIcon} />
        배달 정보 입력
      </CartSectionTitle>
      <CartInputContainer>
        <CartInputTitle>예약자명</CartInputTitle>
        <CartInput
          value={order.info.reserveName}
          onChange={inputReserveNameHandler}
          placeholder='예약자명 입력'
        />
      </CartInputContainer>
      <CartInputContainer>
        <CartInputTitle>예약 시간</CartInputTitle>
        <MobileDatePicker
          date={order.info.reserveDate}
          setDate={setDateHandler}
          customInput={<CartInput />}
        />
      </CartInputContainer>
      <CartInputContainer>
        <CartInputTitle>주소</CartInputTitle>
        <CartInput
          value={order.info.address}
          onChange={inputReserveAddressHandler}
          placeholder='배달 받을 주소 입력'
        />
      </CartInputContainer>
      <CartInputContainer>
        <CartInputTitle>전화번호</CartInputTitle>
        <CartInput
          value={order.info.contact}
          onChange={inputReserveContactHandler}
          placeholder='전화번호 입력(- 빼고 입력)'
        />
      </CartInputContainer>
      <CartInputContainer>
        <CartInputTitle>요청사항</CartInputTitle>
        <CartTextArea
          value={order.info.requestDetail}
          onChange={inputRequestDetailHandler}
          placeholder='요청사항 입력(ex. 문 앞에 놔주세요)'
        />
      </CartInputContainer>
    </CartSection>
  );
};

export default OrderInfoSection;
