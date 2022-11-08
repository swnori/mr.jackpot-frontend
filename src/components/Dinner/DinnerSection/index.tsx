import { useRecoilValue } from 'recoil';

import { SectionContainer, SectionTitle } from '../style';

import { AddMenuBtnContainer, AddMenuImg } from './style';

import MobileItem from '@/components/MobileItem';

import { menuInfoState } from '@/stores/menu';

import { MenuOrder } from '@/types/order';
import { Option } from '@/types/menu';

import AddMenuIcon from '@/assets/icons/icon-round-add.svg';

interface DinnerSectionValue {
  title: string;
  menuOrderList: MenuOrder[];
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

const DinnerSection = ({ title, menuOrderList }: DinnerSectionValue) => {
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

        return (
          <MobileItem
            key={idx}
            type='item'
            title={itemInfo.name}
            subTitle={optionText(itemInfo.option, item.option)}
            desc={`${itemInfo.price}`}
          />
        );
      })}
      <AddMenuBtn />
    </SectionContainer>
  );
};

export default DinnerSection;
