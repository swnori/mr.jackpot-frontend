import { Route, Routes } from 'react-router-dom';

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
  ClientSignUpPage,
} from '@/pages';

const ClientRoute = () => {
  return (
    <Routes>
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
        </Route>
      </Route>
    </Routes>
  );
};

export default ClientRoute;
