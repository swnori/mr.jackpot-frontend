import { Route, Routes } from 'react-router-dom';

import { MobileGuard } from './guards';

import ClientFrame from '@/components/Frame/ClientFrame';

import {
  ClientDinnerPage,
  ClientIntroPage,
  ClientLoginPage,
  ClientMainPage,
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
          <Route path='/dinner/:id' element={<ClientDinnerPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default ClientRoute;
