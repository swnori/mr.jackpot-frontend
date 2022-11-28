import { Route, Routes } from 'react-router-dom';

import { LogInGuard } from './guards';

import StaffFrame from '@/components/Frame/StaffFrame';

import {
  CookMainPage,
  CookOrderInfoPage,
  CookStockPage,
  CookStyleDetailPage,
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
      <Route path='/task/:oid/:did' element={<CookStyleDetailPage />} />
      <Route path='/stock' element={<CookStockPage />} />
    </Routes>
  );
};

const StaffRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<StaffLoginPage />} />
      <Route element={<LogInGuard />}>
        <Route element={<StaffFrame />}>
          <Route path='/delivery/*' element={<DeliveryRoute />} />
          <Route path='/cook/*' element={<CookRoute />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default StaffRoute;
