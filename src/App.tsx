import 'regenerator-runtime/runtime';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import { isMobile } from 'react-device-detect';
import React from 'react';

import ModalRoot from './components/Modal/ModalRoot';
import Loading from './components/Loading';

import GlobalStyle from '@/styles/global';
import Router from '@/routes';

import '@/styles/fonts.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <React.Suspense fallback={<Loading />}>
          <Router />
          <ModalRoot />
          <ToastContainer position={isMobile ? 'top-center' : 'top-right'} autoClose={3000} />
        </React.Suspense>
      </RecoilRoot>
      <GlobalStyle />
    </>
  );
};

export default App;
