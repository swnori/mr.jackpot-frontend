import { toast } from 'react-toastify';

import { useLink } from './useLink';

const useLogOut = () => {
  const link = useLink();
  const clientLogOut = () => {
    window.sessionStorage.removeItem('access-token');
    toast.success('로그아웃 성공!', { position: 'top-center' });
    link.to('/client/login');
  };

  const ceoLogOut = () => {
    window.sessionStorage.removeItem('access-token');
    toast.success('로그아웃 성공!');
    link.to('/ceo');
  };

  const staffLogOut = () => {
    window.sessionStorage.removeItem('access-token');
    toast.success('로그아웃 성공!');
    link.to('/staff');
  };

  return {
    clientLogOut,
    ceoLogOut,
    staffLogOut,
  };
};

export default useLogOut;
