import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  background: rgba(255, 255, 255, 0.4);
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  padding: 3rem 1.5rem;
  border-radius: 15px;
  width: calc(100% - 3rem);
`;

export const UserInfoSectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.MEDIUM};
`;

export const UserInfoSectionTitleImg = styled.img`
  width: 2.5rem;
  filter: invert(100%);
`;

export const UserInfoInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const UserInfoInputTitle = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.MEDIUM};
`;

export const UserInfoInput = styled.input`
  width: calc(100% - 3rem);

  background: rgba(0, 0, 0, 0.15);
  border: 1px solid ${ColorCode.WHITE};
  border-radius: 10px;

  padding: 1rem 1.25rem;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};

  &::placeholder {
    color: ${ColorCode.WHITE};
  }

  &:read-only {
    background: rgba(255, 255, 255, 0.2);
  }

  transition: background 0.15s ease-in-out;
`;

export const SignOutBtn = styled.button`
  width: calc(100% - 2.5rem);

  background: rgba(255, 255, 255, 0.15);
  border: 1px solid ${ColorCode.WHITE};
  border-radius: 10px;

  padding: 1rem 1.25rem;

  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.PRIMARY};

  box-sizing: content-box;
`;

export const UpdateBtnContainer = styled.button`
  background: ${ColorCode.PRIMARY};
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;

  color: ${ColorCode.WHITE};
  font-size: ${FontSize.M};
  font-weight: ${FontWeight.REGULAR};

  align-self: flex-end;

  display: flex;
  max-width: fit-content;
  padding: 0.7rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const UpdateBtnImg = styled.img`
  width: 1.5rem;
`;
