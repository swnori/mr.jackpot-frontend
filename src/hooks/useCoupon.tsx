import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import React from 'react';

import useModal from './useModal';

import NoticeModal from '@/components/Setting/NoticeModal';
import AddCouponModal from '@/components/Coupon/AddCouponModal';

import { CEOCouponState, CEOIssueCouponState } from '@/stores/coupon';

import CouponIcon from '@/assets/icons/icon-coupon.svg';
import { fetchDeleteCoupon, fetchIssueCoupon } from '@/apis/ceo';

const useCoupon = () => {
  const [coupon, setCoupon] = useRecoilState(CEOCouponState);
  const [issueCoupon, setIssueCoupon] = useRecoilState(CEOIssueCouponState);
  const { itemList } = coupon;
  const { newName, newDesc, newPrice, newDate } = issueCoupon;
  const { showModal, rerenderModal } = useModal();

  const getItem = (id: number) => {
    const idx = itemList.findIndex((item) => item.id === id);
    const item = itemList[idx];

    return { idx, ...item };
  };

  const issueCouponMutation = useMutation('issueCoupon', fetchIssueCoupon, {
    onSuccess: (data) => {
      showModal({
        type: 'alert',
        title: (
          <>
            <img src={CouponIcon} alt='icon-coupon' />
            쿠폰 발행
          </>
        ),
        children: (
          <NoticeModal>
            쿠폰이 생성되었습니다. <br />
            <br />
            생성된 쿠폰 번호는 <br />
            <br />
            <b>{data.Code}</b> <br />
            <br />
            입니다.
          </NoticeModal>
        ),
      });
      const newCoupon = {
        id: data.id,
        code: data.code,
        name: data.title,
        desc: data.message,
        price: data.amount,
        startDate: new Date(data.createdAt),
        endDate: new Date(data.expiresAt),
      };
      setCoupon((prev) => ({ ...prev, itemList: [...itemList, newCoupon] }));
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  const addCoupon = (name: string, desc: string, price: number | null, date: Date) => {
    issueCouponMutation.mutate({ name, desc, date, price: price ?? 0 });
  };

  const deleteCouponMutation = useMutation('deleteCoupon', fetchDeleteCoupon, {
    onSuccess: () => {
      toast.success('삭제 성공!');
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  const removeCoupon = (id: number) => {
    const { idx, ...item } = getItem(id);
    showModal({
      type: 'confirm',
      children: (
        <NoticeModal>
          <b>{item.name}</b>을(를) 삭제하시겠습니까?
        </NoticeModal>
      ),
      handleConfirm: () => {
        deleteCouponMutation.mutate({ id });
        setCoupon((prev) => ({
          ...prev,
          itemList: [...itemList.slice(0, idx), ...itemList.slice(idx + 1)],
        }));
      },
    });
  };

  const openAddCouponModal = () => {
    setIssueCoupon({
      newName: '',
      newDesc: '',
      newPrice: null,
      newDate: new Date(),
    });
    showModal({
      type: 'confirm',
      title: (
        <>
          <img src={CouponIcon} alt='icon-coupon' />
          쿠폰 발행
        </>
      ),
      children: <AddCouponModal />,
    });
  };

  const inputCouponNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setIssueCoupon((prev) => ({ ...prev, newName: text }));
    rerenderModal({
      handleConfirm: () => {
        addCoupon(text, newDesc, newPrice, newDate);
      },
    });
  };

  const inputCouponDescHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setIssueCoupon((prev) => ({ ...prev, newDesc: text }));
    rerenderModal({
      handleConfirm: () => {
        addCoupon(newName, text, newPrice, newDate);
      },
    });
  };

  const inputCouponPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setIssueCoupon((prev) => ({ ...prev, newPrice: Number(text) }));
    rerenderModal({
      handleConfirm: () => {
        addCoupon(newName, newDesc, Number(text), newDate);
      },
    });
  };

  const inputCouponDateHandler = (date: Date) => {
    setIssueCoupon((prev) => ({ ...prev, newDate: date }));
    rerenderModal({
      handleConfirm: () => {
        addCoupon(newName, newDesc, newPrice, date);
      },
    });
  };

  return {
    newName,
    newDesc,
    newDate,
    newPrice,
    itemList,
    removeCoupon,
    openAddCouponModal,
    inputCouponNameHandler,
    inputCouponDescHandler,
    inputCouponPriceHandler,
    inputCouponDateHandler,
  };
};

export default useCoupon;
