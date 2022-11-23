import { atom } from 'recoil';

import { CEOCoupon, Coupon } from '@/types/coupon';

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

export const CEOCouponState = atom<CEOCoupon>({
  key: 'CEOCouponState',
  default: {
    itemList: [
      {
        id: 4,
        name: '개업 1주년 쿠폰',
        desc: '개업 1주년은 아닌데 일단 발행해봤습니다.',
        price: 10000,
        code: 'ASGJAKGJAWOWJ21AWGJ2',
        startDate: null,
        endDate: new Date('2024-06-18'),
      },
      {
        id: 3,
        name: '여름맞이 쿠폰',
        desc: '앞으로 열심히 하겠습니다',
        price: 10000,
        code: 'AWQP3TREAIJ51FKJADGL',
        startDate: null,
        endDate: new Date('2022-09-01'),
      },
      {
        id: 2,
        name: '발렌타인 쿠폰',
        desc: '앞으로 열심히 하겠습니다',
        price: 10000,
        code: 'HQJ234ASGJFIE12ASDGK',
        startDate: null,
        endDate: new Date('2023-02-14'),
      },
      {
        id: 1,
        name: '개업 쿠폰',
        desc: '앞으로 열심히 하겠습니다',
        price: 500,
        code: 'GJFKDOEIWUPGID18EUS0',
        startDate: null,
        endDate: new Date('2023-06-18'),
      },
    ],
    newName: '',
    newDesc: '',
    newPrice: null,
    newDate: new Date(),
  },
});
