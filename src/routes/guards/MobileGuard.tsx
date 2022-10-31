import { Outlet } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { ErrorPage } from '@/pages';

const MobileGuard = () => {
  return isMobile ? <Outlet /> : <ErrorPage cause='모바일 화면만 지원합니다.' />;
};

export default MobileGuard;
