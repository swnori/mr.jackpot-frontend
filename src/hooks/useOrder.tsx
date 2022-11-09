import { useRecoilState, useRecoilValue } from 'recoil';

import { dinnerOrderState } from '@/stores/order';
import { menuInfoState, styleInfoState } from '@/stores/menu';
import { dinnerInfoState } from '@/stores/dinner';

import { MenuOrder } from '@/types/order';

const useOrder = () => {
  const dinnerList = useRecoilValue(dinnerInfoState);
  const menuInfo = useRecoilValue(menuInfoState);
  const styleInfo = useRecoilValue(styleInfoState);
  const [dinnerOrder, setDinnerOrder] = useRecoilState(dinnerOrderState);
  const setDinnerDefault = (dinnerTypeId: number) => {
    const dinnerInfo = dinnerList[dinnerTypeId];
    setDinnerOrder({
      type: dinnerTypeId,
      mainDish: dinnerInfo.mainDish.map((menu) => ({
        menuId: menu.menuId,
        option: [
          menuInfo[menu.menuId].option[0]?.default ?? 0,
          menuInfo[menu.menuId].option[1]?.default ?? 0,
        ],
        isDefault: true,
        count: menu.count,
      })),
      side: dinnerInfo.side.map((menu) => ({
        menuId: menu.menuId,
        option: [
          menuInfo[menu.menuId].option[0]?.default ?? 0,
          menuInfo[menu.menuId].option[1]?.default ?? 0,
        ],
        isDefault: true,
        count: menu.count,
      })),
      drink: dinnerInfo.drink.map((menu) => ({
        menuId: menu.menuId,
        option: [
          menuInfo[menu.menuId].option[0]?.default ?? 0,
          menuInfo[menu.menuId].option[1]?.default ?? 0,
        ],
        isDefault: true,
        count: menu.count,
      })),
      style: dinnerInfo.style,
    });
  };

  const menuOrderPrice = (item: MenuOrder) => {
    const itemInfo = menuInfo[item.menuId];

    const [sel1, sel2] = item.option;
    const [opt1, opt2] = itemInfo.option;

    const opt1Price = opt1 && sel1 ? opt1.list[sel1].price : 0;
    const opt2Price = opt2 && sel2 ? opt2.list[sel2].price : 0;

    return (itemInfo.price + opt1Price + opt2Price) * item.count;
  };

  const dinnerOrderPrice = (dinnerId?: number) => {
    if (!dinnerId) {
      const mainDishPrice = dinnerOrder.mainDish.reduce(
        (pre, item) => pre + menuOrderPrice(item),
        0,
      );
      const sidePrice = dinnerOrder.side.reduce((pre, item) => pre + menuOrderPrice(item), 0);
      const drinkPrice = dinnerOrder.drink.reduce((pre, item) => pre + menuOrderPrice(item), 0);
      const stylePrice = styleInfo[dinnerOrder.style].price ?? 0;

      return mainDishPrice + sidePrice + drinkPrice + stylePrice;
    }
  };

  return {
    menuOrderPrice,
    dinnerOrderPrice,
    setDinnerDefault,
  };
};

export default useOrder;
