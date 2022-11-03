import { useRecoilValue } from 'recoil';

import ModalFrame from './ModalFrame';

import { modalState } from '@/stores/modal';

const ModalRoot = () => {
  const modalProps = useRecoilValue(modalState);
  if (!modalProps) {
    return null;
  }
  return <ModalFrame {...modalProps} />;
};

export default ModalRoot;
