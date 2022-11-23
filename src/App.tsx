import 'regenerator-runtime/runtime';
import { RecoilRoot } from 'recoil';
import React from 'react';

import ModalRoot from './components/Modal/ModalRoot';
import Loading from './components/Loading';

import GlobalStyle from '@/styles/global';
import Router from '@/routes';

import '@/styles/fonts.css';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <React.Suspense fallback={<Loading />}>
          <Router />
          <ModalRoot />
        </React.Suspense>
      </RecoilRoot>
      <GlobalStyle />
    </>
  );
};

export default App;
