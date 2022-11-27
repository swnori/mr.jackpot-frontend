import { atom } from 'recoil';

import { Setting } from '@/types/setting';

export const settingState = atom<Setting>({
  key: 'settingState',
  default: {
    itemList: [],
    newName: '',
    newType: 1,
    updateUserId: -1,
  },
});
