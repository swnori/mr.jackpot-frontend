import { useRecoilState, useRecoilValue } from 'recoil';

import {
  CartSection,
  CartSectionDesc,
  CartSectionTitle,
  CartSectionTitleImg,
  DinnerListContainer,
} from '../style';

import MobileItem from '@/components/MobileItem';

import useOrder from '@/hooks/useOrder';

import { KRWFormat } from '@/utils/format';

import { orderState } from '@/stores/order';
import { menuInfoState } from '@/stores/menu';
import { dinnerInfoState } from '@/stores/dinner';

import { DinnerOrder, MenuOrder } from '@/types/order';

import ReceiptIcon from '@/assets/icons/icon-receipt.svg';

const DinnerListSection = () => {
  const [order, setOrder] = useRecoilState(orderState);
  const dinnerInfo = useRecoilValue(dinnerInfoState);
  const menuInfo = useRecoilValue(menuInfoState);
  const { dinnerOrderPrice } = useOrder();
  const deleteDinnerHandler = (idx: number) => {
    setOrder((prev) => {
      const nextDinnerList = [...prev.dinnerList.slice(0, idx), ...prev.dinnerList.slice(idx + 1)];
      return { ...prev, dinnerList: nextDinnerList };
    });
  };
  const menuListStr = (list: MenuOrder[]) =>
    list.reduce((pre, menu) => {
      const { name } = menuInfo[menu.menuId];
      if (pre === '') {
        return name;
      }
      return `${pre}, ${name}`;
    }, '');
  const dinnerDetail = (dinner: DinnerOrder) => {
    const mainDishes = menuListStr(dinner.mainDish);
    const sides = menuListStr(dinner.side);
    const drinks = menuListStr(dinner.drink);

    return (
      mainDishes +
      (mainDishes !== '' && sides !== '' ? `, ${sides}` : sides) +
      (mainDishes !== '' && sides !== '' && drinks !== '' ? `, ${drinks}` : drinks)
    );
  };
  return (
    <CartSection>
      <CartSectionTitle>
        <CartSectionTitleImg src={ReceiptIcon} />
        주문 목록
      </CartSectionTitle>
      <CartSectionDesc>
        각 주문 정보를 터치하시면 <br />
        상세 주문 내용을 확인하실 수 있습니다.
      </CartSectionDesc>
      <DinnerListContainer>
        {order.dinnerList.map((dinner, idx) => {
          const info = dinnerInfo[dinner.type];

          return (
            <MobileItem
              key={idx}
              type='button'
              title={info.name}
              subTitle={dinnerDetail(dinner)}
              desc={KRWFormat(dinnerOrderPrice(idx))}
              onDelete={() => deleteDinnerHandler(idx)}
            />
          );
        })}
      </DinnerListContainer>
    </CartSection>
  );
};

export default DinnerListSection;
