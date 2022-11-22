import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const MemberInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
  padding: 2rem;
  box-sizing: border-box;
`;

export const MemberInfoBackBtn = styled.button`
  background: ${ColorCode.WHITE};
  width: 2.5rem;
  height: 2.5rem;

  border: none;
  border-radius: 10px;

  margin-left: 1.5rem;
`;

export const MemberInfoBackBtnImg = styled.img`
  width: 100%;
`;

export const MemberInfoTitle = styled.span`
  font-size: calc(${FontSize.XXL} + 0.15rem);
  font-weight: ${FontWeight.MEDIUM};
`;

export const MemberInfoSectionTitle = styled.span`
  font-size: calc(${FontSize.XL} + 0.3rem);
  font-weight: ${FontWeight.MEDIUM};
`;
