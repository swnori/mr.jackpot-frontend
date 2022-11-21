import { TaskContainer, TaskTitle } from './style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';

import { useLink } from '@/hooks/useLink';

import { dateFormat, KRWFormat } from '@/utils/format';

const dummyData = [
  {
    id: 7,
    dinnerName: '발렌타인 디너, 잉글리시 디너',
    time: new Date('2022-10-10T09:48:22'),
    price: 223000,
    stateId: 1,
  },
  {
    id: 6,
    dinnerName: '발렌타인 디너, 잉글리시 디너',
    time: new Date('2022-10-10T03:00:02'),
    price: 223000,
    stateId: 1,
  },
  {
    id: 5,
    dinnerName: '발렌타인 디너, 잉글리시 디너',
    time: new Date('2022-10-09T20:34:12'),
    price: 223000,
    stateId: 1,
  },
  {
    id: 4,
    dinnerName: '발렌타인 디너, 잉글리시 디너',
    time: new Date('2022-10-09T19:12:03'),
    price: 223000,
    stateId: 1,
  },
  {
    id: 3,
    dinnerName: '발렌타인 디너, 잉글리시 디너',
    time: new Date('2022-10-09T18:53:22'),
    price: 223000,
    stateId: 1,
  },
  {
    id: 2,
    dinnerName: '발렌타인 디너, 잉글리시 디너',
    time: new Date('2022-10-09T17:30:22'),
    price: 223000,
    stateId: 1,
  },
  {
    id: 1,
    dinnerName: '발렌타인 디너, 잉글리시 디너',
    time: new Date('2022-10-09T08:48:22'),
    price: 223000,
    stateId: 1,
  },
];

const CEOTaskPage = () => {
  const link = useLink();
  return (
    <TaskContainer>
      <TaskTitle>주문 처리 현황</TaskTitle>
      <Table headerList={['ID', 'Order', 'Time', 'Price', 'Status']}>
        {dummyData.map((order) => (
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
