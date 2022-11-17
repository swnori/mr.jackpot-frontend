import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const OrderSection = styled.section`
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

export const OrderSectionTitle = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.MEDIUM};
`;

export const OrderSectionTitleImg = styled.img`
  width: 2.5rem;
`;

export const OrderSectionDesc = styled.span`
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

export const OrderInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const OrderInputTitle = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.MEDIUM};
`;

export const OrderInfoText = styled.span`
  width: calc(100% - 2.5rem);

  background: rgba(255, 255, 255, 0.15);
  border: 1px solid ${ColorCode.WHITE};
  border-radius: 10px;

  padding: 1rem 1.25rem;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
`;

export const OrderInfoBtn = styled.button`
  width: calc(100% - 2.5rem);

  background: rgba(255, 255, 255, 0.15);
  border: 1px solid ${ColorCode.WHITE};
  border-radius: 10px;

  padding: 1rem 1.25rem;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.PRIMARY};

  box-sizing: content-box;
`;

export const OrderTextArea = styled.span`
  height: 5rem;

  background: rgba(255, 255, 255, 0.15);
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

export const OrderPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 0;

  border-bottom: 1px solid ${ColorCode.WHITE};
  margin-bottom: 1.5rem;
`;

export const OrderPaymentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
`;

export const OrderPaymentTitle = styled.span``;
export const OrderPaymentMoney = styled.span``;

export const OrderDDayContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 20rem;

  background: rgba(255, 255, 255, 0.3);
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(2px);
  border-radius: 10rem;

  font-size: 5rem;
`;
