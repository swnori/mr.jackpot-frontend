import { atom, selector } from 'recoil';

import { Client } from '@/types/user';

import { fetchGetMyInfo } from '@/apis/client';

const clientAtom = atom<Client | null>({
  key: 'clientAtom',
  default: null,
});

export const clientState = selector<Client>({
  key: 'clientState',
  get: async ({ get }) => {
    const atomData = get(clientAtom);
    if (atomData !== null) {
      return atomData;
    }
    const res = await fetchGetMyInfo();
    if (res.status === 200) {
      const data = await res.json();
      return { isMember: true, name: data.name, contact: data.phone, address: data.address };
    }
    return { isMember: false, name: '', contact: '', address: '' };
  },
  set: ({ set }, newValue) => {
    set(clientAtom, newValue);
  },
});
