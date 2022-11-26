import { atom } from 'recoil';

import { Stock } from '@/types/stock';

export const stockState = atom<Stock>({
  key: 'stockState',
  default: {
    itemList: [],
    newItemName: '',
    newUnitName: '',
    newAmount: null,
    updateMode: 'out',
  },
});
