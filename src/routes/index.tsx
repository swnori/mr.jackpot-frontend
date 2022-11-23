import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { IntroPage } from '@/pages';

const StaffRoute = React.lazy(() => import('./StaffRoute'));
const ClientRoute = React.lazy(() => import('./ClientRoute'));
const CEORoute = React.lazy(() => import('./CEORoute'));

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
