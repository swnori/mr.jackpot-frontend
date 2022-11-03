import { useRecoilState } from 'recoil';

import { modalState } from '@/stores/modal';

import { ModalProps } from '@/types/modal';

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const showModal = (modalProps: ModalProps) => {
    setModal(modalProps);
  };

  const hideModal = () => {
    setModal(null);
  };

  return {
    modal,
    setModal,
    showModal,
    hideModal,
  };
};

export default useModal;
