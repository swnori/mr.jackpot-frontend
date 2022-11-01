import { HeaderBtn, HeaderContainer, HeaderImg, HeaderTitle } from './style';

import BackIcon from '@/assets/icons/icon-arrow-back.svg';

interface HeaderValue {
  title?: string;
  type?: 'back' | 'none';
}

const Header = ({ title = '', type = 'none' }: HeaderValue) => {
  return (
    <HeaderContainer>
      {type === 'back' && (
        <HeaderBtn>
          <HeaderImg src={BackIcon} />
        </HeaderBtn>
      )}
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
