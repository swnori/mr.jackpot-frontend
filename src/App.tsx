import 'regenerator-runtime/runtime';
import { RecoilRoot } from 'recoil';
import React from 'react';

import ModalRoot from './components/Modal/ModalRoot';

import GlobalStyle from '@/styles/global';
import Router from '@/routes';

import '@/styles/fonts.css';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Router />
          <ModalRoot />
        </React.Suspense>
      </RecoilRoot>
      <GlobalStyle />
    </>
  );
};

export default App;
