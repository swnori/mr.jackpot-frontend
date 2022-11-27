import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import React from 'react';

import useModal from './useModal';

import AddClientCouponModal from '@/components/Coupon/AddClientCouponModal';

import { clientCouponState, clientInputCouponState, selectedCouponState } from '@/stores/coupon';

import CouponIcon from '@/assets/icons/icon-coupon.svg';
import { fetchInputCoupon } from '@/apis/client';

const useClientCoupon = () => {
  const couponList = useRecoilValue(clientCouponState);
  const resetCouponList = useResetRecoilState(clientCouponState);
  const [couponCode, setCouponCode] = useRecoilState(clientInputCouponState);
  const [selectedCouponId, setSelectedCouponId] = useRecoilState(selectedCouponState);

  const { rerenderModal, showModal } = useModal();

  const selectCoupon = (id: number) => {
    setSelectedCouponId(id);
  };

  const gainCouponMutation = useMutation('gainCoupon', fetchInputCoupon, {
    onSuccess: () => {
      resetCouponList();
    },
    onError: () => {
      toast.error('에러!', { position: 'top-center' });
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
