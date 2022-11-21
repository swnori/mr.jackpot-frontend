import { ValueOf } from '@/utils/type';

interface OptionType {
  id: number;
  name: string;
  price: number;
}

export interface Option {
  id: number;
  name: string;
  default: number;
  list: { [key: number]: OptionType };
}

export const MenuType = {
  MAIN_DISH: 'main',
  SIDE: 'side',
  DRINK: 'drink',
  STYLE: 'style',
} as const;

export interface MenuInfo {
  id: number;
  name: string;
  type: ValueOf<typeof MenuType>;
  img?: string;
  price: number;
  option: [Option?, Option?];
}
