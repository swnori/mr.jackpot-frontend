import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const SideBarContainer = styled.div`
  position: fixed;
  left: 0;

  height: 100%;
  width: 10rem;

  background: ${ColorCode.WHITE};
  box-shadow: 2px 0px 15px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

interface BtnValue {
  isActive?: boolean;
}

export const SideBarBtnContainer = styled.div`
  min-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const SideBarBtn = styled.button<BtnValue>`
  width: 5rem;

  padding: 2rem;

  outline: none;
  border: none;
  background: ${(props) => (props.isActive ? ColorCode.LIGHTGREY : 'none')};
  border-radius: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.isActive ? ColorCode.LIGHTGREY : ColorCode.OFFWHITE)};
  }
`;

export const LogOutBtn = styled.button`
  width: 5rem;
  height: 5rem;

  outline: none;
  border: none;
  background: ${ColorCode.LIGHTGREY};
  border-radius: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 2rem;
  }

  &:hover {
    background: ${ColorCode.GREY};
    img {
      filter: invert(100%);
    }
  }

  cursor: pointer;
`;

export const SideBarIcon = styled.img`
  width: 2.25rem;
`;
