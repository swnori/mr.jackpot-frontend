import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

interface FooterValue {
  isStaff?: boolean;
}

export const FooterContainer = styled(motion.div)<FooterValue>`
  position: fixed;
  bottom: 2rem;

  width: calc(100% - 4rem);
  height: 6rem;
  padding: 0 1rem;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.75);
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 3rem;

  ${(props) =>
    props.isStaff ? 'box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25); padding: 0 3rem' : ''}
`;

export const FooterBtnContainer = styled.div`
  display: flex;
  flex: 1 0 0;
  font-size: ${FontSize.XL};
  justify-content: space-evenly;
`;

interface BtnValue {
  isActive?: boolean;
}

export const FooterBtn = styled.button<BtnValue>`
  min-width: 2.25rem;
  height: 3rem;

  padding: 1rem 1rem;

  outline: none;
  border: none;
  background: ${(props) => (props.isActive ? ColorCode.LIGHTGREY : 'none')};
  border-radius: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
`;

export const LogOutBtn = styled.button`
  width: 3rem;
  height: 3rem;

  outline: none;
  border: none;
  background: ${ColorCode.LIGHTGREY};
  border-radius: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 1.5rem;
  }
`;

export const FooterIcon = styled.img`
  width: 2.25rem;
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

export const BasketCount = styled.div`
  background: ${ColorCode.WHITE};
  border: 1px solid ${ColorCode.PRIMARY};
  color: ${ColorCode.PRIMARY};
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  font-size: ${FontSize.M};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -0.5rem;
  right: 0.5rem;
`;
