import { selector } from 'recoil';

import { fetchOrderBoard } from '@/apis/common';

export const boardState = selector({
  key: 'boardState',
  get: async () => {
    const res = await fetchOrderBoard();
    const data = await res.json();
    return data;
  },
});
