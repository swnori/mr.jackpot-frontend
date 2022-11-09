import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const ItemOptionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem 1rem;
  overflow: hidden;
`;

export const ItemOptionSection = styled.section`
  display: flex;
  flex-direction: column;

  gap: 0.7rem;
`;

export const ItemOptionTitle = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.MEDIUM};
`;

export const ItemOptionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const ItemOptionRadioBox = styled.div``;

export const ItemOptionRadioImg = styled.img`
  width: 2rem;
`;

export const ItemOptionName = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
  flex: 1;
`;

export const ItemOptionPrice = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
`;

export const ItemCountContainer = styled.div`
  display: flex;
  width: 7rem;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid ${ColorCode.PRIMARY};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 1.5rem;
`;

export const ItemCountView = styled.span`
  width: 100%;
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
  text-align: center;
`;

export const ItemCountBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 0;
`;

export const ItemCountBtnImg = styled.img`
  width: 2rem;
`;
