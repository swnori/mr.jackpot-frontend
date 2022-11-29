import {
  SettingModalContainer,
  SettingModalInput,
  SettingModalInputContainer,
  SettingModalInputTitle,
  SettingModalSelect,
} from '../style';

import useSetting from '@/hooks/useSetting';

import { EmployeeTypeArr } from '@/types/setting';

const AddEmployeeModal = () => {
  const { newName, newType, inputEmployeeNameHandler, selectEmployeeTypeHandler } = useSetting();
  return (
    <SettingModalContainer>
      <SettingModalInputContainer>
        <SettingModalInputTitle>이름</SettingModalInputTitle>
        <SettingModalInput
          value={newName}
          onChange={inputEmployeeNameHandler}
          placeholder='이름 입력'
        />
      </SettingModalInputContainer>
      <SettingModalInputContainer>
        <SettingModalInputTitle>분류</SettingModalInputTitle>
        <SettingModalSelect
          onChange={selectEmployeeTypeHandler}
          value={EmployeeTypeArr[newType as 1 | 2 | 3]}
        >
          <option>요리</option>
          <option>스타일</option>
          <option>배달</option>
        </SettingModalSelect>
      </SettingModalInputContainer>
    </SettingModalContainer>
  );
};

export default AddEmployeeModal;
