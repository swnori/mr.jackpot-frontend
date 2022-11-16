import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { MobileGuard } from './guards';

import ClientFrame from '@/components/Frame/ClientFrame';

import {
  ClientCartPage,
  ClientCouponPage,
  ClientDinnerPage,
  ClientIntroPage,
  ClientLoginPage,
  ClientMainPage,
  ClientMenuListPage,
  ClientOrderHistoryPage,
  ClientSignUpPage,
} from '@/pages';

const ClientRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route element={<MobileGuard />}>
          <Route path='/' element={<ClientIntroPage />} />
          <Route path='/login' element={<ClientLoginPage />} />
          <Route path='/signup' element={<ClientSignUpPage />} />
          <Route element={<ClientFrame />}>
            <Route path='/main' element={<ClientMainPage />} />
            <Route path='/dinner/:mode/:id' element={<ClientDinnerPage />} />
            <Route path='/menu/:type' element={<ClientMenuListPage />} />
            <Route path='/cart' element={<ClientCartPage />} />
            <Route path='/coupon' element={<ClientCouponPage />} />
            <Route path='/order' element={<ClientOrderHistoryPage />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default ClientRoute;
