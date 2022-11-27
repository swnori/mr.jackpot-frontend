/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { AddItemBtn, AddItemBtnImg, StockContainer, StockTitle } from './style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';
import DesktopSearch from '@/components/DesktopSearch';

import useStock from '@/hooks/useStock';
import usePeriodicAPICall from '@/hooks/usePeriodicAPICall';

import { StockItem } from '@/types/stock';

import AddItemIcon from '@/assets/icons/icon-round-add.svg';
import { fetchGetStockList } from '@/apis/staff';

const CEOStockPage = () => {
  const [keyword, setKeyword] = useState('');
  const { itemList, setItemList, removeItem, openAddItemModal, openUpdateItemModal } = useStock();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.currentTarget.value;
    setKeyword(word);
  };

  const getStockList = async () => {
    const res = await fetchGetStockList();
    const data = await res.json();
    return data;
  };

  const data = usePeriodicAPICall<StockItem[]>(itemList, getStockList, 700);
  useEffect(() => {
    if (data?.length) {
      setItemList(data);
    }
  }, [data]);

  return (
    <StockContainer>
      <StockTitle>재고 관리</StockTitle>
      <DesktopSearch
        value={keyword}
        setValueHandler={searchHandler}
        placeholder='검색어를 입력하세요'
      />
      <AddItemBtn onClick={openAddItemModal}>
        <AddItemBtnImg src={AddItemIcon} />
        재고 추가
      </AddItemBtn>
      <Table headerList={['ID', 'Name', 'Unit', 'Amount']}>
        {itemList
          .filter((item) => keyword === '' || item.name.includes(keyword))
          .map((item, idx) => (
            <TableRow
              key={idx}
              dataList={[item.id, item.name, item.unit, item.count]}
              onDelete={() => removeItem(item.id)}
              onUpdate={() => openUpdateItemModal(item.id)}
            />
          ))}
      </Table>
    </StockContainer>
  );
};

export default CEOStockPage;
