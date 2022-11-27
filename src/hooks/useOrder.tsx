import { useRecoilState } from 'recoil';

import useMenu from './useMenu';
import useClientCoupon from './useClientCoupon';

import { dinnerOrderState, orderState } from '@/stores/order';

import { DinnerOrder, MenuOrder } from '@/types/order';

const useOrder = () => {
  const [dinnerOrder, setDinnerOrder] = useRecoilState(dinnerOrderState);
  const [order, setOrder] = useRecoilState(orderState);

  const { getDinnerById, getMenuById, getStyleById } = useMenu();
  const { couponList } = useClientCoupon();

  const cartLength = order.dinnerList.length;

  const menuOrderPrice = (item: MenuOrder) => {
    const itemInfo = getMenuById(item.menuId)!;

    const [sel1, sel2] = item.option;
    const [opt1, opt2] = itemInfo.option;

    const opt1Price = opt1 && sel1 ? opt1.list[sel1].price : 0;
    const opt2Price = opt2 && sel2 ? opt2.list[sel2].price : 0;

    return (itemInfo.price + opt1Price + opt2Price) * item.count;
  };

  const dinnerOrderPrice = (dinnerId?: number) => {
    if (dinnerId === undefined || dinnerId === null) {
      const mainDishPrice = dinnerOrder.mainDish.reduce(
        (pre, item) => pre + menuOrderPrice(item),
        0,
      );
      const sidePrice = dinnerOrder.side.reduce((pre, item) => pre + menuOrderPrice(item), 0);
      const drinkPrice = dinnerOrder.drink.reduce((pre, item) => pre + menuOrderPrice(item), 0);
      const stylePrice = getStyleById(dinnerOrder.style)!.price ?? 0;

      return mainDishPrice + sidePrice + drinkPrice + stylePrice;
    }
    const mainDishPrice = order.dinnerList[dinnerId].mainDish.reduce(
      (pre, item) => pre + menuOrderPrice(item),
      0,
    );
    const sidePrice = order.dinnerList[dinnerId].side.reduce(
      (pre, item) => pre + menuOrderPrice(item),
      0,
    );
    const drinkPrice = order.dinnerList[dinnerId].drink.reduce(
      (pre, item) => pre + menuOrderPrice(item),
      0,
    );
    const stylePrice = getStyleById(order.dinnerList[dinnerId].style)!.price ?? 0;

    return mainDishPrice + sidePrice + drinkPrice + stylePrice;
  };

  const addDinnerToCart = () => {
    const nextDinnerList = [...order.dinnerList, dinnerOrder];
    const nextPrice = order.price + (dinnerOrderPrice() ?? 0);
    setOrder((prev) => ({ ...prev, dinnerList: nextDinnerList, price: nextPrice }));
  };

  const loadDinnerFromCart = (id?: number) => {
    if (id || id === 0) {
      if (!order?.dinnerList[id]) {
        return false;
      }
      setDinnerOrder(order.dinnerList[id]);
      return true;
    }
    return false;
  };

  const loadDinnerFromId = (id: number, dummy: DinnerOrder) => {
    setDinnerOrder(dummy);
  };

  const updateDinnerToCart = (id: number) => {
    const nextDinnerList = [
      ...order.dinnerList.slice(0, id),
      dinnerOrder,
      ...order.dinnerList.slice(id + 1),
    ];
    const nextPrice = order.price - dinnerOrderPrice(id) + dinnerOrderPrice();
    setOrder((prev) => ({ ...prev, dinnerList: nextDinnerList, price: nextPrice }));
  };

  const getSelectedCoupon = () => {
    const { couponId } = order;
    return couponList.find((item) => item.id === couponId);
  };

  const setDinnerDefault = (dinnerTypeId: number) => {
    const dinnerInfo = getDinnerById(dinnerTypeId)!;
    const defaultOrder = {
      type: dinnerTypeId,
      mainDish: dinnerInfo.mainDish.map((menu) => ({
        menuId: menu.menuId,
        option: [
          getMenuById(menu.menuId)!.option[0]?.default ?? null,
          getMenuById(menu.menuId)!.option[1]?.default ?? null,
        ] as [number | null, number | null],
        isDefault: true,
        count: menu.count,
      })),
      side: dinnerInfo.side.map((menu) => ({
        menuId: menu.menuId,
        option: [
          getMenuById(menu.menuId)!.option[0]?.default ?? null,
          getMenuById(menu.menuId)!.option[1]?.default ?? null,
        ] as [number | null, number | null],
        isDefault: true,
        count: menu.count,
      })),
      drink: dinnerInfo.drink.map((menu) => ({
        menuId: menu.menuId,
        option: [
          getMenuById(menu.menuId)!.option[0]?.default ?? null,
          getMenuById(menu.menuId)!.option[1]?.default ?? null,
        ] as [number | null, number | null],
        isDefault: true,
        count: menu.count,
      })),
      style: dinnerInfo.style,
    };
    setDinnerOrder(defaultOrder);
  };

  const orderPrice = () => {
    const totalDinnerPrice = order.dinnerList.reduce(
      (pre, _, idx) => pre + dinnerOrderPrice(idx),
      0,
    );
    const couponPrice = getSelectedCoupon()?.price ?? 0;
    return totalDinnerPrice - couponPrice + 100000;
  };

  return {
    cartLength,
    addDinnerToCart,
    loadDinnerFromCart,
    updateDinnerToCart,
    loadDinnerFromId,
    menuOrderPrice,
    dinnerOrderPrice,
    orderPrice,
    setDinnerDefault,
    getSelectedCoupon,
  };
};

export default useOrder;
