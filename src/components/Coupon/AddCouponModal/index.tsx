import {
  CouponModalContainer,
  CouponModalInput,
  CouponModalInputContainer,
  CouponModalInputTitle,
} from './style';

import DesktopDatePicker from '@/components/DesktopDatePicker';

import useCoupon from '@/hooks/useCoupon';

const AddCouponModal = () => {
  const {
    newName,
    newDesc,
    newDate,
    newPrice,
    inputCouponNameHandler,
    inputCouponDescHandler,
    inputCouponPriceHandler,
    inputCouponDateHandler,
  } = useCoupon();
  return (
    <CouponModalContainer>
      <CouponModalInputContainer>
        <CouponModalInputTitle>이름</CouponModalInputTitle>
        <CouponModalInput
          placeholder='쿠폰 이름 입력'
          value={newName}
          onChange={inputCouponNameHandler}
        />
      </CouponModalInputContainer>
      <CouponModalInputContainer>
        <CouponModalInputTitle>설명</CouponModalInputTitle>
        <CouponModalInput
          placeholder='쿠폰에 대한 설명 입력'
          value={newDesc}
          onChange={inputCouponDescHandler}
        />
      </CouponModalInputContainer>
      <CouponModalInputContainer>
        <CouponModalInputTitle>액수</CouponModalInputTitle>
        <CouponModalInput
          type='number'
          pattern='\d*'
          placeholder='할인 액수 입력'
          value={newPrice ?? ''}
          onChange={inputCouponPriceHandler}
        />
      </CouponModalInputContainer>
      <CouponModalInputContainer>
        <CouponModalInputTitle>유효 기간</CouponModalInputTitle>
        <DesktopDatePicker
          date={newDate}
          setDate={inputCouponDateHandler}
          customInput={<CouponModalInput />}
        />
      </CouponModalInputContainer>
    </CouponModalContainer>
  );
};

export default AddCouponModal;
