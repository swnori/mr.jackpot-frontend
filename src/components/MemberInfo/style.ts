import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';

export const MemberInfoSectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const MemberInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MemberInfoTitle = styled.span`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.MEDIUM};

  width: 13rem;
`;

export const MemberInfoDesc = styled.span`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.REGULAR};

  width: calc(100% - 10rem);

  display: flex;
  align-items: center;
  gap: 1rem;
`;
