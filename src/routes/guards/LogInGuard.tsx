import { toast } from 'react-toastify';
import { Navigate, Outlet } from 'react-router-dom';

const LogInGuard = () => {
  const token = window.sessionStorage.getItem('access-token');

  if (!token || token === '') {
    toast.warning('허용되지 않은 접근입니다');
    return <Navigate to='/' />;
  }
  return <Outlet />;
};

export default LogInGuard;
