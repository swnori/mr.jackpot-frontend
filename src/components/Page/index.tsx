import React from 'react';

import { Background, BackgroundContainer, ChildrenContainer } from './style';

// import MobileBackgroundImg from '@/assets/images/background-mobile.svg';
import DesktopBackgroundImg from '@/assets/images/background-desktop.svg';

interface IPage {
  children: React.ReactNode;
}

const Page = ({ children }: IPage) => {
  return (
    <>
      <BackgroundContainer>
        <Background src={DesktopBackgroundImg} />
      </BackgroundContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
};

export default Page;
