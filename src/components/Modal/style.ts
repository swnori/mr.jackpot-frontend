import styled from 'styled-components';

import { ColorCode } from '@/constants/color';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 0;
`;

export const ModalInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${ColorCode.WHITE};
  border-radius: 4px;
  z-index: 1;
`;

export const ModalBtnContainer = styled.div``;

export const ModalConfirmBtn = styled.button``;

export const ModalRejectBtn = styled.button``;
