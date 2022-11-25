import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { ChangeEvent, useState } from 'react';

import {
  LogInBtn,
  SignOutBtn,
  UpdateBtnContainer,
  UpdateBtnImg,
  UserInfoContainer,
  UserInfoInput,
  UserInfoInputContainer,
  UserInfoInputTitle,
  UserInfoSection,
  UserInfoSectionTitle,
  UserInfoSectionTitleImg,
} from './style';

import Header from '@/components/Header';

import useLogOut from '@/hooks/useLogOut';
import { useLink } from '@/hooks/useLink';

import { clientState } from '@/stores/user';

import PencilIcon from '@/assets/icons/icon-pencil.svg';
import IDCardIcon from '@/assets/icons/icon-id-card.svg';
import CheckIcon from '@/assets/icons/icon-check.svg';
import { fetchUpdateMyInfo } from '@/apis/client';

const ClientUserInfoPage = () => {
  const [me, setMe] = useRecoilState(clientState);
  const [isRead, setIsRead] = useState(true);
  const [name, setName] = useState(me.name);
  const [contact, setContact] = useState(me.contact);
  const [address, setAddress] = useState(me.address);

  const { clientLogOut } = useLogOut();
  const link = useLink();

  const updateMutation = useMutation('updateMyInfo', fetchUpdateMyInfo, {
    onSuccess: () => {
      toast.success('정보 변경 성공', { position: 'top-center' });
      setMe((prev) => ({ ...prev, name, contact, address }));
    },
    onError: () => {
      setName(me.name);
      setContact(me.contact);
      setAddress(me.address);
      toast.error('에러!', { position: 'top-center' });
    },
  });

  const updateModeHandler = () => {
    if (!isRead) {
      updateMutation.mutate({ name, address, contact });
    }
    setIsRead((prev) => !prev);
  };

  const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const inputContactHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setContact(e.currentTarget.value);
  };

  const inputAddressHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };

  const logOutHandler = () => {
    clientLogOut();
  };

  return (
    <UserInfoContainer>
      <Header type='back' title='마이 페이지' />
      {me.isMember ? (
        <>
          <UserInfoSection>
            <UserInfoSectionTitle>
              <UserInfoSectionTitleImg src={IDCardIcon} />
              개인 정보
            </UserInfoSectionTitle>
            <UserInfoInputContainer>
              <UserInfoInputTitle>이름</UserInfoInputTitle>
              <UserInfoInput value={name} onChange={inputNameHandler} readOnly={isRead} />
            </UserInfoInputContainer>
            <UserInfoInputContainer>
              <UserInfoInputTitle>전화번호</UserInfoInputTitle>
              <UserInfoInput value={contact} onChange={inputContactHandler} readOnly={isRead} />
            </UserInfoInputContainer>
            <UserInfoInputContainer>
              <UserInfoInputTitle>주소</UserInfoInputTitle>
              <UserInfoInput value={address} onChange={inputAddressHandler} readOnly={isRead} />
            </UserInfoInputContainer>
            <UpdateBtnContainer onClick={() => updateModeHandler()}>
              <UpdateBtnImg src={isRead ? PencilIcon : CheckIcon} />
              {isRead ? '정보 수정' : '수정 완료'}
            </UpdateBtnContainer>
          </UserInfoSection>

          <SignOutBtn onClick={logOutHandler}>로그아웃</SignOutBtn>
          <SignOutBtn>회원탈퇴</SignOutBtn>
        </>
      ) : (
        <>
          <UserInfoSection>
            회원가입하신 고객님만 <br />
            <br />
            이용하실 수 있는 서비스입니다.
          </UserInfoSection>
          <LogInBtn onClick={() => link.to('/client/login')}>로그인하러 가기</LogInBtn>
        </>
      )}
    </UserInfoContainer>
  );
};

export default ClientUserInfoPage;
