import { Outlet, useLocation } from 'react-router-dom';

import { CookFrameContainer, DeliveryFrameContainer } from './style';

import { StaffSideBar } from '@/components/SideBar';
import Page from '@/components/Page';
import { StaffFooter } from '@/components/Footer';

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
          <StaffSideBar pathName={splitedPath[3]} />
          <Outlet />
        </CookFrameContainer>
      )}
    </Page>
  );
};

export default StaffFrame;
