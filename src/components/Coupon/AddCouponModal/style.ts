import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const CouponModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 40rem;
  padding: 1.5rem 2rem 2rem 2rem;

  box-sizing: border-box;
`;

export const CouponModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

export const CouponModalInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0.5rem 1rem;

  background: none;
  border: 1px solid ${ColorCode.GREY};
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};

  border-radius: 15px;
  box-sizing: border-box;
`;

export const CouponModalCheckBoxContainer = styled.section`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CouponModalCheckBoxWrapper = styled.label`
  width: 50%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const CouponModalCheckBox = styled.input`
  height: 2rem;
`;

export const CouponModalInputTitle = styled.span`
  font-size: ${FontSize.M};
  font-weight: ${FontWeight.MEDIUM};
`;

export const CouponModalInfoContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const CouponModalInfoTitle = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.MEDIUM};
`;

export const CouponModalInfoText = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
`;
