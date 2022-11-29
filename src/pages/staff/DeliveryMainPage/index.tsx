/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from 'react-query';
import { useLayoutEffect, useState } from 'react';

import { MainContainer, MainTitle } from './style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';

import useMenu from '@/hooks/useMenu';

import { UX_DELAY } from '@/constants/timer';
import { fetchGetOrderList } from '@/apis/staff';

interface OrderValue {
  id: number;
  dinnerName: string;
  stateId: number;
}

const DeliveryMainPage = () => {
  const [orderList, setOrderList] = useState<OrderValue[]>([]);
  const { getDinnerById } = useMenu();

  const getOrderListMutation = useMutation('getCEOOrderList', fetchGetOrderList, {
    onSuccess: async (res) => {
      const data = await res.json();
      setOrderList(
        data.map((item: any) => ({
          id: item.orderId,
          dinnerName: item.dinnerList.reduce((pre: string, cur: any) => {
            const { name } = getDinnerById(cur)!;
            if (pre === '') {
              return name;
            }
            return `${pre}, ${name}`;
          }, ''),
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
    <MainContainer>
      <MainTitle>주문 처리 현황</MainTitle>
      <Table headerList={['ID', 'Order', 'Status']}>
        {orderList
          .sort((a, b) => b.id - a.id)
          .map((item) => (
            <TableRow
              key={item.id}
              dataList={[item.id, item.dinnerName, item.stateId]}
              lastIsState
            />
          ))}
      </Table>
    </MainContainer>
  );
};

export default DeliveryMainPage;
