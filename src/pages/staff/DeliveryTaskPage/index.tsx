import { TaskBtn, TaskBtnContainer, TaskContainer, TaskTitle } from './style';

import ClientInfoSection from '@/components/StaffOrderInfo/ClientInfoSection';
import DeliveryState from '@/components/DeliveryState';

const dummyData = {
  clientInfo: {
    orderId: 1,
    isMember: false,
    reserveName: '김고객',
    reserveDate: new Date('2022-11-28T19:30:00'),
    address: '서울시 동대문구 서울시립대로 163',
    contact: '01012345678',
    requestDetail: '문 앞에 놓고 가주세요 냄새나는 치즈는 빼주시구요',
    orderDate: new Date('2022-11-14T15:31:46'),
    stateId: 4,
  },
  dinnerList: [
    {
      id: 24,
      type: 0,
      mainDish: [{ menuId: 0, option: [41, 46], count: 1, isDefault: false }],
      side: [{ menuId: 9, option: [null, null], count: 4, isDefault: false }],
      drink: [{ menuId: 5, option: [51, null], count: 1, isDefault: false }],
      style: 1,
    },
    {
      id: 25,
      type: 3,
      mainDish: [
        { menuId: 0, option: [44, 47], count: 1, isDefault: false },
        { menuId: 0, option: [41, 46], count: 1, isDefault: false },
      ],
      side: [{ menuId: 9, option: [null, null], count: 4, isDefault: false }],
      drink: [{ menuId: 1, option: [55, null], count: 1, isDefault: false }],
      style: 1,
    },
  ],
};

const DeliveryTaskPage = () => {
  const isOrder = true;
  return (
    <TaskContainer>
      <TaskTitle>
        {isOrder ? '주문 정보' : '회수 정보'} <DeliveryState isOrder={isOrder} />
      </TaskTitle>
      <ClientInfoSection data={dummyData.clientInfo} />
      {isOrder && dummyData.clientInfo.stateId < 6 ? (
        <TaskBtnContainer>
          <TaskBtn isOrder disabled={dummyData.clientInfo.stateId !== 4}>
            배달 출발
          </TaskBtn>
          <TaskBtn isOrder disabled={dummyData.clientInfo.stateId !== 5}>
            배달 도착
          </TaskBtn>
        </TaskBtnContainer>
      ) : null}

      {!isOrder && dummyData.clientInfo.stateId < 8 ? (
        <TaskBtnContainer>
          <TaskBtn isOrder={false} disabled={dummyData.clientInfo.stateId !== 6}>
            회수 출발
          </TaskBtn>
          <TaskBtn isOrder={false} disabled={dummyData.clientInfo.stateId !== 7}>
            품질 확인
          </TaskBtn>
        </TaskBtnContainer>
      ) : null}

      {(!isOrder && dummyData.clientInfo.stateId === 8) ||
      (isOrder && dummyData.clientInfo.stateId === 6) ? (
        <TaskBtn isNext>다음 주문 받기</TaskBtn>
      ) : null}

      <TaskTitle>디너 정보</TaskTitle>
    </TaskContainer>
  );
};

export default DeliveryTaskPage;
