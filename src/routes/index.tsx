import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { IntroPage } from '@/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IntroPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
