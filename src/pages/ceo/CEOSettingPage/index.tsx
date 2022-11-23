/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import {
  AddItemBtn,
  AddItemBtnImg,
  SettingContainer,
  SettingTitle,
  SettingTitleContainer,
} from './style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';
import DesktopSearch from '@/components/DesktopSearch';

import useSetting from '@/hooks/useSetting';
import { useLink } from '@/hooks/useLink';

import { dateFormat } from '@/utils/format';

import { CookPart } from '@/types/user';

import PlusIcon from '@/assets/icons/icon-round-add.svg';
import ReceiptIcon from '@/assets/icons/icon-receipt.svg';

const CEOSettingPage = () => {
  const [keyword, setKeyword] = useState('');

  const location = useLocation();
  const link = useLink();

  const isEmployee = !location.hash || location.hash === '#employee';
  const isMember = location.hash === '#member';

  const {
    itemList,
    removeMember,
    removeEmployee,
    setMemberList,
    setEmployeeList,
    openAddEmployeeModal,
    openUpdateEmployeeModal,
  } = useSetting();

  const changeEmployeeHandler = () => {
    setEmployeeList();
    link.to('/ceo/setting#employee');
  };

  const changeMemberHandler = () => {
    setMemberList();
    link.to('/ceo/setting#member');
  };

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.currentTarget.value;
    setKeyword(word);
  };

  const partWrapper = (partList: CookPart[] | null) => {
    if (!partList) {
      return '-';
    }

    return partList.reduce((pre, cur) => {
      if (pre === '') {
        return cur;
      }
      return `${pre}, ${cur}`;
    }, '');
  };

  useEffect(() => {
    if (isEmployee) {
      setEmployeeList();
    }
    if (isMember) {
      setMemberList();
    }
  }, []);
  return (
    <SettingContainer>
      <SettingTitleContainer>
        <SettingTitle isActive={isEmployee} onClick={changeEmployeeHandler}>
          직원 관리
        </SettingTitle>
        <SettingTitle isActive={isMember} onClick={changeMemberHandler}>
          고객 관리
        </SettingTitle>
      </SettingTitleContainer>
      <DesktopSearch value={keyword} setValueHandler={searchHandler} placeholder='이름으로 검색' />
      {isEmployee ? (
        <AddItemBtn onClick={openAddEmployeeModal} isEmployee>
          <AddItemBtnImg src={PlusIcon} />
          직원 등록
        </AddItemBtn>
      ) : null}
      {isMember ? (
        <AddItemBtn onClick={() => link.to('/ceo/setting/coupon')} isMember>
          <AddItemBtnImg src={ReceiptIcon} />
          쿠폰 목록
        </AddItemBtn>
      ) : null}
      {isEmployee ? (
        <Table headerList={['ID', 'Code', 'Name', 'Type', 'Part', 'Join', 'Score']}>
          {itemList
            .filter((item) => keyword === '' || item.name!.includes(keyword))
            .map((user) => (
              <TableRow
                key={user.id}
                dataList={[
                  user.id!,
                  user.code!,
                  user.name!,
                  user.type!,
                  partWrapper(user.part!),
                  dateFormat(user.join!, false),
                  user.score!,
                ]}
                onUpdate={() => openUpdateEmployeeModal(user.id!)}
                onDelete={() => removeEmployee(user.id!)}
              />
            ))}
        </Table>
      ) : null}
      {isMember ? (
        <Table headerList={['ID', 'Name', 'Contact', 'Address', 'Join', 'Orders', 'Pay', 'Rating']}>
          {itemList
            .filter((item) => keyword === '' || item.name!.includes(keyword))
            .map((user) => (
              <TableRow
                key={user.id}
                dataList={[
                  user.id!,
                  user.name!,
                  user.contact!,
                  user.address!,
                  dateFormat(user.join!, false),
                  user.order!,
                  user.pay!,
                  user.rating!,
                ]}
                onDelete={() => removeMember(user.id!)}
                onClick={() => link.to(`/ceo/setting/${user.id}`)}
              />
            ))}
        </Table>
      ) : null}
    </SettingContainer>
  );
};

export default CEOSettingPage;
