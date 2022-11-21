import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const MobileCardContainer = styled(motion.div)`
  display: flex;
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  width: 27em;
  height: 32em;
  padding: 1.5em 3em;

  align-items: center;
  justify-content: space-between;
  gap: 1em;

  max-width: calc(100% - 15em);
  min-width: calc(80% - 3em);

  cursor: pointer;
`;

export const MobileCardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileCardTitleIcon = styled.img`
  width: 3em;
  filter: invert(100%);
`;

export const MobileCardTitleText = styled.span`
  font-weight: ${FontWeight.MEDIUM};
  font-size: ${FontSize.XL};
  color: ${ColorCode.WHITE};
`;
