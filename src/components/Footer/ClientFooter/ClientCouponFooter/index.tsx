import { useRecoilValue, useSetRecoilState } from 'recoil';

import { BasketBtn, FooterBtnContainer, FooterContainer, FooterIcon } from '../../style';

import { useLink } from '@/hooks/useLink';

import { orderState } from '@/stores/order';
import { selectedCouponState } from '@/stores/coupon';

import CouponIcon from '@/assets/icons/icon-coupon-filled.svg';

const motionVariable = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const ClientCouponFooter = () => {
  const setOrder = useSetRecoilState(orderState);
  const selectedCouponId = useRecoilValue(selectedCouponState);
  const link = useLink();

  const setCouponIdHandler = () => {
    setOrder((prev) => ({ ...prev, couponId: selectedCouponId }));
    link.to('/client/cart');
  };

  return (
    <FooterContainer
      variants={motionVariable}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{ duration: 0.3 }}
    >
      <FooterBtnContainer>※ 1회 1매 적용 가능</FooterBtnContainer>
      <BasketBtn onClick={() => setCouponIdHandler()}>
        <FooterIcon src={CouponIcon} />
        선택 쿠폰 적용
      </BasketBtn>
    </FooterContainer>
  );
};

export default ClientCouponFooter;
