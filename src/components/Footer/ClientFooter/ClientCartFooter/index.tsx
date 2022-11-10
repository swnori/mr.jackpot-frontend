import { BasketBtn, FooterBtnContainer, FooterContainer, FooterIcon } from '../../style';

import useOrder from '@/hooks/useOrder';

import { KRWFormat } from '@/utils/format';

import CreditCardIcon from '@/assets/icons/icon-card-filled.svg';

const motionVariable = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const ClientCartFooter = () => {
  const { orderPrice } = useOrder();
  return (
    <FooterContainer
      variants={motionVariable}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{ duration: 0.3 }}
    >
      <FooterBtnContainer>{KRWFormat(orderPrice())}</FooterBtnContainer>
      <BasketBtn>
        <FooterIcon src={CreditCardIcon} />
        결제하기
      </BasketBtn>
    </FooterContainer>
  );
};

export default ClientCartFooter;
