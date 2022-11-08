import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ClientFrameContainer } from './style';

import Page from '@/components/Page';
import { ClientFooter } from '@/components/Footer';

import MobileBackgroundImg2 from '@/assets/images/background-mobile-2.svg';
import MobileBackgroundImg1 from '@/assets/images/background-mobile-1.svg';

const depthMap: { [key: string]: number } =
  {
    main: 0,
    orderlist: 1,
    dinner: 1,
  } ?? 0;

const ClientFrame = () => {
  const location = useLocation();

  const [isScrollUp, setIsScrollUp] = useState<boolean>(true);

  const splitedPath = location.pathname.split('/');

  useEffect(() => {
    const root = document.getElementById('scroll-bg'); // <BackgroundContainer /> of <Page />

    if (root) {
      const threshold = 0;
      let lastScrollY = root.scrollTop;
      let ticking = false;

      const updateScrollDir = () => {
        const scrollY = root.scrollTop;
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

      root.addEventListener('scroll', onScroll);

      return () => root.removeEventListener('scroll', onScroll);
    }
  }, [isScrollUp]);

  return (
    <>
      <link rel='prefetch' href={MobileBackgroundImg1} />
      <link rel='prefetch' href={MobileBackgroundImg2} />
      <Page type='client' depth={depthMap[splitedPath[2]]}>
        <ClientFrameContainer>
          <Outlet />
          <AnimatePresence exitBeforeEnter>
            {isScrollUp ? <ClientFooter pathName={splitedPath[2]} /> : null}
          </AnimatePresence>
        </ClientFrameContainer>
      </Page>
    </>
  );
};

export default ClientFrame;
