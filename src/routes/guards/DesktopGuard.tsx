import { Outlet } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { ErrorPage } from '@/pages';

const DesktopGuard = () => {
  return isMobile ? <ErrorPage cause='모바일 화면은 지원하지 않습니다.' /> : <Outlet />;
};

export default DesktopGuard;
