import { useRecoilValue, useSetRecoilState } from 'recoil';

import { dinnerOrderState } from '@/stores/order';
import { menuInfoState } from '@/stores/menu';
import { dinnerInfoState } from '@/stores/dinner';

const useOrder = () => {
  const dinnerList = useRecoilValue(dinnerInfoState);
  const menuInfo = useRecoilValue(menuInfoState);
  const setDinnerOrder = useSetRecoilState(dinnerOrderState);
  const setDinnerDefault = (dinnerId: number) => {
    const dinnerInfo = dinnerList[dinnerId];
    setDinnerOrder({
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

  return {
    setDinnerDefault,
  };
};

export default useOrder;
