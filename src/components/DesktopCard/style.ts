import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const DesktopCardContainer = styled(motion.div)`
  display: flex;
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  width: 17rem;
  height: 32rem;
  padding: 1.5rem;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const DesktopCardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 3rem;
  gap: 1.5rem;
`;

export const DesktopCardTitleIcon = styled.img`
  width: 3rem;
`;

export const DesktopCardTitleText = styled.span`
  font-weight: ${FontWeight.MEDIUM};
  font-size: ${FontSize.XL};
  color: ${ColorCode.WHITE};
`;
