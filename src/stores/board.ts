import { selector } from 'recoil';

import fetchApi from '@/utils/fetch';

export const boardState = selector({
  key: 'boardState',
  get: async () => {
    const res = await fetchApi.get('/customer/orderinfo/orderboard');
    const data = await res.json();
    return data;
  },
});
