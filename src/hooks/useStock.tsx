import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import React from 'react';

import useModal from './useModal';

import StockUpdateModal from '@/components/Stock/UpdateModal';
import StockAddModal from '@/components/Stock/AddModal';

import { stockState } from '@/stores/stock';

import { StockItem } from '@/types/stock';

import InventoryIcon from '@/assets/icons/icon-inventory.svg';
import { fetchAddItem, fetchDeleteItem, fetchUpdateItem } from '@/apis/staff';

const useStock = () => {
  const [stock, setStock] = useRecoilState(stockState);
  const { itemList, newItemName, newUnitName, newAmount, updateMode } = stock;
  const { showModal, rerenderModal } = useModal();

  const getItemById = (id: number) => itemList.find((item) => item.id === id);

  const setItemList = (items: StockItem[]) => {
    setStock((prev) => ({ ...prev, itemList: items }));
  };

  const addItemMutation = useMutation('stockAddItem', fetchAddItem, {
    onSuccess: () => {
      toast.success('재고 추가 성공!');
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  const addItem = (name: string, unit: string) => {
    addItemMutation.mutate({ name, unit });
  };

  const removeItemMutation = useMutation('stockRemoveItem', fetchDeleteItem, {
    onSuccess: () => {
      toast.success('재고 삭제 완료!');
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  const removeItem = (id: number) => {
    removeItemMutation.mutate({ id });
  };

  const updateItemMutation = useMutation('stockUpdateItem', fetchUpdateItem, {
    onSuccess: () => {
      toast.success('재고 수정 완료!');
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  const updateItem = (id: number, amount: number) => {
    let nextAmount = getItemById(id)!.amount;
    if (updateMode === 'in') {
      nextAmount += amount;
    } else if (updateMode === 'out' && nextAmount >= amount) {
      nextAmount -= amount;
    } else if (updateMode === 'set') {
      nextAmount = amount;
    }
    updateItemMutation.mutate({ id, count: nextAmount });
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

  const inputAmountHandler = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const text = e.currentTarget.value;
    setStock((prev) => ({ ...prev, newAmount: Number(text) }));
    rerenderModal({
      handleConfirm: () => {
        updateItem(id, Number(text));
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

  const openUpdateItemModal = (id: number) => {
    setStock((prev) => ({ ...prev, newAmount: null }));
    showModal({
      type: 'confirm',
      title: (
        <>
          <img src={InventoryIcon} alt='icon-inventory' />
          수량 조정
        </>
      ),
      children: <StockUpdateModal id={id} />,
    });
  };

  return {
    itemList,
    newItemName,
    newUnitName,
    newAmount,
    updateMode,
    setItemList,
    getItemById,
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
