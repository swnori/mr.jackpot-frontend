import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import React, { useState } from 'react';

import { SignUpContainer, SignUpUtilContainer } from './style';

import Page from '@/components/Page';
import LoginCard from '@/components/Login/Card';
import { DesktopCardBtn, DesktopCardInput } from '@/components/DesktopCard';

import { useLink } from '@/hooks/useLink';

import { FetchError } from '@/types/fetch';

import TagIcon from '@/assets/icons/icon-tag.svg';
import ClientIcon from '@/assets/icons/icon-dining.svg';
import CallIcon from '@/assets/icons/icon-call.svg';
import { fetchSignUp } from '@/apis/client';

const ClientSignUpPage = () => {
  const link = useLink();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const inputIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value);
  };

  const inputPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const inputContactHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.currentTarget.value);
  };

  const signUpMutation = useMutation('signUp', fetchSignUp, {
    onSuccess: () => {
      toast.success('계정이 생성되었습니다.', { position: 'top-center' });
      link.to('/client/login');
    },
    onError: (err: FetchError) => {
      if (err.res.status === 401) {
        toast.error('계정 정보가 틀렸습니다.', { position: 'top-center' });
      }
    },
  });

  const signUpHandler = () => {
    if (id === '' || password === '' || name === '' || contact === '') {
      toast.warning('모든 정보를 채워주세요', { position: 'top-center' });
    } else {
      signUpMutation.mutate({ id, password, name, contact });
    }
  };

  return (
    <Page type='common'>
      <SignUpContainer>
        <LoginCard title='환영합니다!' img={ClientIcon}>
          <SignUpUtilContainer>
            <DesktopCardInput
              value={id}
              onChange={inputIdHandler}
              placeholder='사용할 ID를 입력해주세요'
            />
            <DesktopCardInput
              value={password}
              onChange={inputPasswordHandler}
              placeholder='사용할 비밀번호를 입력해주세요'
              type='password'
            />
            <DesktopCardInput
              value={name}
              onChange={inputNameHandler}
              placeholder='이름을 입력해주세요'
              img={TagIcon}
            />
            <DesktopCardInput
              value={contact}
              onChange={inputContactHandler}
              placeholder='전화번호를 입력해주세요'
              img={CallIcon}
            />
            <DesktopCardBtn onClick={signUpHandler}>회원가입</DesktopCardBtn>
          </SignUpUtilContainer>
        </LoginCard>
      </SignUpContainer>
    </Page>
  );
};

export default ClientSignUpPage;
