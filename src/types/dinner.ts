import { MenuOrder } from './order';

export interface DinnerInfo {
  id: number;
  name: string;
  img?: string;
  desc: string;
  mainDish: MenuOrder[];
  side: MenuOrder[];
  drink: MenuOrder[];
  style: number;
  price: number;
}
