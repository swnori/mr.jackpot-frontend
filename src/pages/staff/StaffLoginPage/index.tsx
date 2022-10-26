import { LoginContainer } from './style';

import Page from '@/components/Page';
import LoginCard from '@/components/Login/Card';

import StaffIcon from '@/assets/icons/icon-chef.svg';

const StaffLoginPage = () => {
  return (
    <Page type='common'>
      <LoginContainer>
        <LoginCard title='환영합니다!' img={StaffIcon}>
          Staff Login
        </LoginCard>
      </LoginContainer>
    </Page>
  );
};

export default StaffLoginPage;
