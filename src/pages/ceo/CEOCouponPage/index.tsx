import React, { useState } from 'react';

import {
  AddItemBtn,
  AddItemBtnImg,
  CouponBackBtn,
  CouponBackBtnImg,
  CouponContainer,
  CouponTitle,
} from './style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';
import DesktopSearch from '@/components/DesktopSearch';

import { useLink } from '@/hooks/useLink';
import useCoupon from '@/hooks/useCoupon';

import { dateFormat, KRWFormat } from '@/utils/format';

import PlusIcon from '@/assets/icons/icon-round-add.svg';
import BackIcon from '@/assets/icons/icon-arrow-back.svg';

const CEOCouponPage = () => {
  const link = useLink();
  const [keyword, setKeyword] = useState('');
  const { itemList, removeCoupon, openAddCouponModal } = useCoupon();
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.currentTarget.value;
    setKeyword(word);
  };
  return (
    <CouponContainer>
      <CouponTitle>
        고객 상세
        <CouponBackBtn onClick={() => link.back()}>
          <CouponBackBtnImg src={BackIcon} />
        </CouponBackBtn>
      </CouponTitle>
      <DesktopSearch
        value={keyword}
        setValueHandler={searchHandler}
        placeholder='이름 또는 설명으로 검색'
      />
      <AddItemBtn onClick={openAddCouponModal}>
        <AddItemBtnImg src={PlusIcon} />
        쿠폰 발행
      </AddItemBtn>
      <Table headerList={['ID', 'Name', 'Detail', 'Price', 'Expire', 'Code']}>
        {itemList
          .filter(
            (item) => keyword === '' || item.name.includes(keyword) || item.desc.includes(keyword),
          )
          .map((coupon) => (
            <TableRow
              key={coupon.id}
              dataList={[
                coupon.id,
                coupon.name,
                coupon.desc,
                KRWFormat(coupon.price),
                dateFormat(coupon.endDate!, false),
                coupon?.code ?? '-',
              ]}
              onDelete={() => {
                removeCoupon(coupon.id);
              }}
            />
          ))}
      </Table>
    </CouponContainer>
  );
};

export default CEOCouponPage;
