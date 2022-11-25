import { useSetRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';

import { useLink } from './useLink';

import { clientState } from '@/stores/user';

import { FetchError } from '@/types/fetch';

import { fetchMemberLogin, fetchNonMemberLogin } from '@/apis/client';

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
      setClient((prev) => ({ ...prev, isMember: false }));
      link.to('/client/main');
    },
    onError: () => {
      toast.error('에러!', { position: 'top-center' });
    },
  });

  return {
    memberLoginMutation,
    nonMemberLoginMutation,
  };
};

export default useLogIn;
