import React from 'react';

import {
  StockModalBtn,
  StockModalBtnContainer,
  StockModalContainer,
  StockModalInfoContainer,
  StockModalInfoText,
  StockModalInfoTitle,
  StockModalInput,
} from '../style';

import useStock from '@/hooks/useStock';

interface StockUpdateModalValue {
  id: number;
}

const StockUpdateModal = ({ id }: StockUpdateModalValue) => {
  const { updateMode, newAmount, getItemById, inputAmountHandler, changeUpdateMode } = useStock();
  const { name, unit, amount } = getItemById(id)!;
  return (
    <StockModalContainer>
      <StockModalInfoContainer>
        <StockModalInfoTitle>재료</StockModalInfoTitle>
        <StockModalInfoText>
          {name} ({unit})
        </StockModalInfoText>
      </StockModalInfoContainer>
      <StockModalInfoContainer>
        <StockModalInfoTitle>재고</StockModalInfoTitle>
        <StockModalInfoText>{amount}</StockModalInfoText>
      </StockModalInfoContainer>
      <StockModalBtnContainer>
        <StockModalBtn
          isActive={updateMode === 'out'}
          onClick={() => changeUpdateMode('out')}
          isOut
        >
          출고
        </StockModalBtn>
        <StockModalBtn
          isActive={updateMode === 'set'}
          onClick={() => changeUpdateMode('set')}
          isSet
        >
          설정
        </StockModalBtn>
        <StockModalBtn isActive={updateMode === 'in'} onClick={() => changeUpdateMode('in')} isIn>
          입고
        </StockModalBtn>
      </StockModalBtnContainer>
      <StockModalInput
        type='number'
        pattern='\d*'
        value={newAmount ?? ''}
        onChange={(e) => inputAmountHandler(e, id)}
        placeholder='숫자 입력'
      />
    </StockModalContainer>
  );
};

export default StockUpdateModal;
