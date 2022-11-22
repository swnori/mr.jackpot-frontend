import {
  MemberInfoBackBtn,
  MemberInfoBackBtnImg,
  MemberInfoContainer,
  MemberInfoSectionTitle,
  MemberInfoTitle,
} from './style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';
import MemberInfoSection from '@/components/MemberInfo';

import { useLink } from '@/hooks/useLink';

import { dateFormat, KRWFormat } from '@/utils/format';

import BackIcon from '@/assets/icons/icon-arrow-back.svg';

const dummyData = {
  memberInfo: {
    id: 4,
    name: '최손님',
    contact: '01045678901',
    address: '서울시 동대문구',
    join: new Date('2022-07-25'),
    order: 37,
    pay: 123456789,
    rating: 3.5,
  },
  orderList: [
    {
      id: 5,
      dinnerName: '발렌타인 디너, 잉글리시 디너',
      time: new Date('2022-10-09T20:34:12'),
      price: 223000,
      stateId: 3,
    },
    {
      id: 4,
      dinnerName: '발렌타인 디너, 잉글리시 디너',
      time: new Date('2022-10-09T19:12:03'),
      price: 223000,
      stateId: 2,
    },
    {
      id: 3,
      dinnerName: '발렌타인 디너, 잉글리시 디너',
      time: new Date('2022-10-09T18:53:22'),
      price: 223000,
      stateId: 7,
    },
    {
      id: 2,
      dinnerName: '발렌타인 디너, 잉글리시 디너',
      time: new Date('2022-10-09T17:30:22'),
      price: 223000,
      stateId: 8,
    },
    {
      id: 1,
      dinnerName: '발렌타인 디너, 잉글리시 디너',
      time: new Date('2022-10-09T08:48:22'),
      price: 223000,
      stateId: 8,
    },
  ],
};

const CEOMemberInfoPage = () => {
  const link = useLink();
  return (
    <MemberInfoContainer>
      <MemberInfoTitle>
        고객 상세
        <MemberInfoBackBtn onClick={() => link.back()}>
          <MemberInfoBackBtnImg src={BackIcon} />
        </MemberInfoBackBtn>
      </MemberInfoTitle>
      <MemberInfoSectionTitle>고객 정보</MemberInfoSectionTitle>
      <MemberInfoSection data={dummyData.memberInfo} />
      <MemberInfoSectionTitle>주문 이력</MemberInfoSectionTitle>
      <Table headerList={['ID', 'Order', 'Time', 'Price', 'Status']}>
        {dummyData.orderList.map((order) => (
          <TableRow
            key={order.id}
            dataList={[
              order.id,
              order.dinnerName,
              dateFormat(order.time),
              KRWFormat(order.price),
              order.stateId,
            ]}
            lastIsState
          />
        ))}
      </Table>
    </MemberInfoContainer>
  );
};

export default CEOMemberInfoPage;
