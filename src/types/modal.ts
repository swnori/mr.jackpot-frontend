import React from 'react';

export type ModalTypes = 'confirm' | 'alert' | 'none';

export interface ModalProps {
  type?: ModalTypes; // Modal 타입
  rejectText?: string; // 취소 버튼 텍스트
  confirmText?: string; // 확인 버튼 텍스트
  handleReject?: (...arg: any[]) => any; // 취소 함수
  handleConfirm?: (...arg: any[]) => any; // 확인 함수
  handleBackground?: (...arg: any[]) => any; // 배경 클릭 함수(기본값은 취소 함수)
  children?: React.ReactNode; // children 컴포넌트
  title?: string | React.ReactNode; // (type === 'bottom'일 경우) 헤더
  showBtn?: boolean; // 버튼 보여줄 건지 여부
  readOnly?: boolean; // Modal을 못닫게
}
