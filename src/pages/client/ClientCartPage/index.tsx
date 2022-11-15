import { CartContainer } from './style';

import Header from '@/components/Header';
import PaymentSection from '@/components/Cart/PaymentSection';
import OrderInfoSection from '@/components/Cart/OrderInfoSection';
import DinnerListSection from '@/components/Cart/DinnerListSection';

const ClientCartPage = () => {
  return (
    <CartContainer>
      <Header type='back' title='장바구니' />
      <DinnerListSection />
      <OrderInfoSection />
      <PaymentSection />
    </CartContainer>
  );
};

export default ClientCartPage;
