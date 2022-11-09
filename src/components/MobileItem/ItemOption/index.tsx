import {
  ItemCountBtn,
  ItemCountBtnImg,
  ItemCountContainer,
  ItemCountView,
  ItemOptionContainer,
  ItemOptionName,
  ItemOptionPrice,
  ItemOptionRadioBox,
  ItemOptionRadioImg,
  ItemOptionSection,
  ItemOptionTitle,
  ItemOptionWrapper,
} from './style';

import { Option } from '@/types/menu';

import RadioIcon from '@/assets/icons/icon-radio.svg';
import RadioCheckedIcon from '@/assets/icons/icon-radio-checked.svg';
import PlusIcon from '@/assets/icons/icon-plus.svg';
import MinusIcon from '@/assets/icons/icon-minus.svg';

interface ItemOptionValue {
  menuName: string;
  option?: [Option?, Option?];
  select: [number | null, number | null];
  setSelect: (opt1: number | null, opt2: number | null) => void;
  count: number;
  setCount: (count: number) => void;
}

const ItemOption = ({ menuName, option, select, setSelect, count, setCount }: ItemOptionValue) => {
  const setOpt1Handler = (id: number) => {
    setSelect(id, select[1] ?? null);
  };

  const setOpt2Handler = (id: number) => {
    setSelect(select[0], id);
  };

  const plusCountHandler = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const minusCountHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <ItemOptionContainer
      transition={{ type: 'keyframes', ease: 'easeInOut' }}
      initial={{ height: 0, paddingTop: 0, paddingBottom: 0, opacity: 0 }}
      animate={{ height: 'auto', paddingTop: '2rem', paddingBottom: '2rem', opacity: 1 }}
      exit={{ height: 0, paddingTop: 0, paddingBottom: 0, opacity: 0 }}
    >
      {option ? (
        <>
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
        </>
      ) : null}
      <ItemOptionSection>
        <ItemOptionTitle>수량 선택</ItemOptionTitle>
        <ItemCountContainer>
          <ItemCountBtn onClick={minusCountHandler}>
            <ItemCountBtnImg src={MinusIcon} />
          </ItemCountBtn>
          <ItemCountView>{count}</ItemCountView>
          <ItemCountBtn onClick={plusCountHandler}>
            <ItemCountBtnImg src={PlusIcon} />
          </ItemCountBtn>
        </ItemCountContainer>
      </ItemOptionSection>
    </ItemOptionContainer>
  );
};

export default ItemOption;
