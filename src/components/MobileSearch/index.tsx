import { SearchBtn, SearchContainer, SearchImg, SearchInput } from './style';

import SearchIcon from '@/assets/icons/icon-search.svg';

const MobileSearch = () => {
  return (
    <SearchContainer>
      <SearchInput />
      <SearchBtn>
        <SearchImg src={SearchIcon} />
      </SearchBtn>
    </SearchContainer>
  );
};

export default MobileSearch;
