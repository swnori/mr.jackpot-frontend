/* eslint-disable react-hooks/exhaustive-deps */
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useLayoutEffect, useState } from 'react';

import {
  CookStyleDetailBackBtn,
  CookStyleDetailBackBtnImg,
  CookStyleDetailBtn,
  CookStyleDetailBtnImg,
  CookStyleDetailContainer,
  CookStyleDetailTitle,
} from './style';

import DinnerInfoSection from '@/components/StaffOrderInfo/DinnerInfoSection';

import { useLink } from '@/hooks/useLink';

import { MenuOrder } from '@/types/order';

import { UX_DELAY } from '@/constants/timer';
import CheckIcon from '@/assets/icons/icon-check.svg';
import BackIcon from '@/assets/icons/icon-arrow-back.svg';
import { fetchGetOrderDetail, fetchTaskNextStep } from '@/apis/staff';

const dummyData = {
  id: 24,
  type: 1,
  menuList: [] as MenuOrder[],
  style: 1,
  stateId: 4,
};

const CookStyleDetailPage = () => {
  const link = useLink();
  const { oid, did } = useParams();
  const initial = {
    dinnerId: dummyData.id,
    type: dummyData.type,
    style: dummyData.style,
    menuList: dummyData.menuList,
    stateId: dummyData.stateId,
  };
  const [info, setInfo] = useState(initial);

  const orderInfoMutation = useMutation('staffStyleDetail', fetchGetOrderDetail, {
    onSuccess: async (res) => {
      const data = await res.json();
      const dinner = data.order.dinnerList.find((item: any) => item.id === Number(did));

      setInfo({
        dinnerId: Number(did),
        type: dinner.dinnerId,
        style: dinner.styleId,
        stateId: dinner.stateId,
        menuList: dinner.menuList,
      });
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  const getDinnerInfo = () => {
    orderInfoMutation.mutate({ id: Number(oid) });
  };

  const taskNextStepMutation = useMutation('staffStyleNextStep', fetchTaskNextStep, {
    onSuccess: () => {
      getDinnerInfo();
      toast.success('포장 완료!');
    },
    onError: () => {},
  });

  const isAllComplete = info.menuList.every((menu) => menu.stateId === 3);

  useLayoutEffect(() => {
    getDinnerInfo();
    const interval = setInterval(() => getDinnerInfo(), UX_DELAY);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <CookStyleDetailContainer>
      <CookStyleDetailTitle>
        디너 상세
        <CookStyleDetailBackBtn onClick={() => link.back()}>
          <CookStyleDetailBackBtnImg src={BackIcon} />
        </CookStyleDetailBackBtn>
      </CookStyleDetailTitle>
      <DinnerInfoSection data={info} showState />;
      <CookStyleDetailBtn
        onClick={() => taskNextStepMutation.mutate({ id: Number(did) })}
        disabled={!isAllComplete}
      >
        포장 완료 <CookStyleDetailBtnImg src={CheckIcon} />
      </CookStyleDetailBtn>
    </CookStyleDetailContainer>
  );
};

export default CookStyleDetailPage;
