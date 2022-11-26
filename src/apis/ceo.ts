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
