import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import React from 'react';

import useModal from './useModal';

import AddClientCouponModal from '@/components/Coupon/AddClientCouponModal';

import { clientCouponState, clientInputCouponState, selectedCouponState } from '@/stores/coupon';

import { FetchError } from '@/types/fetch';

import CouponIcon from '@/assets/icons/icon-coupon.svg';
import { fetchInputCoupon } from '@/apis/client';

const useClientCoupon = () => {
  const [couponList, setCouponList] = useRecoilState(clientCouponState);
  const [couponCode, setCouponCode] = useRecoilState(clientInputCouponState);
  const [selectedCouponId, setSelectedCouponId] = useRecoilState(selectedCouponState);

  const { rerenderModal, showModal } = useModal();

  const selectCoupon = (id: number) => {
    setSelectedCouponId(id);
  };

  const gainCouponMutation = useMutation('gainCoupon', fetchInputCoupon, {
    onSuccess: (data) => {
      setCouponList((prev) => [
        ...prev,
        {
          id: data.id,
          name: data.title,
          desc: data.message,
          price: data.amount,
          startDate: new Date(data.createdAt),
          endDate: new Date(data.expiresAt),
        },
      ]);
    },
    onError: (err: FetchError) => {
      if (err.res.status === 400) {
        toast.error('이미 발급 받은 쿠폰입니다!', { position: 'top-center' });
      } else if (err.res.status === 401) {
        toast.error('존재하지 않는 쿠폰입니다!', { position: 'top-center' });
      } else {
        toast.error('에러!', { position: 'top-center' });
      }
    },
  });

  const addCoupon = (code: string) => {
    gainCouponMutation.mutate({ code });
  };

  const openAddCouponModal = () => {
    setCouponCode({ code: '' });
    showModal({
      type: 'confirm',
      title: (
        <>
          <img src={CouponIcon} alt='icon-coupon' />
          쿠폰 코드
        </>
      ),
      children: <AddClientCouponModal />,
    });
  };

  const inputCouponCodeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setCouponCode({ code: text });
    rerenderModal({
      handleConfirm: () => {
        addCoupon(text);
      },
    });
  };

  return {
    couponList,
    couponCode,
    selectedCouponId,
    selectCoupon,
    openAddCouponModal,
    inputCouponCodeHandler,
  };
};

export default useClientCoupon;
