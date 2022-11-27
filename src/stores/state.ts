import { selector } from 'recoil';

import { fetchState } from '@/apis/common';

export const stateState = selector({
  key: 'stateState',
  get: async () => {
    const res = await fetchState();
    const data = await res.json();
    const dict = data.reduce((pre: any, cur: any) => {
      const { id, state } = cur;
      const next = { ...pre };
      next[id] = { id, name: state };
      return next;
    }, {} as { [key: number]: { id: number; name: string } });

    return dict;
  },
});
