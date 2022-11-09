import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize, FontWeight } from '@/constants/font';

export const ItemOptionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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
