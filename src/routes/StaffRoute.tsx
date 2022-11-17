import { Route, Routes } from 'react-router-dom';

import StaffFrame from '@/components/Frame/StaffFrame';

import { DeliveryMainPage, DeliveryTaskPage, StaffLoginPage } from '@/pages';

const DeliveryRoute = () => {
  return (
    <Routes>
      <Route path='/main' element={<DeliveryMainPage />} />
      <Route path='/task' element={<DeliveryTaskPage />} />
    </Routes>
  );
};

const StaffRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<StaffLoginPage />} />
      <Route element={<StaffFrame />}>
        <Route path='/delivery/*' element={<DeliveryRoute />} />
      </Route>
    </Routes>
  );
};

export default StaffRoute;
