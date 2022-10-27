import { LoginContainer } from './style';

import Page from '@/components/Page';
import { LoginCardDesc } from '@/components/Login/Card/style';
import LoginCard from '@/components/Login/Card';
import { DesktopCardBtn, DesktopCardInput } from '@/components/DesktopCard';

import IDCardIcon from '@/assets/icons/icon-id-card.svg';
import StaffIcon from '@/assets/icons/icon-chef.svg';

const StaffLoginPage = () => {
  return (
    <Page type='common'>
      <LoginContainer>
        <LoginCard title='환영합니다!' img={StaffIcon}>
          <LoginCardDesc>직원코드를 입력하세요.</LoginCardDesc>
          <DesktopCardInput onChange={() => {}} placeholder='직원코드 입력' img={IDCardIcon} />
          <DesktopCardBtn onClick={() => {}}>로그인</DesktopCardBtn>
        </LoginCard>
      </LoginContainer>
    </Page>
  );
};

export default StaffLoginPage;
