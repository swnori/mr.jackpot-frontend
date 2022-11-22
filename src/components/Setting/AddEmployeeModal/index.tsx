import {
  SettingModalCheckBox,
  SettingModalCheckBoxContainer,
  SettingModalCheckBoxWrapper,
  SettingModalContainer,
  SettingModalInput,
  SettingModalInputContainer,
  SettingModalInputTitle,
  SettingModalSelect,
} from '../style';

import useSetting from '@/hooks/useSetting';

const AddEmployeeModal = () => {
  const {
    newName,
    newType,
    newPart,
    inputEmployeeNameHandler,
    selectEmployeeTypeHandler,
    checkEmployeePartHandler,
  } = useSetting();
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
        <SettingModalSelect onChange={selectEmployeeTypeHandler} value={newType}>
          <option>요리</option>
          <option>배달</option>
        </SettingModalSelect>
      </SettingModalInputContainer>
      <SettingModalInputContainer>
        <SettingModalInputTitle>직무</SettingModalInputTitle>
        <SettingModalCheckBoxContainer>
          <SettingModalCheckBoxWrapper>
            <SettingModalCheckBox
              type='checkbox'
              checked={newPart[0]}
              onChange={(e) => checkEmployeePartHandler(e, 0)}
              disabled={newType === '배달'}
            />
            그릴
          </SettingModalCheckBoxWrapper>
          <SettingModalCheckBoxWrapper>
            <SettingModalCheckBox
              type='checkbox'
              checked={newPart[1]}
              onChange={(e) => checkEmployeePartHandler(e, 1)}
              disabled={newType === '배달'}
            />
            오븐
          </SettingModalCheckBoxWrapper>
          <SettingModalCheckBoxWrapper>
            <SettingModalCheckBox
              type='checkbox'
              checked={newPart[2]}
              onChange={(e) => checkEmployeePartHandler(e, 2)}
              disabled={newType === '배달'}
            />
            팬
          </SettingModalCheckBoxWrapper>
          <SettingModalCheckBoxWrapper>
            <SettingModalCheckBox
              type='checkbox'
              checked={newPart[3]}
              onChange={(e) => checkEmployeePartHandler(e, 3)}
              disabled={newType === '배달'}
            />
            콜드
          </SettingModalCheckBoxWrapper>
          <SettingModalCheckBoxWrapper>
            <SettingModalCheckBox
              type='checkbox'
              checked={newPart[4]}
              onChange={(e) => checkEmployeePartHandler(e, 4)}
              disabled={newType === '배달'}
            />
            스타일
          </SettingModalCheckBoxWrapper>
        </SettingModalCheckBoxContainer>
      </SettingModalInputContainer>
    </SettingModalContainer>
  );
};

export default AddEmployeeModal;
