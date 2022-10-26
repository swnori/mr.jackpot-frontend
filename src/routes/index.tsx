import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import StaffRoute from './StaffRoute';
import ClientRoute from './ClientRoute';
import CEORoute from './CEORoute';

import { IntroPage } from '@/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Routes location={window.location} key={window.location.pathname}>
          <Route path='/' element={<IntroPage />} />
          <Route path='/client/*' element={<ClientRoute />} />
          <Route path='/staff/*' element={<StaffRoute />} />
          <Route path='/ceo/*' element={<CEORoute />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default Router;
