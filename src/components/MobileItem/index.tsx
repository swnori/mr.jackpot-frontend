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
  ItemOptionContainer,
  ItemOptionSection,
  ItemOptionTitle,
  ItemWrapper,
  ItemOptionWrapper,
  ItemOptionName,
  ItemOptionRadioBox,
  ItemOptionRadioImg,
  ItemOptionPrice,
} from './style';

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
  select?: [number, number?];
  onClick?: () => void;
  onDelete?: (id: string | number) => void;
  setSelect?: (opt1: number, opt2: number | undefined) => void;
}

interface ItemOptionValue {
  menuName: string;
  option: [Option?, Option?];
  select: [number, number?];
  setSelect: (opt1: number, opt2: number | undefined) => void;
}

const ItemOption = ({ menuName, option, select, setSelect }: ItemOptionValue) => {
  const setOpt1Handler = (id: number) => {
    setSelect(id, select[1]);
  };

  const setOpt2Handler = (id: number) => {
    setSelect(select[0], id);
  };

  return (
    <ItemOptionContainer
      transition={{ type: 'keyframes', ease: 'easeInOut' }}
      initial={{ height: 0, paddingTop: 0, paddingBottom: 0, opacity: 0 }}
      animate={{ height: 'auto', paddingTop: '2rem', paddingBottom: '2rem', opacity: 1 }}
      exit={{ height: 0, paddingTop: 0, paddingBottom: 0, opacity: 0 }}
    >
      {option[0]?.list ? (
        <ItemOptionSection>
          <ItemOptionTitle>{`(옵션 1) ${menuName} ${option[0]?.name} 선택`}</ItemOptionTitle>
          {Object.keys(option[0].list).map((key) => {
            const { id, name, price } = option[0]!.list[Number(key)] || { name: '', price: 0 };
            return (
              <ItemOptionWrapper key={key} onClick={() => setOpt1Handler(id)}>
                <ItemOptionRadioBox>
                  <ItemOptionRadioImg src={id === select[0] ? RadioCheckedIcon : RadioIcon} />
                </ItemOptionRadioBox>
                <ItemOptionName>{name}</ItemOptionName>
                <ItemOptionPrice>{`+${price.toLocaleString()}원`}</ItemOptionPrice>
              </ItemOptionWrapper>
            );
          })}
        </ItemOptionSection>
      ) : null}
      {option[1]?.list ? (
        <ItemOptionSection>
          <ItemOptionTitle>{`(옵션 2) ${menuName} ${option[1]?.name} 선택`}</ItemOptionTitle>
          {Object.keys(option[1].list).map((key) => {
            const { id, name, price } = option[1]!.list[Number(key)] || { name: '', price: 0 };
            return (
              <ItemOptionWrapper key={key} onClick={() => setOpt2Handler(id)}>
                <ItemOptionRadioBox>
                  <ItemOptionRadioImg src={id === select[1] ? RadioCheckedIcon : RadioIcon} />
                </ItemOptionRadioBox>
                <ItemOptionName>{name}</ItemOptionName>
                <ItemOptionPrice>{`+${price.toLocaleString()}원`}</ItemOptionPrice>
              </ItemOptionWrapper>
            );
          })}
        </ItemOptionSection>
      ) : null}
    </ItemOptionContainer>
  );
};

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
