import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode, StateColorCode } from '@/constants/color';

export const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
  padding: 2rem;
  box-sizing: border-box;
`;

export const CouponBackBtn = styled.button`
  background: ${ColorCode.WHITE};
  width: 2.5rem;
  height: 2.5rem;

  border: none;
  border-radius: 10px;

  margin-left: 1.5rem;
`;

export const CouponBackBtnImg = styled.img`
  width: 100%;
`;

export const CouponTitle = styled.span`
  font-size: calc(${FontSize.XXL} + 0.15rem);
  font-weight: ${FontWeight.MEDIUM};
`;

export const CouponSectionTitle = styled.span`
  font-size: calc(${FontSize.XL} + 0.3rem);
  font-weight: ${FontWeight.MEDIUM};
`;

export const AddItemBtn = styled.button`
  width: 10rem;
  height: 4rem;

  padding: 0;
  margin: 0;

  border: none;
  border-radius: 2rem;

  font-size: ${FontSize.L};
  background: ${StateColorCode.요리};

  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const AddItemBtnImg = styled.img`
  width: 1.5rem;
`;
