import { useRecoilState, useRecoilValue } from 'recoil';

import {
  CartContainer,
  CartInput,
  CartInputContainer,
  CartInputTitle,
  CartPaymentContainer,
  CartPaymentMoney,
  CartPaymentTitle,
  CartPaymentWrapper,
  CartSection,
  CartSectionDesc,
  CartSectionTitle,
  CartSectionTitleImg,
  CartSelect,
  CartTextArea,
  DinnerListContainer,
} from './style';

import MobileItem from '@/components/MobileItem';
import Header from '@/components/Header';

import useOrder from '@/hooks/useOrder';

import { KRWFormat } from '@/utils/format';

import { orderState } from '@/stores/order';
import { menuInfoState } from '@/stores/menu';
import { dinnerInfoState } from '@/stores/dinner';

import { DinnerOrder, MenuOrder } from '@/types/order';

import ReceiptIcon from '@/assets/icons/icon-receipt.svg';
import HomeIcon from '@/assets/icons/icon-home.svg';
import CouponIcon from '@/assets/icons/icon-coupon.svg';

const ClientCartPage = () => {
  const [order, setOrder] = useRecoilState(orderState);
  const dinnerInfo = useRecoilValue(dinnerInfoState);
  const menuInfo = useRecoilValue(menuInfoState);
  const { orderPrice, dinnerOrderPrice } = useOrder();
  const deleteDinnerHandler = (idx: number) => {
    setOrder((prev) => {
      const nextDinnerList = [...prev.dinnerList.slice(0, idx), ...prev.dinnerList.slice(idx + 1)];
      return { ...prev, dinnerList: nextDinnerList };
    });
  };
  const menuListStr = (list: MenuOrder[]) =>
    list.reduce((pre, menu) => {
      const { name } = menuInfo[menu.menuId];
      if (pre === '') {
        return name;
      }
      return `${pre}, ${name}`;
    }, '');
  const dinnerDetail = (dinner: DinnerOrder) => {
    const mainDishes = menuListStr(dinner.mainDish);
    const sides = menuListStr(dinner.side);
    const drinks = menuListStr(dinner.drink);

    return (
      mainDishes +
      (mainDishes !== '' && sides !== '' ? `, ${sides}` : sides) +
      (mainDishes !== '' && sides !== '' && drinks !== '' ? `, ${drinks}` : drinks)
    );
  };
  return (
    <CartContainer>
      <Header type='back' title='장바구니' />
      <CartSection>
        <CartSectionTitle>
          <CartSectionTitleImg src={ReceiptIcon} />
          주문 목록
        </CartSectionTitle>
        <CartSectionDesc>
          각 주문 정보를 터치하시면 <br />
          상세 주문 내용을 확인하실 수 있습니다.
        </CartSectionDesc>
        <DinnerListContainer>
          {order.dinnerList.map((dinner, idx) => {
            const info = dinnerInfo[dinner.type];

            return (
              <MobileItem
                type='button'
                title={info.name}
                subTitle={dinnerDetail(dinner)}
                desc={KRWFormat(dinnerOrderPrice(idx))}
                onDelete={() => deleteDinnerHandler(idx)}
              />
            );
          })}
        </DinnerListContainer>
      </CartSection>
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
          <CartInput placeholder='예약 시간 입력' />
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

      <CartSection>
        <CartSectionTitle>
          <CartSectionTitleImg src={CouponIcon} />
          결제 정보
        </CartSectionTitle>
        <CartInputContainer>
          <CartInputTitle>할인 쿠폰</CartInputTitle>
          <CartSelect>
            <option value='' disabled selected>
              할인 쿠폰 선택
            </option>
          </CartSelect>
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
    </CartContainer>
  );
};

export default ClientCartPage;
