import { useRecoilValue, useResetRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';

import { BasketBtn, FooterBtnContainer, FooterContainer, FooterIcon } from '../../style';

import useOrder from '@/hooks/useOrder';
import { useLink } from '@/hooks/useLink';

import { KRWFormat } from '@/utils/format';

import { orderState } from '@/stores/order';

import CreditCardIcon from '@/assets/icons/icon-card-filled.svg';
import { fetchOrder } from '@/apis/client';

const motionVariable = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const ClientCartFooter = () => {
  const { orderPrice } = useOrder();
  const order = useRecoilValue(orderState);
  const resetOrder = useResetRecoilState(orderState);
  const link = useLink();
  const orderMutation = useMutation('order', fetchOrder, {
    onSuccess: () => {
      resetOrder();
      toast.success('주문 완료', { position: 'top-center' });
      link.replace('/client/main');
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  const requestOrder = () => {
    if (order.info.address === '' || order.info.contact === '' || order.info.reserveName === '') {
      toast.warning('주문 정보를 모두 채워주셔야 합니다!', { position: 'top-center' });
    } else {
      orderMutation.mutate({
        dinnerList: order.dinnerList,
        orderInfo: order.info,
        couponId: order.couponId ?? 0,
        price: order.price,
      });
    }
  };

  const paymentHandler = () => {
    requestOrder();
  };
  return (
    <FooterContainer
      variants={motionVariable}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{ duration: 0.3 }}
    >
      <FooterBtnContainer>{KRWFormat(orderPrice())}</FooterBtnContainer>
      <BasketBtn onClick={() => paymentHandler()}>
        <FooterIcon src={CreditCardIcon} />
        결제하기
      </BasketBtn>
    </FooterContainer>
  );
};

export default ClientCartFooter;
