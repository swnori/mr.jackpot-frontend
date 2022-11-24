import { IntroBtnContainer, IntroContainer } from './style';

import Page from '@/components/Page';
import { LoginCardDesc } from '@/components/Login/Card/style';
import LoginCard from '@/components/Login/Card';
import { DesktopCardBtn } from '@/components/DesktopCard';

import useLogIn from '@/hooks/useLogIn';
import { useLink } from '@/hooks/useLink';

import ClientIcon from '@/assets/icons/icon-dining.svg';

const ClientIntroPage = () => {
  const link = useLink();

  const { nonMemberLoginMutation } = useLogIn();

  const nonMemberLoginHandler = () => {
    nonMemberLoginMutation.mutate();
  };

  return (
    <Page type='common'>
      <IntroContainer>
        <LoginCard title='환영합니다!' img={ClientIcon}>
          <LoginCardDesc>
            Mr.대박은 단골고객 관리를 위해 <br />
            회원서비스를 제공하고 있습니다.
          </LoginCardDesc>
          <IntroBtnContainer>
            <DesktopCardBtn onClick={() => link.to('/client/login')}>
              로그인 & 회원가입
            </DesktopCardBtn>
            <DesktopCardBtn onClick={nonMemberLoginHandler}>비회원으로 접속</DesktopCardBtn>
          </IntroBtnContainer>
        </LoginCard>
      </IntroContainer>
    </Page>
  );
};

export default ClientIntroPage;
