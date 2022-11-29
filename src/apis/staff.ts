import fetchApi from '@/utils/fetch';

/**
 * Staff 로그인
 * @param { code }
 */
export const fetchStaffLogin = ({ code }: { code: string }) =>
  fetchApi.post('/auth/staff/signin', { Code: code });

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

/**
 * 주문 상세 조회
 */
export const fetchGetOrderDetail = ({ id }: { id: number }) =>
  fetchApi.get(`/staff/order/info?orderid=${id}`);

/**
 * 할 일 목록 조회
 */
export const fetchGetTaskList = () => fetchApi.get('/staff/task/tasklist');

/**
 * 할 일 진행
 * @param { id }
 */
export const fetchTaskNextStep = ({ id }: { id: number }) =>
  fetchApi.post('/staff/task/nextstep', { id });

/**
 * 요리 시작
 * @param { id }
 */
export const fetchStartCook = ({ id }: { id: number }) =>
  fetchApi.post('/staff/task/nextstep', { id });

/**
 * 요리 끝
 * @param { id }
 */
export const fetchEndCook = ({ id }: { id: number }) =>
  fetchApi.post('/staff/task/nextstep', { id });

/**
 * 스타일 끝
 * @param { id }
 */
export const fetchEndStyle = ({ id }: { id: number }) =>
  fetchApi.post('/staff/task/nextstep', { id, type: 'all' });

/**
 * 배달 시작
 * @param { id }
 */
export const fetchStartDelivery = ({ id }: { id: number }) =>
  fetchApi.post('/staff/task/nextstep', { id });

/**
 * 배달 끝
 * @param { id }
 */
export const fetchEndDelivery = ({ id }: { id: number }) =>
  fetchApi.post('/staff/task/nextstep', { id });

/**
 * 회수 시작
 * @param { id }
 */
export const fetchStartCollect = ({ id }: { id: number }) =>
  fetchApi.post('/staff/task/nextstep', { id });

/**
 * 회수 끝
 * @param { id }
 */
export const fetchEndCollect = ({ id }: { id: number }) =>
  fetchApi.post('/staff/task/nextstep', { id });
