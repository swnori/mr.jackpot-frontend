import { isMobile } from 'react-device-detect';
import React from 'react';

import { BackgroundContainer, ChildrenContainer } from './style';

import MobileBackgroundImg2 from '@/assets/images/background-mobile-2.svg';
import MobileBackgroundImg1 from '@/assets/images/background-mobile-1.svg';
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
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      type: 'easeInOut',
      duration: 0.3,
    },
  },
};

const Page = ({ children, type = 'common', depth = 0 }: IPage) => {
  const backgroundSrc = selectBackground(type, depth);
  return (
    <BackgroundContainer id='scroll-bg' src={backgroundSrc}>
      <ChildrenContainer variants={mfVariant} initial='hidden' animate='show' exit='hidden'>
        {children}
      </ChildrenContainer>
    </BackgroundContainer>
  );
};

export default Page;
