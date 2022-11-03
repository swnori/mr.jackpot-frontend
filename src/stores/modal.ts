import { atom } from 'recoil';

import { ModalProps } from '@/types/modal';

export const modalState = atom<ModalProps | null>({
  key: 'modalState',
  default: null,
});
