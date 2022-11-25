import {
  OrderSection,
  OrderSectionDesc,
  OrderSectionTitle,
  OrderSectionTitleImg,
  DinnerListContainer,
} from '../style';

import MobileItem from '@/components/MobileItem';

import useMenu from '@/hooks/useMenu';
import { useLink } from '@/hooks/useLink';

import { DinnerOrder, MenuOrder } from '@/types/order';

import SteakWineImg from '@/assets/images/dinner.png';
import ReceiptIcon from '@/assets/icons/icon-receipt.svg';

interface DinnerListValue {
  dinnerList: DinnerOrder[];
}

const OrderDinnerListSection = ({ dinnerList }: DinnerListValue) => {
  const link = useLink();
  const { getDinnerById, getMenuById } = useMenu();

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
    link.to(`/client/dinner/read/${id}`);
  };
  return (
    <OrderSection>
      <OrderSectionTitle>
        <OrderSectionTitleImg src={ReceiptIcon} />
        주문 목록
      </OrderSectionTitle>
      <OrderSectionDesc>
        각 주문 정보를 터치하시면 <br />
        상세 주문 내용을 확인하실 수 있습니다.
      </OrderSectionDesc>
      <DinnerListContainer>
        {dinnerList.map((dinner, idx) => {
          const info = getDinnerById(dinner.type)!;

          return (
            <MobileItem
              key={idx}
              img={SteakWineImg}
              type='button'
              title={info.name}
              desc={dinnerDetail(dinner)}
              onClick={() => goUpdateDinnerPage(idx)}
            />
          );
        })}
      </DinnerListContainer>
    </OrderSection>
  );
};

export default OrderDinnerListSection;
