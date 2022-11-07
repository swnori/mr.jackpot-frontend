import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ColorCode } from '@/constants/color';

interface BackgroundContainerValue {
  src?: string;
}

export const BackgroundContainer = styled.div<BackgroundContainerValue>`
  position: absolute;
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  background-image: url(${(props) => props.src ?? ''});
  background-color: ${ColorCode.OFFWHITE};
  background-attachment: local;
  background-size: cover;
  background-repeat: repeat;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const ChildrenContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
