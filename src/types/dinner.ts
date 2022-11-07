import { MenuId } from './menu';

export interface DinnerInfo {
  name: string;
  desc: string;
  mainDish: MenuId[];
  side: MenuId[];
  drink: MenuId[];
  style: number;
  price: number;
}
