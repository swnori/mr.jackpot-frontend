import { Route, Routes } from 'react-router-dom';

import { DesktopGuard } from './guards';

import { CEOLoginPage } from '@/pages';

const CEORoute = () => {
  return (
    <Routes>
      <Route element={<DesktopGuard />}>
        <Route path='/' element={<CEOLoginPage />} />
      </Route>
    </Routes>
  );
};

export default CEORoute;
