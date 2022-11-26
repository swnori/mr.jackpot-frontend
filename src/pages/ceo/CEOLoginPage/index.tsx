import React, { useState } from 'react';

import { LoginContainer } from './style';

import Page from '@/components/Page';
import { LoginCardDesc } from '@/components/Login/Card/style';
import LoginCard from '@/components/Login/Card';
import { DesktopCardBtn, DesktopCardInput } from '@/components/DesktopCard';

import useLogIn from '@/hooks/useLogIn';

import CEOIcon from '@/assets/icons/icon-setting.svg';
import IDCardIcon from '@/assets/icons/icon-id-card.svg';

const CEOLoginPage = () => {
  const [code, setCode] = useState('');
  const { ceoLoginMutation } = useLogIn();

  const inputCodeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.currentTarget.value);
  };

  const ceoLoginHandler = () => {
    ceoLoginMutation.mutate({ code });
  };
  return (
    <Page type='common'>
      <LoginContainer>
        <LoginCard title='환영합니다!' img={CEOIcon}>
          <LoginCardDesc>관리자코드를 입력하세요.</LoginCardDesc>
          <DesktopCardInput
            value={code}
            onChange={inputCodeHandler}
            placeholder='관리자코드 입력'
            img={IDCardIcon}
          />
          <DesktopCardBtn onClick={ceoLoginHandler}>로그인</DesktopCardBtn>
        </LoginCard>
      </LoginContainer>
    </Page>
  );
};

export default CEOLoginPage;
