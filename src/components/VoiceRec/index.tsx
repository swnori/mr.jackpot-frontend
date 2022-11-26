/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from 'react-toastify';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useMutation } from 'react-query';
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
import { fetchVui } from '@/apis/client';

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
  const { startSpeak, stopSpeak, voiceOrder } = useVoice();
  const [seqStack, setSeqStack] = useState<number[]>([]);

  if (!browserSupportsSpeechRecognition) {
    hideModal();
  }

  const vuiMutation = useMutation('vui', fetchVui, {
    onSuccess: (data) => {
      voiceOrder(data.seqStack.length === 0 ? 'end' : data.entityType, data.entityId);
      setSeqStack(data.seqStack);
      setMsgList((prev) => {
        const nextMsg = [...prev];
        if (data.decoded && data.decoded !== '') {
          nextMsg[nextMsg.length - 1].content = data.decoded;
        }

        const message = data.message.reduce((pre: string, cur: string) => {
          if (pre === '') {
            return cur;
          }

          return `${pre}\n${cur}`;
        }, '');

        nextMsg.push({ isUsers: false, content: message });
        return nextMsg;
      });
    },
    onError: () => {
      toast.error('에러!', { position: 'top-center' });
    },
  });

  const scrollToBottom = () => {
    if (msgList && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  };

  const speakMsgBeforeListening = async () => {
    if (msgList.length !== 0 && !msgList[msgList.length - 1].isUsers) {
      SpeechRecognition.abortListening();
      await startSpeak(msgList[msgList.length - 1].content);
      if (msgList[msgList.length - 1].content === '음성인식 서비스를 종료합니다.') {
        hideModal();
      }
      SpeechRecognition.startListening({ language: 'ko' });
    }
  };

  useEffect(() => {
    vuiMutation.mutate({ seqStack, message: transcript });
    return () => {
      SpeechRecognition.abortListening();
      stopSpeak();
    };
  }, []);

  useEffect(() => {
    if (!listening && transcript !== '') {
      vuiMutation.mutate({ seqStack: seqStack.length === 0 ? [1] : seqStack, message: transcript });
      setMsgList((prev) => [...prev, { isUsers: true, content: transcript }]);
      resetTranscript();
    }
    if (!listening && transcript === '') {
      SpeechRecognition.startListening({ language: 'ko' });
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
