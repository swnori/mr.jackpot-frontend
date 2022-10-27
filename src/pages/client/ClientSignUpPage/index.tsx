import { SignUpContainer, SignUpUtilContainer } from './style';

import Page from '@/components/Page';
import LoginCard from '@/components/Login/Card';
import { DesktopCardBtn, DesktopCardInput } from '@/components/DesktopCard';

import { useLink } from '@/hooks/useLink';

import TagIcon from '@/assets/icons/icon-tag.svg';
import ClientIcon from '@/assets/icons/icon-dining.svg';
import CallIcon from '@/assets/icons/icon-call.svg';

const ClientSignUpPage = () => {
  const link = useLink();
  return (
    <Page type='common'>
      <SignUpContainer>
        <LoginCard title='환영합니다!' img={ClientIcon}>
          <SignUpUtilContainer>
            <DesktopCardInput onChange={() => {}} placeholder='사용할 ID를 입력해주세요' />
            <DesktopCardInput onChange={() => {}} placeholder='사용할 비밀번호를 입력해주세요' />
            <DesktopCardInput onChange={() => {}} placeholder='이름을 입력해주세요' img={TagIcon} />
            <DesktopCardInput
              onChange={() => {}}
              placeholder='전화번호를 입력해주세요'
              img={CallIcon}
            />
            <DesktopCardBtn onClick={() => link.to('/client/login')}>회원가입</DesktopCardBtn>
          </SignUpUtilContainer>
        </LoginCard>
      </SignUpContainer>
    </Page>
  );
};

export default ClientSignUpPage;
