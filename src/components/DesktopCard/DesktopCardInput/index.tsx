import { DesktopCardInputBox, DesktopCardInputContainer, DesktopCardInputIcon } from './style';

interface DesktopCardInputValue {
  onChange: () => void;
  placeholder?: string;
  img?: string;
}

const DesktopCardInput = ({ onChange, placeholder, img }: DesktopCardInputValue) => {
  return (
    <DesktopCardInputContainer>
      {img && <DesktopCardInputIcon src={img} />}
      <DesktopCardInputBox onChange={onChange} placeholder={placeholder ?? ''} />
    </DesktopCardInputContainer>
  );
};

export default DesktopCardInput;
