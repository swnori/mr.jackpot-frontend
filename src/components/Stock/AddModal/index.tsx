import {
  StockModalContainer,
  StockModalInput,
  StockModalInputContainer,
  StockModalInputTitle,
} from '../style';

import useStock from '@/hooks/useStock';

const StockAddModal = () => {
  const { newItemName, newUnitName, inputItemNameHandler, inputUnitNameHandler } = useStock();

  return (
    <StockModalContainer>
      <StockModalInputContainer>
        <StockModalInputTitle>재료 이름</StockModalInputTitle>
        <StockModalInput
          value={newItemName}
          onChange={inputItemNameHandler}
          placeholder='재료 이름 입력'
        />
      </StockModalInputContainer>
      <StockModalInputContainer>
        <StockModalInputTitle>단위</StockModalInputTitle>
        <StockModalInput
          value={newUnitName}
          onChange={inputUnitNameHandler}
          placeholder='단위 입력(ex. 1 개)'
        />
      </StockModalInputContainer>
    </StockModalContainer>
  );
};

export default StockAddModal;
