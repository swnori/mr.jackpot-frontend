import { MainContainer, MainTitle } from './style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';

const dummyData = [
  { id: 4, dinnerName: '발렌타인 디너, 잉글리시 디너', stateId: 0 },
  { id: 3, dinnerName: '발렌타인 디너, 잉글리시 디너', stateId: 5 },
  { id: 2, dinnerName: '발렌타인 디너, 잉글리시 디너', stateId: 8 },
  { id: 1, dinnerName: '발렌타인 디너, 잉글리시 디너', stateId: 3 },
];

const DeliveryMainPage = () => {
  return (
    <MainContainer>
      <MainTitle>주문 처리 현황</MainTitle>
      <Table headerList={['ID', 'Order', 'Status']}>
        {dummyData.map((item) => (
          <TableRow key={item.id} dataList={[item.id, item.dinnerName, item.stateId]} lastIsState />
        ))}
      </Table>
    </MainContainer>
  );
};

export default DeliveryMainPage;
