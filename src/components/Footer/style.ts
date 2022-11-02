import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const FooterContainer = styled(motion.div)`
  position: fixed;
  bottom: 2rem;

  width: calc(100% - 6rem);
  height: 6rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.75);
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
`;

export const FooterBtnContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
`;

export const FooterBtn = styled.button`
  width: 2.25rem;
  height: 2.25rem;

  padding: 0;

  outline: none;
  border: none;
  background: none;

  display: flex;
`;

export const FooterIcon = styled.img`
  width: 100%;
`;

export const BasketBtn = styled.button`
  padding: 0 2rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.75rem;

  background: ${ColorCode.PRIMARY};
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 2rem;

  font-size: ${FontSize.L};
  vertical-align: middle;
  color: ${ColorCode.WHITE};

  img {
    width: 1.5rem;
  }
`;
