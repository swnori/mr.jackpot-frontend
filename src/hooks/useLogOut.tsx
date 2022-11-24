import { toast } from 'react-toastify';

import { useLink } from './useLink';

const useLogOut = () => {
  const link = useLink();
  const clientLogOut = () => {
    window.sessionStorage.removeItem('access-token');
    toast.success('로그아웃 성공!', { position: 'top-center' });
    link.to('/client/login');
  };

  return {
    clientLogOut,
  };
};

export default useLogOut;
