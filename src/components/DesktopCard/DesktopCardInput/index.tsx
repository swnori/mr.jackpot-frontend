import React from 'react';

import { DesktopCardInputBox, DesktopCardInputContainer, DesktopCardInputIcon } from './style';

interface DesktopCardInputValue {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  img?: string;
}

const DesktopCardInput = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  img,
}: DesktopCardInputValue) => {
  return (
    <DesktopCardInputContainer>
      {img && <DesktopCardInputIcon src={img} />}
      <DesktopCardInputBox
        value={value}
        onChange={onChange}
        placeholder={placeholder ?? ''}
        type={type}
      />
    </DesktopCardInputContainer>
  );
};

export default DesktopCardInput;
