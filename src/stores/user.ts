import { atom } from 'recoil';

import { Client } from '@/types/user';

export const clientState = atom<Client>({
  key: 'clientState',
  default: {
    token: '',
    name: '',
    contact: '',
    address: '',
  },
});