import { Outlet, useLocation } from 'react-router-dom';

import { ClientFrameContainer } from './style';

import Page from '@/components/Page';
import { ClientFooter } from '@/components/Footer';

const ClientFrame = () => {
  const location = useLocation();
  return (
    <Page type='client'>
      <ClientFrameContainer>
        <Outlet />
        <ClientFooter path={location.pathname} />
      </ClientFrameContainer>
    </Page>
  );
};

export default ClientFrame;
