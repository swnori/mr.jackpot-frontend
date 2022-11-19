import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';

export const StaffOrderInfoSectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const StaffOrderInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StaffOrderInfoTitle = styled.span`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.MEDIUM};

  width: 10rem;
`;

export const StaffOrderInfoDesc = styled.span`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.REGULAR};

  width: calc(100% - 10rem);

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StaffOrderInfoBtn = styled.button`
  background: none;
  border: none;
  width: 3.5rem;
`;

export const StaffOrderInfoBtnImg = styled.img`
  width: 100%;
`;
