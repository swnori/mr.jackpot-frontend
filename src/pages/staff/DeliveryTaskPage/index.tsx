import {
  DinnerListContainer,
  Margin,
  TaskBtn,
  TaskBtnContainer,
  TaskContainer,
  TaskTitle,
} from './style';

import DinnerInfoSection from '@/components/StaffOrderInfo/DinnerInfoSection';
import ClientInfoSection from '@/components/StaffOrderInfo/ClientInfoSection';
import DeliveryState from '@/components/DeliveryState';

import { MenuOrder } from '@/types/order';

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
      price: 100000,
      menuList: [
        { id: 0, menuId: 0, option: [41, 46], count: 1, isDefault: false },
        { id: 1, menuId: 9, option: [null, null], count: 4, isDefault: false },
        { id: 2, menuId: 5, option: [51, null], count: 1, isDefault: false },
      ] as MenuOrder[],
      style: 1,
    },
    {
      id: 25,
      type: 3,
      price: 100000,
      menuList: [
        { id: 3, menuId: 0, option: [44, 47], count: 1, isDefault: false },
        { id: 4, menuId: 0, option: [41, 46], count: 1, isDefault: false },
        { id: 5, menuId: 9, option: [null, null], count: 4, isDefault: false },
        { id: 6, menuId: 1, option: [55, null], count: 1, isDefault: false },
      ] as MenuOrder[],
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

      <Margin />

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

      <DinnerListContainer>
        {dummyData.dinnerList.map((dinner) => {
          const data = {
            dinnerId: dinner.id,
            type: dinner.type,
            price: dinner.price,
            style: dinner.style,
            menuList: dinner.menuList,
            stateId: 8,
          };
          return <DinnerInfoSection key={dinner.id} data={data} />;
        })}
      </DinnerListContainer>
    </TaskContainer>
  );
};

export default DeliveryTaskPage;
