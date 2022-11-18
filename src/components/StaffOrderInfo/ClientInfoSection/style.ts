import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';

export const ClientInfoSectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const ClientInfoWrapper = styled.div`
  display: flex;
`;

export const ClientInfoTitle = styled.span`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.MEDIUM};

  width: 10rem;
`;

export const ClientInfoDesc = styled.span`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.REGULAR};

  width: calc(100% - 10rem);
`;
