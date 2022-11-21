import { Route, Routes } from 'react-router-dom';

import { DesktopGuard } from './guards';

import CEOFrame from '@/components/Frame/CEOFrame';

import {
  CEOLoginPage,
  CEOMainPage,
  CEOSettingPage,
  CEOStatisticPage,
  CEOStockPage,
  CEOTaskPage,
} from '@/pages';

const CEORoute = () => {
  return (
    <Routes>
      <Route element={<DesktopGuard />}>
        <Route path='/' element={<CEOLoginPage />} />
        <Route element={<CEOFrame />}>
          <Route path='/order' element={<CEOMainPage />} />
          <Route path='/task' element={<CEOTaskPage />} />
          <Route path='/stock' element={<CEOStockPage />} />
          <Route path='/statistic' element={<CEOStatisticPage />} />
          <Route path='/setting' element={<CEOSettingPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default CEORoute;
