import {
  ModalBackground,
  ModalBtnContainer,
  ModalConfirmBtn,
  ModalContainer,
  ModalInnerContainer,
  ModalRejectBtn,
  ModalTitle,
} from './style';

import useModal from '@/hooks/useModal';

import { ModalProps } from '@/types/modal';

const ModalFrame = ({
  type,
  title,
  rejectText = '취소',
  confirmText = '확인',
  handleReject,
  handleConfirm,
  handleBackground,
  showBtn = true,
  readOnly = false,
  children,
}: ModalProps) => {
  const { hideModal } = useModal();

  const onReject = () => {
    if (readOnly) return;

    hideModal();
    if (handleReject) {
      handleReject();
    }
  };

  const onConfirm = () => {
    hideModal();
    if (handleConfirm) {
      handleConfirm();
    }
  };

  const onBackground = () => {
    if (handleBackground) {
      handleBackground();
      return;
    }
    onReject();
  };

  return (
    <ModalContainer>
      {type === 'none' ? (
        children
      ) : (
        <ModalInnerContainer>
          <ModalTitle>{title}</ModalTitle>
          {children}
          {showBtn ? (
            <ModalBtnContainer>
              <ModalRejectBtn onClick={onReject}>{rejectText}</ModalRejectBtn>
              <ModalConfirmBtn onClick={onConfirm}>{confirmText}</ModalConfirmBtn>
            </ModalBtnContainer>
          ) : null}
        </ModalInnerContainer>
      )}

      <ModalBackground onClick={onBackground} />
    </ModalContainer>
  );
};

export default ModalFrame;
