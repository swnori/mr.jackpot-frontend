import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import React from 'react';

import { BackgroundContainer, ChildrenContainer } from './style';

import MobileBackgroundImg2 from '@/assets/images/background-mobile-2.png';
import MobileBackgroundImg1 from '@/assets/images/background-mobile-1.png';
import DesktopBackgroundImg from '@/assets/images/background-desktop.svg';

interface IPage {
  children: React.ReactNode;
  type?: 'common' | 'client' | 'staff' | 'ceo';
  depth?: number;
}

const selectBackground = (type: string, depth: number) => {
  if (type === 'common' && isMobile) {
    return MobileBackgroundImg1;
  }
  if (type === 'common' && !isMobile) {
    return DesktopBackgroundImg;
  }
  if (type === 'client' && depth === 0) {
    return MobileBackgroundImg1;
  }
  if (type === 'client' && depth === 1) {
    return MobileBackgroundImg2;
  }

  return undefined;
};

const mfVariant = {
  hiddenLeft: { left: '-100%' },
  hiddenRight: { left: '100%' },
  show: {
    left: '0%',
  },
};

const Page = ({ children, type = 'common', depth = 0 }: IPage) => {
  const backgroundSrc = selectBackground(type, depth);
  const location = useLocation();
  return (
    <BackgroundContainer
      id={`scroll-bg-${location.pathname}`}
      src={backgroundSrc}
      variants={type === 'client' ? mfVariant : {}}
      transition={{
        ease: 'easeInOut',
        duration: 0.35,
      }}
      initial={depth === 0 ? 'hiddenLeft' : 'hiddenRight'}
      animate='show'
      exit={depth === 0 ? 'hiddenLeft' : 'hiddenRight'}
    >
      <ChildrenContainer>{children}</ChildrenContainer>
    </BackgroundContainer>
  );
};

export default Page;
