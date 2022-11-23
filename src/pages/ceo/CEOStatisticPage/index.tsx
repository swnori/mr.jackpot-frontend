import { CardListContainer, StatisticContainer, StatisticTitle } from './style';

import Graph from '@/components/Statistic/Graph';
import StatisticCard from '@/components/Statistic/Card';

import UserIcon from '@/assets/icons/icon-user.svg';
import ReceiptIcon from '@/assets/icons/icon-receipt.svg';
import CouponIcon from '@/assets/icons/icon-coupon.svg';

const dummyData = {
  sales: [
    7812400, 7310200, 3752300, 5234100, 6923500, 4252300, 4825200, 5823400, 7520300, 4235300,
    2310000, 0,
  ],
  member: 192,
  sale: 398,
  order: 30,
};

const CEOStatisticPage = () => {
  return (
    <StatisticContainer>
      <StatisticTitle>매출 통계</StatisticTitle>
      <Graph data={dummyData.sales} curMonth={new Date().getMonth() + 1} />
      <CardListContainer>
        <StatisticCard iconSrc={UserIcon} title='회원 수' value={dummyData.member} unit='명' />
        <StatisticCard iconSrc={CouponIcon} title='매출' value={dummyData.sale} unit='만 원' />
        <StatisticCard iconSrc={ReceiptIcon} title='주문 수' value={dummyData.order} unit='건' />
      </CardListContainer>
    </StatisticContainer>
  );
};

export default CEOStatisticPage;
