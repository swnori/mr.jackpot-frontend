import fetchApi from '@/utils/fetch';

export const fetchOrderBoard = () => fetchApi.get('/public/orderinfo/orderboard');
