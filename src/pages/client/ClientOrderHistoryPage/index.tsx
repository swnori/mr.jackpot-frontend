import { OrderHistoryContainer, OrderListContainer } from './style';

import MobileItem from '@/components/MobileItem';
import Header from '@/components/Header';

import { digitFormat, KRWFormat } from '@/utils/format';

const dummyOrderHistory = [
  {
    id: 2,
    dinnerName: '발렌타인 디너, 잉글리시 디너',
    createTime: new Date('2022-11-16T15:31:46'),
    reserveTime: new Date('2022-11-28T20:00:00'),
    price: 307000,
  },
  {
    id: 6,
    dinnerName: '샴페인 축제 디너',
    createTime: new Date('2022-11-14T15:31:46'),
    reserveTime: new Date('2022-11-28T19:30:00'),
    price: 207000,
  },
];

const ClientOrderHistoryPage = () => {
  const createTimeText = (date: Date) => {
    const [year, month, day] = [date.getFullYear() % 100, date.getMonth() + 1, date.getDate()];
    return `${year}.${digitFormat(month, 2)}.${digitFormat(day, 2)}`;
  };

  const reserveTimeText = (date: Date) => {
    const [year, month, day, hour, minute] = [
      date.getFullYear() % 100,
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
    ];
    return `${year}.${digitFormat(month, 2)}.${digitFormat(day, 2)} ${digitFormat(
      hour,
      2,
    )}:${digitFormat(minute, 2)}:00`;
  };
  return (
    <OrderHistoryContainer>
      <Header type='back' title='주문 이력' />
      <OrderListContainer>
        {dummyOrderHistory.map((order) => (
          <MobileItem
            key={order.id}
            type='button'
            img={null}
            title={order.dinnerName}
            subTitle={reserveTimeText(order.reserveTime)}
            desc={`${KRWFormat(order.price)} 결제(${createTimeText(order.createTime)})`}
          />
        ))}
      </OrderListContainer>
    </OrderHistoryContainer>
  );
};

export default ClientOrderHistoryPage;
