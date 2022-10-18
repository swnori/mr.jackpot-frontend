import { Route, Routes } from 'react-router-dom';

import { CEOLoginPage } from '@/pages';

const CEORoute = () => {
  return (
    <Routes>
      <Route path='/' element={<CEOLoginPage />} />
    </Routes>
  );
};

export default CEORoute;
