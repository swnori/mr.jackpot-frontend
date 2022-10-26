import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ColorCode } from '@/constants/color';

export const Background = styled.img`
  min-width: 100%;
  min-height: 100%;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${ColorCode.WHITE};
`;

export const ChildrenContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
