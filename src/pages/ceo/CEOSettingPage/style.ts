import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode, StateColorCode } from '@/constants/color';

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
  padding: 2rem;
  box-sizing: border-box;
`;

export const SettingTitleContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

interface TitleValue {
  isActive: boolean;
}

export const SettingTitle = styled.span<TitleValue>`
  font-size: calc(${FontSize.XXL} + 0.15rem);
  font-weight: ${FontWeight.MEDIUM};

  cursor: pointer;

  color: ${(props) => (props.isActive ? ColorCode.BLACK : ColorCode.GREY)};

  &:hover {
    color: ${(props) => (props.isActive ? ColorCode.BLACK : ColorCode.DARKGREY)};
  }
`;

interface BtnValue {
  isEmployee?: boolean;
  isMember?: boolean;
}

export const AddItemBtn = styled.button<BtnValue>`
  width: 10rem;
  height: 4rem;

  padding: 0;
  margin: 0;

  border: none;
  border-radius: 2rem;

  font-size: ${FontSize.L};
  background: ${(props) => (props.isMember ? StateColorCode.완료 : StateColorCode.요리)};

  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: filter 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    filter: brightness(1.1) saturate(1.1);
  }
`;

export const AddItemBtnImg = styled.img`
  width: 1.5rem;
`;
