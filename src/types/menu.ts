export type OptionId = number;

interface OptionType {
  id: OptionId;
  name: string;
  price: number;
}

interface Option {
  id: number;
  name: string;
  list: OptionType[];
}

export type MenuId = number;

export interface MenuInfo {
  id: MenuId;
  name: string;
  type: 'main' | 'side' | 'drink';
  img?: string;
  price: number;
  option: [Option, Option];
}

export type MenuOrderId = number;
