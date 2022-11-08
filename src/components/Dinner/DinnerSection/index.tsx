import { useRecoilValue } from 'recoil';

import { SectionContainer, SectionTitle } from '../style';

import { AddMenuBtnContainer, AddMenuImg } from './style';

import MobileItem from '@/components/MobileItem';

import { KRWFormat } from '@/utils/format';

import { menuInfoState } from '@/stores/menu';

import { MenuOrder } from '@/types/order';
import { Option } from '@/types/menu';

import AddMenuIcon from '@/assets/icons/icon-round-add.svg';

interface DinnerSectionValue {
  title: string;
  menuOrderList: MenuOrder[];
  setMenuOrderList: (menuOrderList: MenuOrder[]) => void;
}

interface AddMenuBtnValue {
  onClick?: () => void;
}

const AddMenuBtn = ({ onClick }: AddMenuBtnValue) => {
  return (
    <AddMenuBtnContainer onClick={onClick}>
      <AddMenuImg src={AddMenuIcon} />
      메뉴 추가
    </AddMenuBtnContainer>
  );
};

const DinnerSection = ({ title, menuOrderList, setMenuOrderList }: DinnerSectionValue) => {
  const menu = useRecoilValue(menuInfoState);
  const optionText = (option: [Option?, Option?], select: [number?, number?]) => {
    const opt1 = option[0] ? `${option[0]?.name}: ${option[0]?.list[select[0]!].name}` : '';
    const opt2 = option[1] ? ` | ${option[1]?.name}: ${option[1]?.list[select[1]!].name}` : '';

    return opt1 + opt2;
  };

  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {menuOrderList.map((item, idx) => {
        const itemInfo = menu[item.menuId];
        const setSelect = (opt1: number, opt2: number | undefined) => {
          const nextOrder = { ...item, option: [opt1, opt2] };
          const nextOrderList = [
            ...[...menuOrderList].slice(0, idx),
            nextOrder,
            ...[...menuOrderList].slice(idx + 1),
          ] as MenuOrder[];
          setMenuOrderList(nextOrderList);
        };
        return (
          <MobileItem
            key={idx}
            type='item'
            title={itemInfo.name}
            subTitle={optionText(itemInfo.option, item.option)}
            desc={`${KRWFormat(itemInfo.price)}`}
            option={itemInfo.option}
            select={item.option}
            setSelect={setSelect}
          />
        );
      })}
      <AddMenuBtn />
    </SectionContainer>
  );
};

export default DinnerSection;
