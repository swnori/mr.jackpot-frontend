import {
  CEOTaskDetailBackBtn,
  CEOTaskDetailBackBtnImg,
  CEOTaskDetailBtn,
  CEOTaskDetailBtnImg,
  CEOTaskDetailContainer,
  CEOTaskDetailSectionTitle,
  CEOTaskDetailTitle,
  DinnerListContainer,
} from './style';

import PaymentInfoSection from '@/components/StaffOrderInfo/PaymentInfoSection';
import DinnerInfoSection from '@/components/StaffOrderInfo/DinnerInfoSection';
import ClientInfoSection from '@/components/StaffOrderInfo/ClientInfoSection';

import { useLink } from '@/hooks/useLink';

import { MenuOrder } from '@/types/order';

import CheckIcon from '@/assets/icons/icon-check.svg';
import BackIcon from '@/assets/icons/icon-arrow-back.svg';

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
    stateId: 1,
  },
  paymentInfo: {
    price: 270000,
    couponName: '1주년 감사 쿠폰',
    couponPrice: 30000,
  },
  dinnerList: [
    {
      id: 24,
      type: 0,
      price: 100000,
      menuList: [
        { id: 0, menuId: 0, option: [41, 46], count: 1, isDefault: false, stateId: 0 },
        { id: 1, menuId: 9, option: [null, null], count: 4, isDefault: false, stateId: 0 },
        { id: 2, menuId: 5, option: [51, null], count: 1, isDefault: false, stateId: 0 },
      ] as MenuOrder[],
      style: 1,
      stateId: 0,
    },
    {
      id: 25,
      type: 3,
      price: 100000,
      menuList: [
        { id: 3, menuId: 0, option: [44, 47], count: 1, isDefault: false, stateId: 0 },
        { id: 4, menuId: 0, option: [41, 46], count: 1, isDefault: false, stateId: 0 },
        { id: 5, menuId: 9, option: [null, null], count: 4, isDefault: false, stateId: 0 },
        { id: 6, menuId: 1, option: [55, null], count: 1, isDefault: false, stateId: 0 },
      ] as MenuOrder[],
      style: 1,
      stateId: 0,
    },
  ],
};

const CEOTaskDetailPage = () => {
  const link = useLink();
  return (
    <CEOTaskDetailContainer>
      <CEOTaskDetailTitle>
        주문 상세
        <CEOTaskDetailBackBtn onClick={() => link.back()}>
          <CEOTaskDetailBackBtnImg src={BackIcon} />
        </CEOTaskDetailBackBtn>
      </CEOTaskDetailTitle>
      <CEOTaskDetailSectionTitle>주문 정보</CEOTaskDetailSectionTitle>
      <ClientInfoSection data={dummyData.clientInfo} />

      <CEOTaskDetailSectionTitle>결제 정보</CEOTaskDetailSectionTitle>
      <PaymentInfoSection data={dummyData.paymentInfo} />

      <CEOTaskDetailSectionTitle>디너 정보 및 진행 현황</CEOTaskDetailSectionTitle>
      <DinnerListContainer>
        {dummyData.dinnerList.map((dinner) => {
          const data = {
            dinnerId: dinner.id,
            type: dinner.type,
            price: dinner.price,
            style: dinner.style,
            menuList: dinner.menuList,
            stateId: dinner.stateId,
          };
          return <DinnerInfoSection key={dinner.id} data={data} showState />;
        })}
      </DinnerListContainer>
      <CEOTaskDetailBtn>
        요리 시작 <CEOTaskDetailBtnImg src={CheckIcon} />
      </CEOTaskDetailBtn>
    </CEOTaskDetailContainer>
  );
};

export default CEOTaskDetailPage;
