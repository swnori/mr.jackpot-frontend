import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const SettingModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 40rem;
  padding: 1.5rem 2rem 2rem 2rem;

  box-sizing: border-box;
`;

export const SettingModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

export const SettingModalInput = styled.input`
  height: 2rem;
  padding: 0.5rem 1rem;

  background: none;
  border: 1px solid ${ColorCode.GREY};
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};

  border-radius: 15px;
`;

export const SettingModalNoticeWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${FontSize.L};

  b {
    font-weight: ${FontWeight.BOLD};
  }
`;

export const SettingModalSelect = styled.select`
  height: 2rem;
  padding: 0.5rem 1rem;

  background: none;
  border: 1px solid ${ColorCode.GREY};
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};

  border-radius: 15px;
  box-sizing: content-box;

  &:focus-visible {
    outline: none;
    border: 1px solid ${ColorCode.DARKGREY};
  }
`;

export const SettingModalCheckBoxContainer = styled.section`
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SettingModalCheckBoxWrapper = styled.label`
  width: 50%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const SettingModalCheckBox = styled.input`
  height: 2rem;
`;

export const SettingModalInputTitle = styled.span`
  font-size: ${FontSize.M};
  font-weight: ${FontWeight.MEDIUM};
`;

export const SettingModalInfoContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SettingModalInfoTitle = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.MEDIUM};
`;

export const SettingModalInfoText = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
`;
