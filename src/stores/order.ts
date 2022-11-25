import { atom } from 'recoil';

import { DinnerOrder, Order } from '@/types/order';

export const dinnerOrderState = atom<DinnerOrder>({
  key: 'dinnerOrderState',
  default: {
    id: 0,
    type: 1,
    mainDish: [],
    side: [],
    drink: [],
    style: 1,
  },
});

export const orderState = atom<Order>({
  key: 'orderState',
  default: {
    info: { reserveName: '', reserveDate: new Date(), address: '', contact: '', requestDetail: '' },
    couponId: 0,
    price: 0,
    dinnerList: [],
  },
});
