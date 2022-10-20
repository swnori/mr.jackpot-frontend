import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StaffRoute from './StaffRoute';
import ClientRoute from './ClientRoute';
import CEORoute from './CEORoute';

import { IntroPage } from '@/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IntroPage />} />
        <Route path='/client/*' element={<ClientRoute />} />
        <Route path='/staff/*' element={<StaffRoute />} />
        <Route path='/ceo/*' element={<CEORoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
