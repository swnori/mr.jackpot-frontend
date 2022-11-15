import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const CartSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  background: rgba(255, 255, 255, 0.4);
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  padding: 3rem 1.5rem;
  border-radius: 15px;
  width: calc(100% - 3rem);
`;

export const CartSectionTitle = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.MEDIUM};
`;

export const CartSectionTitleImg = styled.img`
  width: 2.5rem;
`;

export const CartSectionDesc = styled.span`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.MEDIUM};
  color: ${ColorCode.GREY};
  line-height: 2rem;
`;

export const DinnerListContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

export const CartInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const CartInputTitle = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.MEDIUM};
`;

export const CartInput = styled.input`
  width: calc(100% - 3rem);

  background: rgba(0, 0, 0, 0.15);
  border: 1px solid ${ColorCode.WHITE};
  border-radius: 10px;

  padding: 1rem 1.25rem;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};

  &::placeholder {
    color: ${ColorCode.WHITE};
  }
`;

export const CartInputBtn = styled.button`
  width: 100%;

  display: flex;
  justify-content: space-between;

  background: rgba(0, 0, 0, 0.15);
  border: 1px solid ${ColorCode.WHITE};
  border-radius: 10px;

  padding: 1rem 1.25rem;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.WHITE};
`;

export const CartInputBtnImg = styled.img`
  width: 1.5rem;
`;

export const CartTextArea = styled.textarea`
  height: 5rem;

  background: rgba(0, 0, 0, 0.15);
  border: 1px solid ${ColorCode.WHITE};
  border-radius: 10px;

  padding: 1rem 1.25rem;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};

  resize: none;

  &::placeholder {
    color: ${ColorCode.WHITE};
  }
`;

export const CartPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 0;

  border-bottom: 1px solid ${ColorCode.WHITE};
  margin-bottom: 1.5rem;
`;

export const CartPaymentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
`;

export const CartPaymentTitle = styled.span``;
export const CartPaymentMoney = styled.span``;
