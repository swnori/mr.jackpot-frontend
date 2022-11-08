import { atom } from 'recoil';

import { DinnerOrder } from '@/types/order';

export const dinnerOrderState = atom<DinnerOrder>({
  key: 'dinnerOrderState',
  default: {
    id: 0,
    mainDish: [],
    side: [],
    drink: [],
    style: 0,
  },
});
