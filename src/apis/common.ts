import fetchApi from '@/utils/fetch';

export const fetchOrderBoard = () => fetchApi.get('/public/orderinfo/orderboard');

export const fetchState = () => fetchApi.get('/public/orderinfo/statelist');
