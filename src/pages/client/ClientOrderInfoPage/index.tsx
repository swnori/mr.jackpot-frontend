import { OrderInfoBtn, OrderInfoContainer } from './style';

import OrderStateSection from '@/components/OrderInfo/OrderStateSection';
import OrderPaymentSection from '@/components/OrderInfo/OrderPaymentSection';
import OrderInfoSection from '@/components/OrderInfo/OrderInfoSection';
import OrderDinnerListSection from '@/components/OrderInfo/OrderDinnerListSection';
import Header from '@/components/Header';

import { DinnerOrder } from '@/types/order';

const dummyOrderInfo = {
  id: 2,
  state: 1,
  info: {
    reserveName: '김고객',
    reserveDate: new Date('2022-11-15T20:00:00'),
    address: '서울시 동대문구 서울시립대로 163',
    contact: '01012345678',
    requestDetail: '문 앞에 두고 가주세요',
  },
  couponName: '1주년 감사 쿠폰',
  couponPrice: 0,
  price: 307000,
  dinnerList: [
    {
      id: 24,
      type: 0,
      mainDish: [{ menuId: 0, option: [41, 46], count: 1, isDefault: false }],
      side: [{ menuId: 9, option: [null, null], count: 4, isDefault: false }],
      drink: [{ menuId: 5, option: [51, null], count: 1, isDefault: false }],
      style: 1,
    },
    {
      id: 25,
      type: 3,
      mainDish: [
        { menuId: 0, option: [44, 47], count: 1, isDefault: false },
        { menuId: 0, option: [41, 46], count: 1, isDefault: false },
      ],
      side: [{ menuId: 9, option: [null, null], count: 4, isDefault: false }],
      drink: [{ menuId: 1, option: [55, null], count: 1, isDefault: false }],
      style: 1,
    },
  ],
};

const ClientOrderInfoPage = () => {
  return (
    <OrderInfoContainer>
      <Header type='back' title='주문 정보' />
      <OrderStateSection stateName='도착' reserveDate={dummyOrderInfo.info.reserveDate} />
      <OrderDinnerListSection dinnerList={dummyOrderInfo.dinnerList as DinnerOrder[]} />
      <OrderInfoSection orderInfo={dummyOrderInfo.info} />
      <OrderPaymentSection
        price={dummyOrderInfo.price}
        couponName={dummyOrderInfo.couponName}
        couponPrice={dummyOrderInfo.couponPrice}
      />
      <OrderInfoBtn>주문 취소하기</OrderInfoBtn>
    </OrderInfoContainer>
  );
};

export default ClientOrderInfoPage;
