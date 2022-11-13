import { useRecoilState, useRecoilValue } from 'recoil';
import { useLayoutEffect } from 'react';

import { CouponContainer, CouponListContainer } from './style';

import MobileItem from '@/components/MobileItem';
import Header from '@/components/Header';

import { KRWFormat } from '@/utils/format';

import { orderState } from '@/stores/order';
import { couponState, selectedCouponState } from '@/stores/coupon';

import { Coupon } from '@/types/coupon';

const ClientCouponPage = () => {
  const couponList = useRecoilValue(couponState);
  const order = useRecoilValue(orderState);
  const [selectedCouponId, setSelectedCouponId] = useRecoilState(selectedCouponState);
  const getCouponDate = (coupon: Coupon) => {
    if (!coupon.startDate || !coupon.endDate) {
      return '';
    }
    const [startY, startM, startD] = [
      coupon.startDate.getFullYear().toString().slice(2),
      coupon.startDate.getMonth() + 1,
      coupon.startDate.getDate(),
    ];

    const [endY, endM, endD] = [
      coupon.endDate.getFullYear().toString().slice(2),
      coupon.endDate.getMonth() + 1,
      coupon.endDate.getDate(),
    ];

    return `${startY}.${startM}.${startD} ~ ${endY}.${endM}.${endD}`;
  };

  useLayoutEffect(() => {
    setSelectedCouponId(order.couponId ?? 0);
  }, [order.couponId, setSelectedCouponId]);

  return (
    <CouponContainer>
      <Header type='back' title='쿠폰 목록' />
      <CouponListContainer>
        {couponList.map((coupon, idx) => (
          <MobileItem
            key={idx}
            type='radio'
            img={null}
            title={coupon.name}
            subTitle={getCouponDate(coupon)}
            desc={`${KRWFormat(coupon.price)} | ${coupon.desc}`}
            checked={selectedCouponId === coupon.id}
            onClick={() => setSelectedCouponId(coupon.id)}
          />
        ))}
      </CouponListContainer>
    </CouponContainer>
  );
};

export default ClientCouponPage;
