import { dateFormat } from '@/utils/format';
import fetchApi from '@/utils/fetch';

/**
 * CEO 로그인
 * @param { code }
 */
export const fetchCEOLogin = ({ code }: { code: string }) =>
  fetchApi.post('/auth/staff/signin', { Code: code });

/**
 * 발행한 쿠폰 목록 조회
 */
export const fetchGetCouponList = () => fetchApi.get('/ceo/coupon/list');

/**
 * 쿠폰 삭제
 * @param { id }
 */
export const fetchDeleteCoupon = ({ id }: { id: number }) =>
  fetchApi.post('/ceo/coupon/delete', { id });

/**
 * 쿠폰 발행
 * @param { name, desc, price, date }
 */
export const fetchIssueCoupon = ({
  name,
  desc,
  price,
  date,
}: {
  name: string;
  desc: string;
  price: number;
  date: Date;
}) =>
  fetchApi.post('/ceo/coupon/issue', {
    title: name,
    message: desc,
    Amount: price,
    expiresAt: dateFormat(date, true),
  });

/**
 * 고객 목록 조회
 */
export const fetchGetMemberList = () => fetchApi.get('/ceo/customer/list');

/**
 * 직원 목록 조회
 */
export const fetchGetStaffList = () => fetchApi.get('/ceo/staff/list');

/**
 * 직원 등록
 * @param { name, type }
 */
export const fetchRegisterStaff = ({ name, type }: { name: string; type: number }) =>
  fetchApi.post('/ceo/staff/register', { name, roleId: type });

/**
 * 직원 수정
 * @param { id, name, type }
 */
export const fetchUpdateStaff = ({ id, name, type }: { id: number; name: string; type: number }) =>
  fetchApi.post('/ceo/staff/update', { id, name, roleId: type });
