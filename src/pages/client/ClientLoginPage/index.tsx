import { LoginBtnContainer, LoginContainer, LoginUtilContainer } from './style';

import Page from '@/components/Page';
import { LoginCardDesc } from '@/components/Login/Card/style';
import LoginCard from '@/components/Login/Card';
import { DesktopCardBtn, DesktopCardInput } from '@/components/DesktopCard';

import { useLink } from '@/hooks/useLink';

import ClientIcon from '@/assets/icons/icon-dining.svg';

const ClientLoginPage = () => {
  const link = useLink();
  return (
    <Page type='common'>
      <LoginContainer>
        <LoginCard title='환영합니다!' img={ClientIcon}>
          <LoginCardDesc>
            Mr.대박은 단골고객 관리를 위해 <br />
            회원서비스를 제공하고 있습니다.
          </LoginCardDesc>
          <LoginUtilContainer>
            <DesktopCardInput onChange={() => {}} placeholder='ID를 입력해주세요' />
            <DesktopCardInput onChange={() => {}} placeholder='비밀번호를 입력해주세요' />
            <LoginBtnContainer>
              <DesktopCardBtn onClick={() => link.to('/client/signup')}>회원가입</DesktopCardBtn>
              <DesktopCardBtn onClick={() => link.to('/client/main')}>로그인</DesktopCardBtn>
            </LoginBtnContainer>
            <DesktopCardBtn onClick={() => link.to('/client/main')}>비회원으로 접속</DesktopCardBtn>
          </LoginUtilContainer>
        </LoginCard>
      </LoginContainer>
    </Page>
  );
};

export default ClientLoginPage;
