import { Outlet, useLocation } from 'react-router-dom';

import { CEOFrameContainer } from './style';

import { CEOSideBar } from '@/components/SideBar';
import Page from '@/components/Page';

const CEOFrame = () => {
  const location = useLocation();
  const splitedPath = location.pathname.split('/');
  return (
    <Page type='ceo'>
      <CEOFrameContainer>
        <CEOSideBar pathName={splitedPath[2]} />
        <Outlet />
      </CEOFrameContainer>
    </Page>
  );
};

export default CEOFrame;
