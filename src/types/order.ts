export interface MenuOrder {
  id?: number;
  menuId: number;
  option: [number | null, number | null];
  count: number;
  isDefault?: boolean;
}

export interface DinnerOrder {
  id?: number;
  type: number;
  mainDish: MenuOrder[];
  side: MenuOrder[];
  drink: MenuOrder[];
  style: number;
}

interface OrderInfo {
  reserveName: string;
  reserveDate: Date;
  address: string;
  contact: string;
  requestDetail: string;
}

export interface Order {
  info: OrderInfo;
  couponId?: number;
  price: number;
  dinnerList: DinnerOrder[];
}
