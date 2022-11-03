/* eslint-disable react-hooks/exhaustive-deps */
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect, useRef, useState } from 'react';

import {
  MsgEnd,
  RTVoiceRecContainer,
  RTVoiceRecImg,
  RTVoiceRecMsg,
  VoiceRecAIMsg,
  VoiceRecContainer,
  VoiceRecMsgContainer,
  VoiceRecUserMsg,
} from './style';

import useVoice from '@/hooks/useVoice';
import useModal from '@/hooks/useModal';

import RTVoiceGIF from '@/assets/images/voice.gif';

interface MsgValue {
  isUsers: boolean;
  content: string;
}

const VoiceRec = () => {
  const [msgList, setMsgList] = useState<MsgValue[]>([]);
  const { transcript, resetTranscript, browserSupportsSpeechRecognition, listening } =
    useSpeechRecognition();
  const { hideModal } = useModal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { startSpeak, stopSpeak } = useVoice();

  if (!browserSupportsSpeechRecognition) {
    hideModal();
  }

  const scrollToBottom = () => {
    if (msgList && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  const speakMsgBeforeListening = async () => {
    if (msgList.length !== 0 && !msgList[msgList.length - 1].isUsers) {
      SpeechRecognition.abortListening();
      await startSpeak(msgList[msgList.length - 1].content);
      SpeechRecognition.startListening({ language: 'ko' });
    }
  };

  if (msgList.length === 0) {
    setMsgList((prev) => [
      ...prev,
      {
        isUsers: false,
        content: '미스터 대박 음성인식 서비스입니다. 메뉴 주문과 메뉴 설명 중 선택해주세요.',
      },
    ]);
  }

  useEffect(() => {
    return () => {
      SpeechRecognition.abortListening();
      stopSpeak();
    };
  }, []);

  useEffect(() => {
    if (!listening && transcript !== '') {
      setMsgList((prev) => [...prev, { isUsers: true, content: transcript }]);
      resetTranscript();
    }
  }, [listening]);

  useEffect(() => {
    scrollToBottom();
    speakMsgBeforeListening();
  }, [msgList]);

  return (
    <VoiceRecContainer>
      <VoiceRecMsgContainer>
        {msgList.map((msg, idx) =>
          msg.isUsers ? (
            <VoiceRecUserMsg key={idx}>{msg.content}</VoiceRecUserMsg>
          ) : (
            <VoiceRecAIMsg key={idx}>{msg.content}</VoiceRecAIMsg>
          ),
        )}
        <MsgEnd ref={scrollRef} />
      </VoiceRecMsgContainer>
      <RTVoiceRecContainer>
        <RTVoiceRecMsg>{transcript === '' ? '...' : transcript}</RTVoiceRecMsg>
        {listening ? <RTVoiceRecImg src={RTVoiceGIF} /> : null}
      </RTVoiceRecContainer>
    </VoiceRecContainer>
  );
};

export default VoiceRec;
