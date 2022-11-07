import { MenuId, OptionId } from './menu';

type OrderId = number;

export interface MenuOrder {
  id: number;
  menuId: MenuId;
  option: [OptionId, OptionId];
}

export interface DinnerOrder {
  id: number;
  mainDish: MenuOrder[];
  side: MenuOrder[];
  drink: MenuOrder[];
  style: number;
}

export interface Order {
  id: OrderId;
  // 주문자 정보, 쿠폰 여부
  dinnerList: DinnerOrder[];
}
