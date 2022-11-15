import styled from 'styled-components';

import { ColorCode } from '@/constants/color';

export const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  padding-bottom: 10rem;
`;

export const CouponListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CouponInputModalContainer = styled.div`
  padding: 2rem 2rem 3rem 2rem;
  width: 25rem;
`;

export const CouponInput = styled.input`
  width: 100%;
  outline: none;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid ${ColorCode.DARKGREY};
  box-sizing: border-box;
`;
