/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useLayoutEffect, useState } from 'react';

import {
  CEOOrderInfoAcceptBtn,
  CEOOrderInfoBackBtn,
  CEOOrderInfoBackBtnImg,
  CEOOrderInfoBtnContainer,
  CEOOrderInfoBtnImg,
  CEOOrderInfoContainer,
  CEOOrderInfoRejectBtn,
  CEOOrderInfoSectionTitle,
  CEOOrderInfoTitle,
  DinnerListContainer,
} from './style';

import PaymentInfoSection from '@/components/StaffOrderInfo/PaymentInfoSection';
import DinnerInfoSection from '@/components/StaffOrderInfo/DinnerInfoSection';
import ClientInfoSection from '@/components/StaffOrderInfo/ClientInfoSection';

import { useLink } from '@/hooks/useLink';

import { DinnerOrder } from '@/types/order';

import { UX_DELAY } from '@/constants/timer';
import CheckIcon from '@/assets/icons/icon-check.svg';
import BackIcon from '@/assets/icons/icon-arrow-back.svg';
import { fetchGetOrderDetail } from '@/apis/staff';
import { fetchAcceptOrder, fetchRejectOrder } from '@/apis/ceo';

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

const CEOOrderInfoPage = () => {
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
      toast.error('??????!');
    },
  });

  const getOrderInfo = () => {
    orderInfoMutation.mutate({ id: Number(id) });
  };

  const acceptOrderMutation = useMutation('acceptOrder', fetchAcceptOrder, {
    onSuccess: () => {
      getOrderInfo();
      toast.success('?????? ?????? ??????!');
    },
    onError: () => {
      toast.error('??????!');
    },
  });

  const acceptOrder = () => {
    acceptOrderMutation.mutate({ id: Number(id) });
  };

  const rejectOrderMutation = useMutation('rejectOrder', fetchRejectOrder, {
    onSuccess: () => {
      getOrderInfo();
      toast.success('?????? ?????? ??????!');
    },
    onError: () => {
      toast.error('??????!');
    },
  });

  const rejectOrder = () => {
    rejectOrderMutation.mutate({ id: Number(id) });
  };

  useLayoutEffect(() => {
    getOrderInfo();
    const interval = setInterval(() => getOrderInfo(), UX_DELAY);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <CEOOrderInfoContainer>
      <CEOOrderInfoTitle>
        ?????? ??????
        <CEOOrderInfoBackBtn onClick={() => link.back()}>
          <CEOOrderInfoBackBtnImg src={BackIcon} />
        </CEOOrderInfoBackBtn>
      </CEOOrderInfoTitle>
      <CEOOrderInfoSectionTitle>?????? ??????</CEOOrderInfoSectionTitle>
      <ClientInfoSection data={orderInfo.clientInfo} />

      <CEOOrderInfoSectionTitle>?????? ??????</CEOOrderInfoSectionTitle>
      <PaymentInfoSection data={orderInfo.paymentInfo} />

      <CEOOrderInfoSectionTitle>?????? ?????? ??? ?????? ??????</CEOOrderInfoSectionTitle>
      <DinnerListContainer>
        {orderInfo.dinnerList.map((dinner) => {
          const data = {
            dinnerId: dinner.id!,
            type: dinner.type,
            style: dinner.style,
            menuList: dinner.menuList!,
            stateId: dinner.stateId!,
          };
          return <DinnerInfoSection key={dinner.id} data={data} showState />;
        })}
      </DinnerListContainer>
      <CEOOrderInfoBtnContainer>
        <CEOOrderInfoRejectBtn onClick={rejectOrder} disabled={orderInfo.clientInfo.stateId !== 4}>
          ?????? ?????? <CEOOrderInfoBtnImg src={CheckIcon} />
        </CEOOrderInfoRejectBtn>
        <CEOOrderInfoAcceptBtn onClick={acceptOrder} disabled={orderInfo.clientInfo.stateId !== 4}>
          ?????? ?????? <CEOOrderInfoBtnImg src={CheckIcon} />
        </CEOOrderInfoAcceptBtn>
      </CEOOrderInfoBtnContainer>
    </CEOOrderInfoContainer>
  );
};

export default CEOOrderInfoPage;
