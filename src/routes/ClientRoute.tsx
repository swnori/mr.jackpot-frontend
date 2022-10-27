import { Route, Routes } from 'react-router-dom';

import { ClientIntroPage, ClientLoginPage, ClientMainPage, ClientSignUpPage } from '@/pages';

const ClientRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<ClientIntroPage />} />
      <Route path='/login' element={<ClientLoginPage />} />
      <Route path='/signup' element={<ClientSignUpPage />} />
      <Route path='/main' element={<ClientMainPage />} />
    </Routes>
  );
};

export default ClientRoute;
