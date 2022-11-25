import fetchApi from '@/utils/fetch';

/*
export const fetchHelloWorld = () =>
  fetch(`${VITE_BASE_URL}/helloworld`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
*/

export const fetchNonMemberLogin = () => fetchApi.post('/auth/visitor/signin', {});

export const fetchMemberLogin = ({ id, password }: { id: string; password: string }) =>
  fetchApi.post('/auth/customer/signin', { userID: id, password });

export const fetchSignUp = ({
  id,
  password,
  name,
  contact,
}: {
  id: string;
  password: string;
  name: string;
  contact: string;
}) =>
  fetchApi.post('/auth/customer/register', {
    userID: id,
    password,
    name,
    phone: contact,
    address: '',
  });

export const fetchUpdateMyInfo = ({
  name,
  address,
  contact,
}: {
  name: string;
  address: string;
  contact: string;
}) => fetchApi.post('/customer/personalinfo', { name, address, phone: contact });

export const fetchVui = ({ seqStack, message }: { seqStack: number[]; message: string }) =>
  fetchApi.post('/customer/orderinfo/vuistep', { seqStack, message });

export const fetchMyInfo = () => fetchApi.get('');
