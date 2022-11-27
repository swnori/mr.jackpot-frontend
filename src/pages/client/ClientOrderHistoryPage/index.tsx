import { useQuery } from 'react-query';
import { useState } from 'react';

import { OrderHistoryContainer, OrderListContainer } from './style';

import MobileItem from '@/components/MobileItem';
import Loading from '@/components/Loading';
import Header from '@/components/Header';

import { useLink } from '@/hooks/useLink';

import { digitFormat, KRWFormat } from '@/utils/format';

import { fetchGetMyOrderHistory } from '@/apis/client';

interface OrderHistory {
  id: number;
  dinnerName: string;
  createTime: Date;
  reserveTime: Date;
  price: number;
}

const ClientOrderHistoryPage = () => {
  const link = useLink();
  const [orderList, setOrderList] = useState<OrderHistory[]>([]);
  const { isLoading } = useQuery('orderHistory', fetchGetMyOrderHistory, {
    onSuccess: async (res) => {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setOrderList(
          data.map((item: any) => ({
            id: item.orderId,
            dinnerName:
              item?.dinnerList?.reduce((pre: string, cur: string) => {
                if (pre === '') return cur;
                return `${pre}, ${cur}`;
              }, '') ?? '',
            price: item.price,
            createTime: new Date(item.createdAt),
            reserveTime: new Date(item.reserveAt),
          })),
        );
      }
    },
  });

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
      {isLoading ? (
        <Loading />
      ) : (
        <OrderListContainer>
          {orderList.map((order) => (
            <MobileItem
              key={order.id}
              type='button'
              img={null}
              title={order.dinnerName}
              subTitle={reserveTimeText(order.reserveTime)}
              desc={`${KRWFormat(order.price)} 결제(${createTimeText(order.createTime)})`}
              onClick={() => link.to(`/client/order/${order.id}`)}
            />
          ))}
        </OrderListContainer>
      )}
    </OrderHistoryContainer>
  );
};

export default ClientOrderHistoryPage;
