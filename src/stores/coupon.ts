import { atom, DefaultValue, selector } from 'recoil';

import { CEOCoupon, CEOIssueCoupon, ClientGainCoupon, Coupon } from '@/types/coupon';

import { fetchGetMyCouponList } from '@/apis/client';
import { fetchGetCouponList } from '@/apis/ceo';

export const clientInputCouponState = atom<ClientGainCoupon>({
  key: 'clientInputCouponState',
  default: { code: '' },
});

const clientCouponAtom = atom<Coupon[]>({
  key: 'clientCouponAtom',
  default: [
    {
      id: 0,
      price: 0,
      name: '쿠폰 선택 안함',
      desc: '쿠폰을 적용하지 않습니다.',
      startDate: null,
      endDate: null,
    },
  ],
});

export const clientCouponState = selector<Coupon[]>({
  key: 'clientCouponState',
  get: async ({ get }) => {
    const atomData = get(clientCouponAtom);
    if (atomData.length > 1) {
      return atomData;
    }
    const res = await fetchGetMyCouponList();
    if (res.status === 200) {
      const data = await res.json();
      return [
        ...atomData,
        ...data.map((item: any) => ({
          id: item.id,
          code: item.code,
          name: item.title,
          price: item.amount,
          desc: item.message,
          startDate: new Date(item.createdAt),
          endDate: new Date(item.expiresAt),
        })),
      ];
    }
    return [];
  },
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(clientCouponAtom);
    }
    set(clientCouponAtom, newValue);
  },
});

export const selectedCouponState = atom<number>({
  key: 'selectedCouponState',
  default: 0,
});

export const CEOIssueCouponState = atom<CEOIssueCoupon>({
  key: 'CEOIssueCouponState',
  default: { newName: '', newDesc: '', newPrice: null, newDate: new Date() },
});

const CEOCouponAtom = atom<CEOCoupon | null>({
  key: 'CEOAtom',
  default: null,
});

export const CEOCouponState = selector<CEOCoupon>({
  key: 'CEOCouponState',
  get: async ({ get }) => {
    const atomData = get(CEOCouponAtom);
    if (atomData !== null) {
      return atomData;
    }
    const res = await fetchGetCouponList();
    if (res.status === 200) {
      const data = await res.json();
      return {
        itemList: data.map((item: any) => ({
          id: item.id,
          code: item.code,
          name: item.title,
          price: item.amount,
          desc: item.message,
          startDate: new Date(item.createdAt),
          endDate: new Date(item.expiresAt),
        })),
      };
    }
    return { itemList: [] };
  },
  set: ({ set }, newValue) => {
    set(CEOCouponAtom, newValue);
  },
});
