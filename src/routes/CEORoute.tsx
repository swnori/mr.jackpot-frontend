import { Route, Routes } from 'react-router-dom';

import { DesktopGuard } from './guards';

import CEOFrame from '@/components/Frame/CEOFrame';

import {
  CEOCouponPage,
  CEOLoginPage,
  CEOMainPage,
  CEOMemberInfoPage,
  CEOOrderInfoPage,
  CEOSettingPage,
  CEOStatisticPage,
  CEOStockPage,
  CEOTaskDetailPage,
  CEOTaskPage,
} from '@/pages';

const CEORoute = () => {
  return (
    <Routes>
      <Route element={<DesktopGuard />}>
        <Route path='/' element={<CEOLoginPage />} />
        <Route element={<CEOFrame />}>
          <Route path='/order' element={<CEOMainPage />} />
          <Route path='/order/:id' element={<CEOOrderInfoPage />} />
          <Route path='/task' element={<CEOTaskPage />} />
          <Route path='/task/:id' element={<CEOTaskDetailPage />} />
          <Route path='/stock' element={<CEOStockPage />} />
          <Route path='/statistic' element={<CEOStatisticPage />} />
          <Route path='/setting' element={<CEOSettingPage />} />
          <Route path='/setting/coupon' element={<CEOCouponPage />} />
          <Route path='/setting/:id' element={<CEOMemberInfoPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default CEORoute;
