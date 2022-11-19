import StarRatingComponent from 'react-star-rating-component';
import { useState } from 'react';

import {
  DinnerListContainer,
  Margin,
  QCModalContainer,
  TaskBtn,
  TaskBtnContainer,
  TaskContainer,
  TaskTitle,
} from './style';

import DinnerInfoSection from '@/components/StaffOrderInfo/DinnerInfoSection';
import ClientInfoSection from '@/components/StaffOrderInfo/ClientInfoSection';
import DeliveryState from '@/components/DeliveryState';

import useModal from '@/hooks/useModal';

import { MenuOrder } from '@/types/order';

import QCIcon from '@/assets/icons/icon-inventory.svg';

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

const QualityCheckModal = () => {
  const [rate, setRate] = useState(0);
  return (
    <QCModalContainer>
      <StarRatingComponent name='rate1' starCount={5} value={rate} onStarClick={setRate} />
    </QCModalContainer>
  );
};

const DeliveryTaskPage = () => {
  const [isOrder, setIsOrder] = useState(true);
  const [stateId, setStateId] = useState(dummyData.clientInfo.stateId);
  const { showModal } = useModal();

  const openRatingModalHandler = () => {
    showModal({
      type: 'confirm',
      title: (
        <>
          <img src={QCIcon} alt='icon-qc' />
          품질 확인
        </>
      ),
      children: <QualityCheckModal />,
      handleConfirm: () => setStateId(8),
    });
  };
  return (
    <TaskContainer>
      <TaskTitle>
        {isOrder ? '주문 정보' : '회수 정보'} <DeliveryState isOrder={isOrder} />
      </TaskTitle>
      <ClientInfoSection data={{ ...dummyData.clientInfo, stateId }} />

      <Margin />

      {isOrder && stateId < 6 ? (
        <TaskBtnContainer>
          <TaskBtn isOrder disabled={stateId !== 4} onClick={() => setStateId(5)}>
            배달 출발
          </TaskBtn>
          <TaskBtn isOrder disabled={stateId !== 5} onClick={() => setStateId(6)}>
            배달 도착
          </TaskBtn>
        </TaskBtnContainer>
      ) : null}

      {!isOrder && stateId < 8 ? (
        <TaskBtnContainer>
          <TaskBtn isOrder={false} disabled={stateId !== 6} onClick={() => setStateId(7)}>
            회수 출발
          </TaskBtn>
          <TaskBtn
            isOrder={false}
            disabled={stateId !== 7}
            onClick={() => openRatingModalHandler()}
          >
            품질 확인
          </TaskBtn>
        </TaskBtnContainer>
      ) : null}

      {(!isOrder && stateId === 8) || (isOrder && stateId === 6) ? (
        <TaskBtn isNext onClick={() => setIsOrder((prev) => !prev)}>
          다음 주문 받기
        </TaskBtn>
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
