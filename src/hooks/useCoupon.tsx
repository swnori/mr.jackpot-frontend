import { useRecoilState } from 'recoil';
import React from 'react';

import useModal from './useModal';

import NoticeModal from '@/components/Setting/NoticeModal';
import AddCouponModal from '@/components/Coupon/AddCouponModal';

import { CEOCouponState } from '@/stores/coupon';

import CouponIcon from '@/assets/icons/icon-coupon.svg';

const useCoupon = () => {
  const [coupon, setCoupon] = useRecoilState(CEOCouponState);
  const { itemList, newName, newDesc, newPrice, newDate } = coupon;
  const { showModal, rerenderModal } = useModal();

  const getItem = (id: number) => {
    const idx = itemList.findIndex((item) => item.id === id);
    const item = itemList[idx];

    return { idx, ...item };
  };

  const addCoupon = (name: string, desc: string, price: number | null, date: Date) => {
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
          <b>-</b> <br />
          <br />
          입니다.
        </NoticeModal>
      ),
    });
    const newCoupon = {
      id: itemList[0].id! + 1,
      name,
      desc,
      price: price!,
      startDate: new Date(),
      endDate: date,
    };
    setCoupon((prev) => ({ ...prev, itemList: [newCoupon, ...itemList] }));
  };

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
        setCoupon((prev) => ({
          ...prev,
          itemList: [...itemList.slice(0, idx), ...itemList.slice(idx + 1)],
        }));
      },
    });
  };

  const openAddCouponModal = () => {
    setCoupon((prev) => ({
      ...prev,
      newName: '',
      newDesc: '',
      newPrice: null,
      newDate: new Date(),
    }));
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
    setCoupon((prev) => ({ ...prev, newName: text }));
    rerenderModal({
      handleConfirm: () => {
        addCoupon(text, newDesc, newPrice, newDate);
      },
    });
  };

  const inputCouponDescHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setCoupon((prev) => ({ ...prev, newDesc: text }));
    rerenderModal({
      handleConfirm: () => {
        addCoupon(newName, text, newPrice, newDate);
      },
    });
  };

  const inputCouponPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setCoupon((prev) => ({ ...prev, newPrice: Number(text) }));
    rerenderModal({
      handleConfirm: () => {
        addCoupon(newName, newDesc, Number(text), newDate);
      },
    });
  };

  const inputCouponDateHandler = (date: Date) => {
    setCoupon((prev) => ({ ...prev, newDate: date }));
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
