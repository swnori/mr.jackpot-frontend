import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ClientFrameContainer } from './style';

import Page from '@/components/Page';
import { ClientFooter } from '@/components/Footer';

const ClientFrame = () => {
  const location = useLocation();

  const [isScrollUp, setIsScrollUp] = useState<boolean>(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setIsScrollUp(scrollY < lastScrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isScrollUp]);

  return (
    <Page type='client'>
      <ClientFrameContainer>
        <Outlet />
        <AnimatePresence exitBeforeEnter>
          {isScrollUp ? <ClientFooter path={location.pathname} /> : null}
        </AnimatePresence>
      </ClientFrameContainer>
    </Page>
  );
};

export default ClientFrame;
