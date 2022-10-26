import React from 'react';

import { DesktopCardFrame, DesktopCardTitle } from '@/components/DesktopCard';

interface LoginCardValue {
  img: string;
  title: string;
  children: React.ReactNode;
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const LoginCard = ({ img, title, children }: LoginCardValue) => {
  return (
    <DesktopCardFrame
      variants={item}
      initial='hidden'
      animate='show'
      transition={{ type: 'easeInOut', duration: 1 }}
    >
      <DesktopCardTitle img={img} title={title} />
      {children}
    </DesktopCardFrame>
  );
};

export default LoginCard;
