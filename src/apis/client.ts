import { dateFormat } from '@/utils/format';
import fetchApi from '@/utils/fetch';

import { DinnerOrder, MenuOrder, OrderInfo } from '@/types/order';

/**
 * 비회원 로그인
 */
export const fetchNonMemberLogin = () => fetchApi.post('/auth/visitor/signin', {});

/**
 * 회원 로그인
 * @param { id, password }
 */
export const fetchMemberLogin = ({ id, password }: { id: string; password: string }) =>
  fetchApi.post('/auth/customer/signin', { userID: id, password });

/**
 * 회원가입
 * @param { id, password, name, contact }
 */
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

/**
 * 내 정보 가져오기
 */
export const fetchGetMyInfo = () => fetchApi.get('/customer/personalinfo');

/**
 * 회원 정보 수정
 * @param { name, address, contact }
 */
export const fetchUpdateMyInfo = ({
  name,
  address,
  contact,
}: {
  name: string;
  address: string;
  contact: string;
}) => fetchApi.post('/customer/personalinfo', { name, address, phone: contact });

/**
 * 음성인식
 * @param { seqStack, message }
 */
export const fetchVui = ({ seqStack, message }: { seqStack: number[]; message: string }) =>
  fetchApi.post('/customer/orderinfo/vuistep', { seqStack, message });

/**
 * 주문하기 (GUI)
 * @param { dinnerList, orderInfo, couponId, price }
 */
export const fetchOrder = ({
  dinnerList,
  orderInfo,
  couponId,
  price,
}: {
  dinnerList: DinnerOrder[];
  orderInfo: OrderInfo;
  couponId: number;
  price: number;
}) => {
  const filteredDish = (menuOrderList: MenuOrder[]) =>
    menuOrderList.map((menuOrder) => ({
      ...menuOrder,
      option: menuOrder.option.filter((opt) => opt && opt !== null),
    }));

  return fetchApi.post('/customer/order/create', {
    dinnerList: dinnerList.map((dinner) => ({
      dinnerId: dinner.type,
      styleId: dinner.style,
      menuList: [
        ...filteredDish(dinner.mainDish),
        ...filteredDish(dinner.side),
        ...filteredDish(dinner.drink),
      ],
    })),
    orderInfo: {
      reserveName: orderInfo.reserveName,
      call: orderInfo.contact,
      address: orderInfo.address,
      reserveDate: dateFormat(orderInfo.reserveDate, true),
      requestDetail: orderInfo.requestDetail,
      couponId,
      price,
    } as any,
  });
};

/**
 * 주문 내역 조회
 */
export const fetchGetMyOrderHistory = () => fetchApi.get('/customer/orderinfo/history');

/**
 * 주문 정보 조회
 * @param { id }
 */
export const fetchGetMyOrderInfo = ({ id }: { id?: number }) =>
  id ? fetchApi.get(`/customer/order/info?orderid=${id}`) : fetchApi.get(`/customer/order/info`);

/**
 * 내가 갖고 있는 쿠폰 목록 조회
 */
export const fetchGetMyCouponList = () => fetchApi.get('/customer/coupon/list');

/**
 * 쿠폰 코드 입력
 * @param { code }
 */
export const fetchInputCoupon = ({ code }: { code: string }) =>
  fetchApi.post('/customer/coupon/gain', { code });
