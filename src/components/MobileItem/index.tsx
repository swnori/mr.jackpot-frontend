import {
  ItemContainer,
  ItemDesc,
  ItemImg,
  ItemInfoContainer,
  ItemSubTitle,
  ItemTitle,
  ItemImgWrapper,
  ItemRadioBox,
  ItemRadioImg,
  ItemDeleteBtn,
  ItemDeleteImg,
} from './style';

import DeleteIcon from '@/assets/icons/icon-x.svg';
import RadioIcon from '@/assets/icons/icon-radio.svg';
import RadioCheckedIcon from '@/assets/icons/icon-radio-checked.svg';

interface ItemValue {
  type?: 'button' | 'radio' | 'item';
  id?: string | number;
  img?: string;
  title?: string;
  subTitle?: string;
  desc?: string | number;
  checked?: boolean;
  onClick?: () => void;
  onDelete?: (id: string | number) => void;
}

const MobileItem = ({
  type = 'button',
  id = -1,
  img,
  title = '',
  subTitle = '',
  desc = '',
  checked = false,
  onClick,
  onDelete,
}: ItemValue) => {
  const clickItemHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  const clickDeleteHandler = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <ItemContainer onClick={clickItemHandler}>
      <ItemImgWrapper>
        <ItemImg src={img} />
      </ItemImgWrapper>
      <ItemInfoContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemSubTitle>{subTitle}</ItemSubTitle>
        <ItemDesc>{desc}</ItemDesc>
      </ItemInfoContainer>
      {type === 'radio' ? (
        <ItemRadioBox>
          <ItemRadioImg src={checked ? RadioCheckedIcon : RadioIcon} />
        </ItemRadioBox>
      ) : null}
      {onDelete ? (
        <ItemDeleteBtn onClick={clickDeleteHandler}>
          <ItemDeleteImg src={DeleteIcon} />
        </ItemDeleteBtn>
      ) : null}
    </ItemContainer>
  );
};

export default MobileItem;
