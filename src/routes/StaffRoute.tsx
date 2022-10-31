import { Route, Routes } from 'react-router-dom';

import { DesktopGuard } from './guards';

import { StaffLoginPage } from '@/pages';

const StaffRoute = () => {
  return (
    <Routes>
      <Route element={<DesktopGuard />}>
        <Route path='/' element={<StaffLoginPage />} />
      </Route>
    </Routes>
  );
};

export default StaffRoute;
