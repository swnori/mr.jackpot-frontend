import { Route, Routes } from 'react-router-dom';

import { ClientIntroPage } from '@/pages';

const ClientRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<ClientIntroPage />} />
    </Routes>
  );
};

export default ClientRoute;
