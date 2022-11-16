import { BasketBtn, FooterBtnContainer, FooterContainer, FooterIcon } from '../../style';

import useOrder from '@/hooks/useOrder';
import { useLink } from '@/hooks/useLink';

import { KRWFormat } from '@/utils/format';

import CreditCardIcon from '@/assets/icons/icon-card-filled.svg';

const motionVariable = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const ClientCartFooter = () => {
  const { orderPrice } = useOrder();
  const link = useLink();
  const paymentHandler = () => {
    link.replace('/client/main');
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
