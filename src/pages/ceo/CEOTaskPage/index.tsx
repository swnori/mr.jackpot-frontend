/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from 'react-query';
import { useLayoutEffect, useState } from 'react';

import { TaskContainer, TaskTitle } from './style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';

import useMenu from '@/hooks/useMenu';
import { useLink } from '@/hooks/useLink';

import { dateFormat, KRWFormat } from '@/utils/format';

import { UX_DELAY } from '@/constants/timer';
import { fetchGetOrderList } from '@/apis/staff';

interface OrderValue {
  id: number;
  dinnerName: string;
  time: Date;
  price: number;
  stateId: number;
}

const CEOTaskPage = () => {
  const link = useLink();
  const [orderList, setOrderList] = useState<OrderValue[]>([]);
  const { getDinnerById } = useMenu();

  const getOrderListMutation = useMutation('getCEOOrderList', fetchGetOrderList, {
    onSuccess: async (res) => {
      const data = await res.json();
      setOrderList(
        data
          .filter((item: any) => item.stateId === 5)
          .map((item: any) => ({
            id: item.orderId,
            dinnerName: item.dinnerList.reduce((pre: string, cur: any) => {
              const { name } = getDinnerById(cur)!;
              if (pre === '') {
                return name;
              }
              return `${pre}, ${name}`;
            }, ''),
            time: new Date(item.reserveAt),
            price: item.price,
            stateId: item.stateId,
          })),
      );
    },
  });

  useLayoutEffect(() => {
    getOrderListMutation.mutate();
    const interval = setInterval(() => getOrderListMutation.mutate(), UX_DELAY);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <TaskContainer>
      <TaskTitle>접수된 예약 목록</TaskTitle>
      <Table headerList={['ID', 'Order', 'Time', 'Price', 'Status']}>
        {orderList
          .sort((a, b) => b.id - a.id)
          .map((order) => (
            <TableRow
              key={order.id}
              dataList={[
                order.id,
                order.dinnerName,
                dateFormat(order.time),
                KRWFormat(order.price),
                order.stateId,
              ]}
              onClick={() => link.to(`/ceo/task/${order.id}`)}
              lastIsState
            />
          ))}
      </Table>
    </TaskContainer>
  );
};

export default CEOTaskPage;
