import { Outlet, useLocation } from 'react-router-dom';

import { CookFrameContainer, DeliveryFrameContainer } from './style';

import Page from '@/components/Page';
import StaffFooter from '@/components/Footer/StaffFooter';

const StaffFrame = () => {
  const location = useLocation();
  const splitedPath = location.pathname.split('/');
  const isDelivery = splitedPath[2] === 'delivery';
  return (
    <Page type='staff'>
      {isDelivery ? (
        <DeliveryFrameContainer>
          <Outlet />
          <StaffFooter pathName={splitedPath[3]} />
        </DeliveryFrameContainer>
      ) : (
        <CookFrameContainer>
          <Outlet />
        </CookFrameContainer>
      )}
    </Page>
  );
};

export default StaffFrame;
