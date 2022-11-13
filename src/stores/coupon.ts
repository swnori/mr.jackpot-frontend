import { atom } from 'recoil';

import { Coupon } from '@/types/coupon';

export const couponState = atom<Coupon[]>({
  key: 'couponState',
  default: [
    {
      id: 0,
      price: 0,
      name: '쿠폰 선택 안함',
      desc: '쿠폰을 적용하지 않습니다.',
      startDate: null,
      endDate: null,
    },
    {
      id: 256,
      price: 10000,
      name: '개업 쿠폰',
      desc: '앞으로 열심히 하겠습니다.',
      startDate: new Date('2022-11-14'),
      endDate: new Date('2022-12-14'),
    },
  ],
});

export const selectedCouponState = atom<number>({
  key: 'selectedCouponState',
  default: 0,
});
