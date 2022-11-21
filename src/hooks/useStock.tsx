import { useRecoilState } from 'recoil';
import React from 'react';

import useModal from './useModal';

import StockUpdateModal from '@/components/Stock/UpdateModal';
import StockAddModal from '@/components/Stock/AddModal';

import { stockState } from '@/stores/stock';

import InventoryIcon from '@/assets/icons/icon-inventory.svg';

const useStock = () => {
  const [stock, setStock] = useRecoilState(stockState);
  const { itemList, newItemName, newUnitName, newAmount, updateMode } = stock;
  const { showModal, rerenderModal } = useModal();

  const addItem = (name: string, unit: string, amount: number = 0) => {
    const nextItem = { id: itemList[0].id + 1, name, unit, amount };
    setStock((prev) => ({ ...prev, itemList: [nextItem, ...itemList] }));
  };

  const removeItem = (idx: number) => {
    const nextItemList = [...itemList.slice(0, idx), ...itemList.slice(idx + 1)];
    setStock((prev) => ({ ...prev, itemList: nextItemList }));
  };

  const updateItem = (idx: number, amount: number) => {
    const nextItem = { ...itemList[idx] };
    if (updateMode === 'in') {
      nextItem.amount += amount;
    } else if (updateMode === 'out' && nextItem.amount >= amount) {
      nextItem.amount -= amount;
    } else if (updateMode === 'set') {
      nextItem.amount = amount;
    }

    const nextItemList = [...itemList.slice(0, idx), nextItem, ...itemList.slice(idx + 1)];
    setStock((prev) => ({ ...prev, itemList: nextItemList }));
  };

  const changeUpdateMode = (mode: 'in' | 'out' | 'set') => {
    setStock((prev) => ({ ...prev, updateMode: mode }));
  };

  const inputItemNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setStock((prev) => ({ ...prev, newItemName: text }));
    rerenderModal({
      handleConfirm: () => {
        addItem(text, newUnitName);
      },
    });
  };

  const inputUnitNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setStock((prev) => ({ ...prev, newUnitName: text }));
    rerenderModal({
      handleConfirm: () => {
        addItem(newItemName, text);
      },
    });
  };

  const inputAmountHandler = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const text = e.currentTarget.value;
    setStock((prev) => ({ ...prev, newAmount: Number(text) }));
    rerenderModal({
      handleConfirm: () => {
        updateItem(idx, Number(text));
      },
    });
  };

  const openAddItemModal = () => {
    setStock((prev) => ({ ...prev, newItemName: '', newUnitName: '' }));
    showModal({
      type: 'confirm',
      title: (
        <>
          <img src={InventoryIcon} alt='icon-inventory' />
          재고 추가
        </>
      ),
      children: <StockAddModal />,
    });
  };

  const openUpdateItemModal = (idx: number) => {
    setStock((prev) => ({ ...prev, newAmount: null }));
    showModal({
      type: 'confirm',
      title: (
        <>
          <img src={InventoryIcon} alt='icon-inventory' />
          수량 조정
        </>
      ),
      children: <StockUpdateModal idx={idx} />,
    });
  };

  return {
    itemList,
    newItemName,
    newUnitName,
    newAmount,
    updateMode,
    addItem,
    removeItem,
    openAddItemModal,
    openUpdateItemModal,
    inputItemNameHandler,
    inputUnitNameHandler,
    inputAmountHandler,
    changeUpdateMode,
  };
};

export default useStock;
