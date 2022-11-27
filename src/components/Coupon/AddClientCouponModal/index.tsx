import { CouponInput, CouponInputModalContainer } from './style';

import useClientCoupon from '@/hooks/useClientCoupon';

const AddClientCouponModal = () => {
  const { couponCode, inputCouponCodeHandler } = useClientCoupon();
  return (
    <CouponInputModalContainer>
      <CouponInput value={couponCode.code} onChange={inputCouponCodeHandler} />
    </CouponInputModalContainer>
  );
};

export default AddClientCouponModal;
