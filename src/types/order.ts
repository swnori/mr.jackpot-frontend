export interface MenuOrder {
  id: number;
  menuId: number;
  option: [number, number];
}

export interface DinnerOrder {
  id?: number;
  mainDish: MenuOrder[];
  side: MenuOrder[];
  drink: MenuOrder[];
  style: number;
}

export interface Order {
  id: number;
  // 주문자 정보, 쿠폰 여부
  dinnerList: DinnerOrder[];
}
