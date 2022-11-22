import { atom } from 'recoil';

import { Setting } from '@/types/setting';

export const settingState = atom<Setting>({
  key: 'settingState',
  default: {
    itemList: [],
    newName: '',
    newType: '요리',
    newPart: [false, false, false, false, false],
    updateUserId: -1,
  },
});
