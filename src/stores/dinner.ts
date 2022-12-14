import { selector } from 'recoil';

import { menuInfoState } from './menu';
import { boardState } from './board';

import { MenuOrder } from '@/types/order';
import { MenuType } from '@/types/menu';
import { DinnerInfo } from '@/types/dinner';
/*
import { DinnerInfo } from '@/types/dinner';

const dummyData: DinnerInfo[] = [
  {
    id: 0,
    img: '',
    name: '발렌타인 디너(Valentine Dinner)',
    desc: '스테이크, 와인, 큐피드 접시',
    mainDish: [{ menuId: 0, option: [41, 46], count: 1, isDefault: true }],
    side: [],
    drink: [{ menuId: 5, option: [51, null], count: 1, isDefault: true }],
    style: 0,
    price: 74000,
  },
  {
    id: 1,
    img: '',
    name: '프렌치 디너(French Dinner)',
    desc: '스테이크, 샐러드, 와인, 커피',
    mainDish: [{ menuId: 0, option: [41, 46], count: 1, isDefault: true }],
    side: [{ menuId: 4, option: [null, null], count: 1, isDefault: true }],
    drink: [
      { menuId: 8, option: [62, null], count: 1, isDefault: true },
      { menuId: 6, option: [55, null], count: 1, isDefault: true },
    ],
    style: 0,
    price: 71500,
  },
  {
    id: 2,
    img: '',
    name: '잉글리시 디너(English Dinner)',
    desc: '스테이크, 베이컨, 에그 스크램블, 빵',
    mainDish: [{ menuId: 0, option: [41, 46], count: 1, isDefault: true }],
    side: [
      { menuId: 1, option: [null, null], count: 1, isDefault: true },
      { menuId: 2, option: [null, null], count: 1, isDefault: true },
      { menuId: 10, option: [null, null], count: 1, isDefault: true },
    ],
    drink: [],
    style: 0,
    price: 71000,
  },
  {
    id: 3,
    img: '',
    name: '샴페인 축제 디너(Champagne Feast Dinner)',
    desc: '스테이크, 와인, 커피, 빵',
    mainDish: [
      { menuId: 0, option: [41, 46], count: 1, isDefault: true },
      { menuId: 0, option: [41, 46], count: 1, isDefault: true },
    ],
    side: [{ menuId: 9, option: [null, null], count: 4, isDefault: true }],
    drink: [{ menuId: 1, option: [55, null], count: 1, isDefault: true }],
    style: 1,
    price: 122000,
  },
]; */

export const dinnerInfoState = selector<DinnerInfo[]>({
  key: 'dinnerInfoState',
  get: ({ get }) => {
    const { dinnerList } = get(boardState);
    const menuInfo = get(menuInfoState);
    const filteredData = [...dinnerList].map((data) => {
      const { id, name, price } = data;
      const dishes = data.mainDish;
      const [mainDish, side, drink] = dishes.reduce(
        (pre: MenuOrder[][], cur: any) => {
          const menu = menuInfo.find((item) => item.id === cur.menuId);
          if (!menu) return pre;

          const nextItem = { ...cur };
          nextItem.isDefault = true;
          nextItem.option = [menu?.option[0]?.default ?? null, menu?.option[1]?.default ?? null];

          if (menu.type === MenuType.MAIN_DISH) {
            pre[0].push(nextItem);
          }
          if (menu.type === MenuType.SIDE) {
            pre[1].push(nextItem);
          }
          if (menu.type === MenuType.DRINK) {
            pre[2].push(nextItem);
          }

          return pre;
        },
        [[], [], []],
      );

      const desc = dishes.reduce((pre: string, cur: any) => {
        if (pre === '') {
          return menuInfo.find((menu) => menu.id === cur.menuId)?.name;
        }
        return `${pre}, ${menuInfo.find((menu) => menu.id === cur.menuId)?.name}`;
      }, '');
      return { id, img: '', name, desc, mainDish, side, drink, style: 1, price };
    });
    return filteredData;
  },
});
