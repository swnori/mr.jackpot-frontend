import { HeaderBtn, HeaderContainer, HeaderImg, HeaderLogo, HeaderTitle } from './style';

import { useLink } from '@/hooks/useLink';

import LogoImg from '@/assets/images/logo.png';
import BackIcon from '@/assets/icons/icon-arrow-back.svg';

interface HeaderValue {
  title?: string;
  type?: 'back' | 'none';
  showLogo?: boolean;
}

const Header = ({ title = '', type = 'none', showLogo = false }: HeaderValue) => {
  const link = useLink();
  return (
    <HeaderContainer>
      {type === 'back' && (
        <HeaderBtn onClick={() => link.back()}>
          <HeaderImg src={BackIcon} />
        </HeaderBtn>
      )}
      {showLogo ? <HeaderLogo src={LogoImg} /> : <HeaderTitle>{title}</HeaderTitle>}
    </HeaderContainer>
  );
};

export default Header;
