import React from 'react';

import { SearchBtn, SearchContainer, SearchImg, SearchInput } from './style';

import SearchIcon from '@/assets/icons/icon-search.svg';

interface DesktopSearchValue {
  value: string;
  setValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const DesktopSearch = ({ value, setValueHandler, placeholder = '' }: DesktopSearchValue) => {
  return (
    <SearchContainer>
      <SearchInput value={value} onChange={setValueHandler} placeholder={placeholder} />
      <SearchBtn>
        <SearchImg src={SearchIcon} />
      </SearchBtn>
    </SearchContainer>
  );
};

export default DesktopSearch;
