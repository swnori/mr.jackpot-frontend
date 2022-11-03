import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const VoiceRecContainer = styled.div`
  width: calc(100% - 8rem);
  padding: 2rem 1.25rem 2rem 2rem;
  height: 70%;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  gap: 1.5rem;

  z-index: 9999;
`;

export const VoiceRecMsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100% - 15rem);
  gap: 1rem;
  padding: 0 0.75rem 0 0;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    background: none;
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.35);
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;

const Msg = styled.span`
  padding: 0.7rem 1rem;
  max-width: 20rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  color: ${ColorCode.WHITE};
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
  line-height: 1.15em;
`;

export const MsgEnd = styled.div``;

export const VoiceRecAIMsg = styled(Msg)`
  align-self: flex-start;
  border-radius: 10px 10px 10px 0px;
`;

export const VoiceRecUserMsg = styled(Msg)`
  align-self: flex-end;
  border-radius: 10px 10px 0px 10px;
`;

export const RTVoiceRecContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: 15rem;
`;

export const RTVoiceRecMsg = styled(Msg)`
  border-radius: 10px 10px 10px 10px;
`;

export const RTVoiceRecImg = styled.img`
  width: 20rem;
  margin: -3rem;
`;
