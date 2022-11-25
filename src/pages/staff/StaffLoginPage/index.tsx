import { isMobile } from 'react-device-detect';

import { LoginContainer } from './style';

import Page from '@/components/Page';
import { LoginCardDesc } from '@/components/Login/Card/style';
import LoginCard from '@/components/Login/Card';
import { DesktopCardBtn, DesktopCardInput } from '@/components/DesktopCard';

import { useLink } from '@/hooks/useLink';

import IDCardIcon from '@/assets/icons/icon-id-card.svg';
import StaffIcon from '@/assets/icons/icon-chef.svg';

const StaffLoginPage = () => {
  const link = useLink();
  const loginHandler = () => {
    if (isMobile) {
      link.to('/staff/delivery/main');
    } else {
      link.to('/staff/cook/order');
    }
  };
  return (
    <Page type='common'>
      <LoginContainer>
        <LoginCard title='환영합니다!' img={StaffIcon}>
          <LoginCardDesc>직원코드를 입력하세요.</LoginCardDesc>
          <DesktopCardInput
            value=''
            onChange={() => {}}
            placeholder='직원코드 입력'
            img={IDCardIcon}
          />
          <DesktopCardBtn onClick={loginHandler}>로그인</DesktopCardBtn>
        </LoginCard>
      </LoginContainer>
    </Page>
  );
};

export default StaffLoginPage;
