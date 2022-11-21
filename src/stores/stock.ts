import { atom } from 'recoil';

import { Stock } from '@/types/stock';

export const stockState = atom<Stock>({
  key: 'stockState',
  default: {
    itemList: [
      { id: 7, name: '하우스 레드 와인', unit: '1 병', amount: 30 },
      { id: 6, name: '달걀', unit: '1 개', amount: 90 },
      { id: 5, name: '토마토', unit: '1 개', amount: 39 },
      { id: 4, name: '파프리카', unit: '1 개', amount: 37 },
      { id: 3, name: '양송이버섯', unit: '1 개', amount: 68 },
      { id: 2, name: '아스파라거스', unit: '1 개', amount: 57 },
      { id: 1, name: '스테이크용 소고기', unit: '1 덩이(200g)', amount: 50 },
    ],
    newItemName: '',
    newUnitName: '',
    newAmount: null,
    updateMode: 'out',
  },
});
