import React from 'react';

import { SearchBtn, SearchContainer, SearchImg, SearchInput } from './style';

import SearchIcon from '@/assets/icons/icon-search.svg';

interface MobileSearchValue {
  value: string;
  setValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MobileSearch = ({ value, setValueHandler }: MobileSearchValue) => {
  return (
    <SearchContainer>
      <SearchInput value={value} onChange={setValueHandler} />
      <SearchBtn>
        <SearchImg src={SearchIcon} />
      </SearchBtn>
    </SearchContainer>
  );
};

export default MobileSearch;
