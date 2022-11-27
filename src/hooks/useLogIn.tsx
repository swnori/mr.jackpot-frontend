import { useSetRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';

import { useLink } from './useLink';

import { clientState } from '@/stores/user';

import { FetchError } from '@/types/fetch';

import { fetchStaffLogin } from '@/apis/staff';
import { fetchMemberLogin, fetchNonMemberLogin } from '@/apis/client';
import { fetchCEOLogin } from '@/apis/ceo';

const useLogIn = () => {
  const link = useLink();
  const setClient = useSetRecoilState(clientState);

  const memberLoginMutation = useMutation('memberLogin', fetchMemberLogin, {
    onSuccess: (data) => {
      window.sessionStorage.setItem('access-token', data['access-token']);
      const { name, address, phone } = data.personalInfo;
      setClient({ name, address, contact: phone, isMember: true });
      link.to('/client/main');
    },
    onError: (err: FetchError) => {
      if (err.res.status === 401) {
        toast.error('계정 정보가 틀렸습니다.', { position: 'top-center' });
      } else {
        toast.error('에러!', { position: 'top-center' });
      }
    },
  });

  const nonMemberLoginMutation = useMutation('nonMemberLogin', fetchNonMemberLogin, {
    onSuccess: (data) => {
      window.sessionStorage.setItem('access-token', data['access-token']);

      setClient({ name: '', address: '', contact: '', isMember: false });
      link.to('/client/main');
    },
    onError: () => {
      toast.error('에러!', { position: 'top-center' });
    },
  });

  const ceoLoginMutation = useMutation('ceoLogin', fetchCEOLogin, {
    onSuccess: (data) => {
      window.sessionStorage.setItem('access-token', data['access-token']);
      link.to('/ceo/order');
    },
    onError: (err: FetchError) => {
      if (err.res.status === 401) {
        toast.error('잘못된 코드입니다!');
      } else {
        toast.error('에러!');
      }
    },
  });

  const staffLoginMutation = useMutation('staffLogin', fetchStaffLogin, {
    onSuccess: (data) => {
      window.sessionStorage.setItem('access-token', data['access-token']);
      if (data.role === 'delivery') {
        link.to('/staff/delivery/order');
      } else {
        link.to('/staff/cook/order');
      }
    },
    onError: (err: FetchError) => {
      if (err.res.status === 401) {
        toast.error('잘못된 코드입니다!');
      } else {
        toast.error('에러!');
      }
    },
  });

  return {
    memberLoginMutation,
    nonMemberLoginMutation,
    ceoLoginMutation,
    staffLoginMutation,
  };
};

export default useLogIn;
