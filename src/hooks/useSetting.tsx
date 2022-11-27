/* eslint-disable react-hooks/rules-of-hooks */
import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import React from 'react';

import useModal from './useModal';

import NoticeModal from '@/components/Setting/NoticeModal';
import AddEmployeeModal from '@/components/Setting/AddEmployeeModal';

import { settingState } from '@/stores/setting';

import { EmployeeTypeDic } from '@/types/setting';

import UserIcon from '@/assets/icons/icon-user.svg';
import AddUserIcon from '@/assets/icons/icon-user-add.svg';
import {
  fetchGetMemberList,
  fetchGetStaffList,
  fetchRegisterStaff,
  fetchUpdateStaff,
} from '@/apis/ceo';

const useSetting = () => {
  const [setting, setSetting] = useRecoilState(settingState);

  const { itemList, newName, newType, updateUserId } = setting;
  const { showModal, rerenderModal } = useModal();

  const setEmployeeListMutation = useMutation('getStaffList', fetchGetStaffList, {
    onSuccess: async (res) => {
      const data = await res.json();
      setSetting((prev) => ({
        ...prev,
        itemList: data.map((item: any) => ({
          id: item.id,
          code: item.code,
          name: item.name,
          type: item.role,
          join: new Date(item.createdAt),
          score: item.score,
        })),
      }));
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  const setEmployeeList = () => {
    setEmployeeListMutation.mutate();
  };

  const setMemberListMutation = useMutation('getMemberList', fetchGetMemberList, {
    onSuccess: async (res) => {
      const data = await res.json();
      setSetting((prev) => ({
        ...prev,
        itemList: data.map((item: any) => ({
          id: item.id,
          name: item.name,
          contact: item.phone,
          address: item.address,
          join: new Date(item.registeredAt),
          order: item.orders,
          pay: item.paid,
          rating: item.rating,
        })),
      }));
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  const setMemberList = () => {
    setMemberListMutation.mutate();
  };

  const getItem = (id: number) => {
    const idx = itemList.findIndex((item) => item.id === id);
    const item = itemList[idx];

    return { idx, ...item };
  };

  const addEmplyeeMutation = useMutation('registerStaff', fetchRegisterStaff, {
    onSuccess: async (data) => {
      setEmployeeList();
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
            생성된 코드는 <b>{data.code}</b> 입니다.
          </NoticeModal>
        ),
      });
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  const addEmployee = (name: string, type: number) => {
    addEmplyeeMutation.mutate({ name, type });
  };

  const updateEmployeeMutation = useMutation('updateStaff', fetchUpdateStaff, {
    onSuccess: async (res) => {
      const data = await res.json();

      const updatedEmployee = {
        id: data.id,
        code: data.code,
        name: data.name,
        type: data.role,
        join: new Date(data.createdAt),
        score: data.score,
      };

      const idx = itemList.findIndex((item) => item.id === data.id);

      setSetting((prev) => ({
        ...prev,
        itemList: [...itemList.slice(0, idx), updatedEmployee, ...itemList.slice(idx + 1)],
      }));

      toast.success('직원 정보 수정 성공!');
    },
    onError: () => {
      toast.error('에러!');
    },
  });

  const updateEmployee = (id: number, name: string, type: number) => {
    updateEmployeeMutation.mutate({ id, name, type });
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
          addEmployee(text, newType);
        } else {
          updateEmployee(updateUserId, text, newType);
        }
      },
    });
  };

  const selectEmployeeTypeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const text = e.currentTarget.value as '배달' | '요리' | '스타일';
    const type = EmployeeTypeDic[text];
    if (text === '요리') {
      setSetting((prev) => ({ ...prev, newType: type }));
    } else {
      setSetting((prev) => ({
        ...prev,
        newType: type,
      }));
    }
    rerenderModal({
      handleConfirm: () => {
        if (updateUserId === -1) {
          addEmployee(newName, type);
        } else {
          updateEmployee(updateUserId, newName, type);
        }
      },
    });
  };

  const openAddEmployeeModal = () => {
    setSetting((prev) => ({
      ...prev,
      newName: '',
      newType: 1,
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
    const { name, type } = getItem(id)!;

    setSetting((prev) => ({
      ...prev,
      newName: name as string,
      newType: type as number,
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
    itemList,
    removeEmployee,
    removeMember,
    setMemberList,
    setEmployeeList,
    openAddEmployeeModal,
    openUpdateEmployeeModal,
    inputEmployeeNameHandler,
    selectEmployeeTypeHandler,
  };
};

export default useSetting;
