import { Route, Routes } from 'react-router-dom';

import { StaffLoginPage } from '@/pages';

const StaffRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<StaffLoginPage />} />
    </Routes>
  );
};

export default StaffRoute;
