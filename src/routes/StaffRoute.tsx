import { Route, Routes } from 'react-router-dom';

import StaffFrame from '@/components/Frame/StaffFrame';

import {
  CookMainPage,
  CookOrderInfoPage,
  CookStockPage,
  CookTaskPage,
  DeliveryMainPage,
  DeliveryTaskPage,
  StaffLoginPage,
} from '@/pages';

const DeliveryRoute = () => {
  return (
    <Routes>
      <Route path='/main' element={<DeliveryMainPage />} />
      <Route path='/task' element={<DeliveryTaskPage />} />
    </Routes>
  );
};

const CookRoute = () => {
  return (
    <Routes>
      <Route path='/order' element={<CookMainPage />} />
      <Route path='/order/:id' element={<CookOrderInfoPage />} />
      <Route path='/task' element={<CookTaskPage />} />
      <Route path='/stock' element={<CookStockPage />} />
    </Routes>
  );
};

const StaffRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<StaffLoginPage />} />
      <Route element={<StaffFrame />}>
        <Route path='/delivery/*' element={<DeliveryRoute />} />
        <Route path='/cook/*' element={<CookRoute />} />
      </Route>
    </Routes>
  );
};

export default StaffRoute;
