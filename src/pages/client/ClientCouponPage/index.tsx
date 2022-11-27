import { useRecoilValue } from 'recoil';
import { useLayoutEffect } from 'react';

import { CouponContainer, CouponListContainer } from './style';

import MobileItem from '@/components/MobileItem';
import Header from '@/components/Header';

import useClientCoupon from '@/hooks/useClientCoupon';

import { KRWFormat } from '@/utils/format';

import { orderState } from '@/stores/order';

import { Coupon } from '@/types/coupon';

const ClientCouponPage = () => {
  const order = useRecoilValue(orderState);

  const { couponList, selectedCouponId, selectCoupon, openAddCouponModal } = useClientCoupon();

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
    selectCoupon(order.couponId ?? 0);
  }, [selectCoupon, order.couponId]);

  return (
    <CouponContainer>
      <Header type='back' title='쿠폰 목록' />
      <CouponListContainer>
        <MobileItem
          type='button'
          img={null}
          title='쿠폰 코드 입력'
          desc='쿠폰 코드를 입력해 쿠폰을 추가합니다.'
          onClick={() => openAddCouponModal()}
        />
        {couponList.map((coupon, idx) => (
          <MobileItem
            key={idx}
            type='radio'
            img={null}
            title={coupon.name}
            subTitle={getCouponDate(coupon)}
            desc={`${KRWFormat(coupon.price)} | ${coupon.desc}`}
            checked={selectedCouponId === coupon.id}
            onClick={() => selectCoupon(coupon.id)}
          />
        ))}
      </CouponListContainer>
    </CouponContainer>
  );
};

export default ClientCouponPage;
