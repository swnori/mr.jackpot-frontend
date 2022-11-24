import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import React from 'react';

import useModal from './useModal';

import NoticeModal from '@/components/Setting/NoticeModal';
import AddEmployeeModal from '@/components/Setting/AddEmployeeModal';

import { settingState } from '@/stores/setting';

import { CookPart, Employee, Member } from '@/types/user';

import UserIcon from '@/assets/icons/icon-user.svg';
import AddUserIcon from '@/assets/icons/icon-user-add.svg';

const empDummyData = [
  {
    id: 7,
    code: 'C-1134114134',
    name: '김요리',
    type: '요리',
    part: ['그릴'],
    join: new Date('2022-10-14'),
    score: 50,
  },
  {
    id: 6,
    code: 'D-3454321234',
    name: '강배달',
    type: '배달',
    part: null,
    join: new Date('2022-09-05'),
    score: 50,
  },
  {
    id: 5,
    code: 'D-1234143234',
    name: '최직원',
    type: '배달',
    part: null,
    join: new Date('2022-09-01'),
    score: 50,
  },
  {
    id: 4,
    code: 'C-8563229123',
    name: '박재고',
    type: '요리',
    part: ['팬', '콜드'],
    join: new Date('2022-07-25'),
    score: 50,
  },
  {
    id: 3,
    code: 'D-6346123454',
    name: '장회수',
    type: '배달',
    part: null,
    join: new Date('2022-06-18'),
    score: 68,
  },
  {
    id: 2,
    code: 'C-6230491824',
    name: '정디너',
    type: '요리',
    part: ['오븐'],
    join: new Date('2022-02-20'),
    score: 57,
  },
  {
    id: 1,
    code: 'C-1192391234',
    name: '유주문',
    type: '요리',
    part: ['스타일'],
    join: new Date('2022-01-01'),
    score: 50,
  },
] as Employee[];

const mbDummyData = [
  {
    id: 7,
    name: '김손님',
    contact: '01012345678',
    address: '서울시 동작구',
    join: new Date('2022-10-14'),
    order: 30,
    pay: 123456789,
    rating: 4.3,
  },
  {
    id: 6,
    name: '이손님',
    contact: '01023456789',
    address: '서울시 중랑구',
    join: new Date('2022-09-05'),
    order: 90,
    pay: 123456789,
    rating: 3.8,
  },
  {
    id: 5,
    name: '박손님',
    contact: '01034567890',
    address: '서울시 송파구',
    join: new Date('2022-09-01'),
    order: 39,
    pay: 123456789,
    rating: 3.9,
  },
  {
    id: 4,
    name: '최손님',
    contact: '01045678901',
    address: '서울시 동대문구',
    join: new Date('2022-07-25'),
    order: 37,
    pay: 123456789,
    rating: 3.5,
  },
  {
    id: 3,
    name: '배손님',
    contact: '01056789012',
    address: '서울시 동대문구',
    join: new Date('2022-06-18'),
    order: 68,
    pay: 123456789,
    rating: 4.5,
  },
  {
    id: 2,
    name: '오손님',
    contact: '01067890123',
    address: '서울시 광진구',
    join: new Date('2022-02-20'),
    order: 57,
    pay: 123456789,
    rating: 4.5,
  },
  {
    id: 1,
    name: '강손님',
    contact: '01078901234',
    address: '서울시 종로구',
    join: new Date('2022-01-01'),
    order: 50,
    pay: 123456789,
    rating: 3.2,
  },
] as Member[];

const useSetting = () => {
  const [setting, setSetting] = useRecoilState(settingState);

  const { itemList, newName, newType, newPart, updateUserId } = setting;
  const { showModal, rerenderModal } = useModal();

  const setEmployeeList = () => {
    setSetting((prev) => ({ ...prev, itemList: empDummyData }));
  };

  const setMemberList = () => {
    setSetting((prev) => ({ ...prev, itemList: mbDummyData }));
  };

  const getItem = (id: number) => {
    const idx = itemList.findIndex((item) => item.id === id);
    const item = itemList[idx];

    return { idx, ...item };
  };

  const getPartList = (part: boolean[]) => {
    if (part.every((item) => !item)) {
      return [];
    }
    return ['그릴', '오븐', '팬', '콜드', '스타일'].filter((_, idx) => part[idx]) as CookPart[];
  };

  const getPartBoolList = (part: CookPart[]) => {
    if (part === null) {
      return [false, false, false, false, false];
    }
    return (['그릴', '오븐', '팬', '콜드', '스타일'] as CookPart[]).map((item: CookPart) =>
      part.includes(item),
    );
  };

  const addEmployee = (name: string, type: '요리' | '배달', part: boolean[]) => {
    showModal({
      type: 'alert',
      title: (
        <>
          <img src={AddUserIcon} alt='icon-add-user' />
          직원 등록
        </>
      ),
      children: (
        <NoticeModal>
          직원을 등록했습니다. <br />
          <br />
          생성된 코드는 - 입니다.
        </NoticeModal>
      ),
    });
    const newEmployee = {
      id: itemList[0].id! + 1,
      code: '-',
      name,
      type,
      part: getPartList(part),
      join: new Date(),
      score: 0,
    };
    setSetting((prev) => ({ ...prev, itemList: [newEmployee, ...itemList] }));
  };

  const updateEmployee = (id: number, name: string, type: '요리' | '배달', part: boolean[]) => {
    const { idx, ...item } = getItem(id);
    const nextEmployee = { ...item, name, type, part: getPartList(part) };
    setSetting((prev) => ({
      ...prev,
      itemList: [...itemList.slice(0, idx), nextEmployee, ...itemList.slice(idx + 1)],
    }));
  };

  const removeEmployee = (id: number) => {
    const { idx, ...employee } = getItem(id);
    showModal({
      type: 'confirm',
      children: (
        <NoticeModal>
          <b>{employee.name}</b>님의 정보를 삭제하시겠습니까?
        </NoticeModal>
      ),
      handleConfirm: () => {
        setSetting((prev) => ({
          ...prev,
          itemList: [...itemList.slice(0, idx), ...itemList.slice(idx + 1)],
        }));
        toast.success('직원 삭제 완료!');
      },
    });
  };

  const removeMember = (id: number) => {
    const { idx, ...member } = getItem(id);
    showModal({
      type: 'confirm',
      children: (
        <NoticeModal>
          <b>{member.name}</b>님을 탈퇴시키겠습니까?
        </NoticeModal>
      ),
      handleConfirm: () => {
        setSetting((prev) => ({
          ...prev,
          itemList: [...itemList.slice(0, idx), ...itemList.slice(idx + 1)],
        }));
      },
    });
  };

  const inputEmployeeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    setSetting((prev) => ({ ...prev, newName: text }));
    rerenderModal({
      handleConfirm: () => {
        if (updateUserId === -1) {
          addEmployee(text, newType, newPart);
        } else {
          updateEmployee(updateUserId, text, newType, newPart);
        }
      },
    });
  };

  const selectEmployeeTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.currentTarget.value as '요리' | '배달';
    const nextPart = text === '요리' ? [...newPart] : [false, false, false, false, false];
    if (text === '요리') {
      setSetting((prev) => ({ ...prev, newType: text }));
    } else {
      setSetting((prev) => ({
        ...prev,
        newType: text,
        newPart: nextPart,
      }));
    }
    rerenderModal({
      handleConfirm: () => {
        if (updateUserId === -1) {
          addEmployee(newName, text, nextPart);
        } else {
          updateEmployee(updateUserId, newName, text, nextPart);
        }
      },
    });
  };

  const checkEmployeePartHandler = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const isChecked = e.currentTarget.checked;
    const nextPart = [...newPart];
    nextPart[idx] = isChecked;
    setSetting((prev) => ({ ...prev, newPart: nextPart }));
    rerenderModal({
      handleConfirm: () => {
        if (updateUserId === -1) {
          addEmployee(newName, newType, nextPart);
        } else {
          updateEmployee(updateUserId, newName, newType, nextPart);
        }
      },
    });
  };

  const openAddEmployeeModal = () => {
    setSetting((prev) => ({
      ...prev,
      newName: '',
      newType: '요리',
      newPart: [false, false, false, false, false],
      updateUserId: -1,
    }));
    showModal({
      type: 'confirm',
      title: (
        <>
          <img src={AddUserIcon} alt='icon-add-user' />
          직원 등록
        </>
      ),
      children: <AddEmployeeModal />,
    });
  };

  const openUpdateEmployeeModal = (id: number) => {
    const { name, type, part } = getItem(id)!;

    setSetting((prev) => ({
      ...prev,
      newName: name as string,
      newType: type as '요리' | '배달',
      newPart: getPartBoolList(part!) as boolean[],
      updateUserId: id,
    }));

    showModal({
      type: 'confirm',
      title: (
        <>
          <img src={UserIcon} alt='icon-user' />
          직원 정보 수정
        </>
      ),
      children: <AddEmployeeModal />,
    });
  };

  return {
    newName,
    newType,
    newPart,
    itemList,
    removeEmployee,
    removeMember,
    setMemberList,
    setEmployeeList,
    openAddEmployeeModal,
    openUpdateEmployeeModal,
    checkEmployeePartHandler,
    inputEmployeeNameHandler,
    selectEmployeeTypeHandler,
  };
};

export default useSetting;
