import fetchApi from '@/utils/fetch';

/**
 * 재고 목록 조회
 */
export const fetchGetStockList = () => fetchApi.get('/staff/stock/itemlist');

/**
 * 재고 추가
 * @param { name, unit }
 */
export const fetchAddItem = ({ name, unit }: { name: string; unit: string }) =>
  fetchApi.post('/staff/stock/add', { name, unit });

/**
 * 재고 수정
 * @param { id, count }
 */
export const fetchUpdateItem = ({ id, count }: { id: number; count: number }) =>
  fetchApi.post('/staff/stock/update', { Id: id, Count: count });

/**
 * 재고 삭제
 * @param { id }
 */
export const fetchDeleteItem = ({ id }: { id: number }) =>
  fetchApi.post('/staff/stock/delete', { Id: id });

/**
 * 주문 목록 조회
 */
export const fetchGetOrderList = () => fetchApi.get('/staff/order/list');
