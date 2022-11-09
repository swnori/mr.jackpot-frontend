import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

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
  ItemWrapper,
} from './style';
import ItemOption from './ItemOption';

import { Option } from '@/types/menu';

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
  option?: [Option?, Option?];
  select?: [number | null, number | null];
  onClick?: () => void;
  onDelete?: (id: string | number) => void;
  setSelect?: (opt1: number | null, opt2: number | null) => void;
}

const MobileItem = ({
  type = 'button',
  id = -1,
  img,
  title = '',
  subTitle = '',
  desc = '',
  checked = false,
  option,
  select,
  onClick,
  onDelete,
  setSelect,
}: ItemValue) => {
  const [optShow, setOptShow] = useState<boolean>(false);

  const hasOption = type === 'item' && option && option[0];

  const clickItemHandler = () => {
    if (onClick) {
      onClick();
    } else if (hasOption) {
      setOptShow((prev) => !prev);
    }
  };

  const clickDeleteHandler = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <ItemWrapper>
      <ItemContainer onClick={clickItemHandler} isShowOption={optShow}>
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

      <AnimatePresence>
        {hasOption && optShow ? (
          <ItemOption menuName={title} option={option} select={select!} setSelect={setSelect!} />
        ) : null}
      </AnimatePresence>
    </ItemWrapper>
  );
};

export default MobileItem;
