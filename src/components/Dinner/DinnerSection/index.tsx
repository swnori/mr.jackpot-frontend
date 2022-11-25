import { SectionContainer, SectionTitle } from '../style';

import { AddMenuBtnContainer, AddMenuImg } from './style';

import MobileItem from '@/components/MobileItem';

import useOrder from '@/hooks/useOrder';
import useMenu from '@/hooks/useMenu';
import { useLink } from '@/hooks/useLink';

import { KRWFormat } from '@/utils/format';

import { MenuOrder } from '@/types/order';
import { Option } from '@/types/menu';

import AddMenuIcon from '@/assets/icons/icon-round-add.svg';

interface DinnerSectionValue {
  title: string;
  menuListPath: string;
  menuOrderList: MenuOrder[];
  setMenuOrderList: (menuOrderList: MenuOrder[]) => void;
  readOnly: boolean;
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

const DinnerSection = ({
  title,
  menuListPath,
  menuOrderList,
  setMenuOrderList,
  readOnly = false,
}: DinnerSectionValue) => {
  const link = useLink();
  const { getMenuById } = useMenu();
  const { menuOrderPrice } = useOrder();

  const optionText = (option: [Option?, Option?], select: [number | null, number | null]) => {
    const opt1 = option[0] ? `${option[0]?.name}: ${option[0]?.list[select[0]!].name}` : '';
    const opt2 = option[1] ? ` | ${option[1]?.name}: ${option[1]?.list[select[1]!].name}` : '';

    return opt1 + opt2;
  };

  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {menuOrderList.map((item, idx) => {
        const itemInfo = getMenuById(item.menuId)!;
        const price = menuOrderPrice(item);
        const setSelect = (opt1: number | null, opt2: number | null) => {
          const nextOrder = { ...item, option: [opt1, opt2] };
          const nextOrderList = [
            ...[...menuOrderList].slice(0, idx),
            nextOrder,
            ...[...menuOrderList].slice(idx + 1),
          ] as MenuOrder[];
          setMenuOrderList(nextOrderList);
        };
        const onDelete = () => {
          const nextOrderList = [
            ...[...menuOrderList].slice(0, idx),
            ...[...menuOrderList].slice(idx + 1),
          ] as MenuOrder[];

          setMenuOrderList(nextOrderList);
        };
        const setCount = (cnt: number) => {
          const nextOrder = { ...item, count: cnt };
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
            type={readOnly ? 'button' : 'item'}
            title={itemInfo.name}
            subTitle={optionText(itemInfo.option, item.option)}
            desc={`${item.count}개 | ${KRWFormat(price)}`}
            option={readOnly ? undefined : itemInfo.option}
            select={readOnly ? undefined : item.option}
            setSelect={readOnly ? undefined : setSelect}
            onDelete={readOnly || item.isDefault ? undefined : onDelete}
            count={item.count}
            setCount={readOnly ? undefined : setCount}
          />
        );
      })}
      {readOnly ? null : <AddMenuBtn onClick={() => link.to(menuListPath)} />}
    </SectionContainer>
  );
};

export default DinnerSection;
