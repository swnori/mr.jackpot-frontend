import styled from 'styled-components';

import { FontSize } from '@/constants/font';
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
  border-radius: 15px;
  overflow: hidden;
  z-index: 1;
`;

export const ModalTitle = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  padding: 2rem 2rem 1rem 2rem;
  font-size: 1.75rem;

  img {
    width: ${FontSize.XL};
  }
`;

export const ModalBtnContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    padding: 1rem;
    gap: 1rem;
    justify-content: flex-end;
  }
`;

const ModalBtn = styled.button`
  border: none;

  @media screen and (min-width: 768px) {
    width: 7rem;
    height: 2.5rem;

    padding: 0;
    margin: 0;
    border-radius: 1.25rem;

    font-size: ${FontSize.L};

    transition: filter 0.3s ease-in-out;

    cursor: pointer;

    &:hover {
      filter: brightness(1.1) saturate(1.1);
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1.25rem;
    font-size: ${FontSize.L};
  }
`;

export const ModalConfirmBtn = styled(ModalBtn)`
  background: ${ColorCode.CONFIRM};
`;

export const ModalRejectBtn = styled(ModalBtn)`
  background: ${ColorCode.ERROR};
`;
