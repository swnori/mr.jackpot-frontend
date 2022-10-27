import React from 'react';

import { DesktopCardBtnContainer } from './style';

interface DesktopCardValue {
  onClick: () => void;
  children: React.ReactNode;
}

const DesktopCardBtn = ({ onClick, children }: DesktopCardValue) => {
  return <DesktopCardBtnContainer onClick={onClick}>{children}</DesktopCardBtnContainer>;
};

export default DesktopCardBtn;
