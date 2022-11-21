import { useRecoilState } from 'recoil';

import { modalState } from '@/stores/modal';

import { ModalProps } from '@/types/modal';

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const showModal = (modalProps: ModalProps) => {
    setModal(modalProps);
  };

  const rerenderModal = (modalProps: Partial<ModalProps>) => {
    setModal((prev) => ({ ...prev, ...modalProps }));
  };

  const hideModal = () => {
    setModal(null);
  };

  return {
    modal,
    setModal,
    showModal,
    hideModal,
    rerenderModal,
  };
};

export default useModal;
