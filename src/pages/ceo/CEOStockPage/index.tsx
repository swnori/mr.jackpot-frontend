import React, { useState } from 'react';

import { AddItemBtn, AddItemBtnImg, StockContainer, StockTitle } from './style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';
import DesktopSearch from '@/components/DesktopSearch';

import useStock from '@/hooks/useStock';

import AddItemIcon from '@/assets/icons/icon-round-add.svg';

const CEOStockPage = () => {
  const [keyword, setKeyword] = useState('');
  const { itemList, removeItem, openAddItemModal, openUpdateItemModal } = useStock();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.currentTarget.value;
    setKeyword(word);
  };

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
              dataList={[item.id, item.name, item.unit, item.amount]}
              onDelete={() => removeItem(idx)}
              onUpdate={() => openUpdateItemModal(idx)}
            />
          ))}
      </Table>
    </StockContainer>
  );
};

export default CEOStockPage;
