import { LoginBtnContainer, LoginContainer } from './style';

import Page from '@/components/Page';
import { LoginCardDesc } from '@/components/Login/Card/style';
import LoginCard from '@/components/Login/Card';
import { DesktopCardBtn } from '@/components/DesktopCard';

import ClientIcon from '@/assets/icons/icon-dining.svg';

const ClientLoginPage = () => {
  return (
    <Page type='common'>
      <LoginContainer>
        <LoginCard title='환영합니다!' img={ClientIcon}>
          <LoginCardDesc>
            Mr.대박은 단골고객 관리를 위해 <br />
            회원서비스를 제공하고 있습니다.
          </LoginCardDesc>
          <LoginBtnContainer>
            <DesktopCardBtn onClick={() => {}}>로그인 & 회원가입</DesktopCardBtn>
            <DesktopCardBtn onClick={() => {}}>비회원으로 접속</DesktopCardBtn>
          </LoginBtnContainer>
        </LoginCard>
      </LoginContainer>
    </Page>
  );
};

export default ClientLoginPage;
