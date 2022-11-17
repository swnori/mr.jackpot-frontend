import { useRecoilState } from 'recoil';
import { ChangeEvent, useState } from 'react';

import {
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

import { clientState } from '@/stores/user';

import PencilIcon from '@/assets/icons/icon-pencil.svg';
import IDCardIcon from '@/assets/icons/icon-id-card.svg';
import CheckIcon from '@/assets/icons/icon-check.svg';

const ClientUserInfoPage = () => {
  const [me, setMe] = useRecoilState(clientState);
  const [isRead, setIsRead] = useState(true);
  const [name, setName] = useState(me.name);
  const [contact, setContact] = useState(me.contact);
  const [address, setAddress] = useState(me.address);

  const updateModeHandler = () => {
    if (!isRead) {
      setMe((prev) => ({ ...prev, name, contact, address }));
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

  return (
    <UserInfoContainer>
      <Header type='back' title='마이 페이지' />
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
      <SignOutBtn>회원 탈퇴</SignOutBtn>
    </UserInfoContainer>
  );
};

export default ClientUserInfoPage;
