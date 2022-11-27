/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useLayoutEffect, useState } from 'react';

import {
  CookOrderInfoBackBtn,
  CookOrderInfoBackBtnImg,
  CookOrderInfoContainer,
  CookOrderInfoSectionTitle,
  CookOrderInfoTitle,
  DinnerListContainer,
} from './style';

import PaymentInfoSection from '@/components/StaffOrderInfo/PaymentInfoSection';
import DinnerInfoSection from '@/components/StaffOrderInfo/DinnerInfoSection';
import ClientInfoSection from '@/components/StaffOrderInfo/ClientInfoSection';

import { useLink } from '@/hooks/useLink';

import { DinnerOrder } from '@/types/order';

import { UX_DELAY } from '@/constants/timer';
import BackIcon from '@/assets/icons/icon-arrow-back.svg';
import { fetchGetOrderDetail } from '@/apis/staff';

const dummyOrderInfo = {
  clientInfo: {
    orderId: 1,
    isMember: false,
    reserveName: '',
    reserveDate: new Date(),
    address: '',
    contact: '',
    requestDetail: '',
    orderDate: new Date(),
    stateId: 0,
  },
  paymentInfo: {
    price: 0,
    couponName: '',
    couponPrice: 0,
  },
  dinnerList: [],
};

interface OrderInfoValue {
  clientInfo: {
    orderId: number;
    isMember: boolean;
    reserveName: string;
    reserveDate: Date;
    address: string;
    contact: string;
    requestDetail: string;
    orderDate: Date;
    stateId: number;
  };
  paymentInfo: {
    price: number;
    couponName: string;
    couponPrice: number;
  };
  dinnerList: DinnerOrder[];
}

const CookOrderInfoPage = () => {
  const link = useLink();
  const { id } = useParams();

  const [orderInfo, setOrderInfo] = useState<OrderInfoValue>(dummyOrderInfo);

  const orderInfoMutation = useMutation('staffOrderDetail', fetchGetOrderDetail, {
    onSuccess: async (res) => {
      const data = await res.json();
      const dinnerList = data.order.dinnerList.map((dinner: any) => {
        return {
          id: dinner.id,
          type: dinner.dinnerId,
          style: dinner.styleId,
          stateId: dinner.stateId,
          menuList: dinner.menuList,
          price: 0,
        };
      });

      const {
        couponName,
        couponPrice,
        price,
        orderId,
        stateId,
        reserveName,
        reserveDate,
        createTime,
        contact,
        address,
        requestDetail,
      } = data.orderinfo;

      setOrderInfo({
        clientInfo: {
          orderId,
          isMember: false,
          reserveName,
          reserveDate: new Date(reserveDate),
          address,
          contact,
          requestDetail,
          orderDate: new Date(createTime),
          stateId,
        },
        paymentInfo: {
          couponName,
          couponPrice,
          price,
        },
        dinnerList,
      });
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  useLayoutEffect(() => {
    orderInfoMutation.mutate({ id: Number(id) });
    const interval = setInterval(() => orderInfoMutation.mutate({ id: Number(id) }), UX_DELAY);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <CookOrderInfoContainer>
      <CookOrderInfoTitle>
        주문 상세
        <CookOrderInfoBackBtn onClick={() => link.back()}>
          <CookOrderInfoBackBtnImg src={BackIcon} />
        </CookOrderInfoBackBtn>
      </CookOrderInfoTitle>
      <CookOrderInfoSectionTitle>주문 정보</CookOrderInfoSectionTitle>
      <ClientInfoSection data={orderInfo.clientInfo} />

      <CookOrderInfoSectionTitle>결제 정보</CookOrderInfoSectionTitle>
      <PaymentInfoSection data={orderInfo.paymentInfo} />

      <CookOrderInfoSectionTitle>디너 정보 및 진행 현황</CookOrderInfoSectionTitle>
      <DinnerListContainer>
        {orderInfo.dinnerList.map((dinner) => {
          const data = {
            dinnerId: dinner.id!,
            type: dinner.type,
            price: dinner.price!,
            style: dinner.style,
            menuList: dinner.menuList!,
            stateId: dinner.stateId!,
          };
          return <DinnerInfoSection key={dinner.id} data={data} showState />;
        })}
      </DinnerListContainer>
    </CookOrderInfoContainer>
  );
};

export default CookOrderInfoPage;
