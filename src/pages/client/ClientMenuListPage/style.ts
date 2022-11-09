import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const MenuListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const MenuListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 5rem;
`;

export const MenuListNoticeWrapper = styled(motion.span)`
  width: 100%;
  text-align: center;
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.LIGHT};
  color: ${ColorCode.WHITE};
`;
