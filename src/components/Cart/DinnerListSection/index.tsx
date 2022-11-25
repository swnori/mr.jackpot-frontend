import { useRecoilState, useResetRecoilState } from 'recoil';

import {
  CartSection,
  CartSectionDesc,
  CartSectionTitle,
  CartSectionTitleImg,
  DinnerListContainer,
} from '../style';

import MobileItem from '@/components/MobileItem';

import useOrder from '@/hooks/useOrder';
import useMenu from '@/hooks/useMenu';
import { useLink } from '@/hooks/useLink';

import { KRWFormat } from '@/utils/format';

import { dinnerOrderState, orderState } from '@/stores/order';

import { DinnerOrder, MenuOrder } from '@/types/order';

import SteakWineImg from '@/assets/images/dinner.png';
import ReceiptIcon from '@/assets/icons/icon-receipt.svg';

const DinnerListSection = () => {
  const [order, setOrder] = useRecoilState(orderState);
  const resetDinnerOrder = useResetRecoilState(dinnerOrderState);

  const link = useLink();
  const { dinnerOrderPrice } = useOrder();
  const { getMenuById, getDinnerById } = useMenu();

  const deleteDinnerHandler = (idx: number) => {
    setOrder((prev) => {
      const nextDinnerList = [...prev.dinnerList.slice(0, idx), ...prev.dinnerList.slice(idx + 1)];
      return { ...prev, dinnerList: nextDinnerList };
    });
  };
  const menuListStr = (list: MenuOrder[]) =>
    list.reduce((pre, menu) => {
      const { name } = getMenuById(menu.menuId)!;
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
      ((mainDishes !== '' || sides !== '') && drinks !== '' ? `, ${drinks}` : drinks)
    );
  };
  const goUpdateDinnerPage = (id: number) => {
    resetDinnerOrder();
    link.to(`/client/dinner/update/${id}`);
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
          const info = getDinnerById(dinner.type)!;

          return (
            <MobileItem
              key={idx}
              type='button'
              img={SteakWineImg}
              title={info.name}
              subTitle={dinnerDetail(dinner)}
              desc={KRWFormat(dinnerOrderPrice(idx))}
              onClick={() => goUpdateDinnerPage(idx)}
              onDelete={() => deleteDinnerHandler(idx)}
            />
          );
        })}
      </DinnerListContainer>
    </CartSection>
  );
};

export default DinnerListSection;
