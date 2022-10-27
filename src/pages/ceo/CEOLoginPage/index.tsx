import { LoginContainer } from './style';

import Page from '@/components/Page';
import { LoginCardDesc } from '@/components/Login/Card/style';
import LoginCard from '@/components/Login/Card';
import { DesktopCardBtn, DesktopCardInput } from '@/components/DesktopCard';

import CEOIcon from '@/assets/icons/icon-setting.svg';
import IDCardIcon from '@/assets/icons/icon-id-card.svg';

const CEOLoginPage = () => {
  return (
    <Page type='common'>
      <LoginContainer>
        <LoginCard title='환영합니다!' img={CEOIcon}>
          <LoginCardDesc>관리자코드를 입력하세요.</LoginCardDesc>
          <DesktopCardInput onChange={() => {}} placeholder='관리자코드 입력' img={IDCardIcon} />
          <DesktopCardBtn onClick={() => {}}>로그인</DesktopCardBtn>
        </LoginCard>
      </LoginContainer>
    </Page>
  );
};

export default CEOLoginPage;
