import { selector } from 'recoil';

import { MenuInfo, MenuType } from '@/types/menu';

const dummyData: MenuInfo[] = [
  {
    id: 0,
    type: MenuType.MAIN_DISH,
    name: '스테이크',
    price: 49000,
    option: [
      {
        id: 21,
        name: '굽기',
        default: 41,
        list: {
          41: { id: 41, name: '레어', price: 0 },
          42: { id: 42, name: '미디움 레어', price: 0 },
          43: { id: 43, name: '미디움', price: 0 },
          44: { id: 44, name: '미디움 웰던', price: 0 },
          45: { id: 45, name: '웰던', price: 0 },
        },
      },
      {
        id: 22,
        name: '사이즈',
        default: 46,
        list: {
          46: { id: 46, name: 'S(150g)', price: 0 },
          47: { id: 47, name: 'M(180g)', price: 3000 },
          48: { id: 48, name: 'L(210g)', price: 5000 },
        },
      },
    ],
  },
  {
    id: 1,
    type: MenuType.SIDE,
    name: '에그 스크램블',
    price: 9000,
    option: [],
  },
  {
    id: 2,
    type: MenuType.SIDE,
    name: '베이컨',
    price: 7000,
    option: [],
  },
  {
    id: 3,
    type: MenuType.SIDE,
    name: '치즈',
    price: 5000,
    option: [],
  },
  {
    id: 4,
    type: MenuType.SIDE,
    name: '샐러드',
    price: 8000,
    option: [],
  },
  {
    id: 5,
    type: MenuType.DRINK,
    name: '레드 와인',
    price: 20000,
    option: [
      {
        id: 23,
        name: '종류',
        default: 51,
        list: {
          51: { id: 51, name: '하우스 와인', price: 0 },
          52: { id: 52, name: '까베르네 소비뇽', price: 7000 },
          53: { id: 53, name: '말벡', price: 14000 },
          54: { id: 54, name: '피노 누아', price: 15000 },
        },
      },
    ],
  },
  {
    id: 6,
    type: MenuType.DRINK,
    name: '레드 와인 한 잔',
    price: 4500,
    option: [
      {
        id: 24,
        name: '종류',
        default: 55,
        list: {
          55: { id: 55, name: '하우스 와인', price: 0 },
          56: { id: 56, name: '까베르네 소비뇽', price: 2000 },
          57: { id: 57, name: '말벡', price: 3000 },
          58: { id: 58, name: '피노 누아', price: 4000 },
        },
      },
    ],
  },
  {
    id: 7,
    type: MenuType.DRINK,
    name: '커피 포트',
    price: 14000,
    option: [
      {
        id: 25,
        name: '원두',
        default: 59,
        list: {
          59: { id: 59, name: '스페셜티 A', price: 0 },
          60: { id: 60, name: '스페셜티 B', price: 0 },
          61: { id: 61, name: '스페셜티 C', price: 0 },
        },
      },
    ],
  },
  {
    id: 8,
    type: MenuType.DRINK,
    name: '커피 한 잔',
    price: 5000,
    option: [
      {
        id: 26,
        name: '원두',
        default: 62,
        list: {
          62: { id: 62, name: '스페셜티 A', price: 0 },
          63: { id: 63, name: '스페셜티 B', price: 0 },
          64: { id: 64, name: '스페셜티 C', price: 0 },
        },
      },
    ],
  },
  {
    id: 9,
    type: MenuType.SIDE,
    name: '바게트 빵',
    price: 1500,
    option: [],
  },
  {
    id: 10,
    type: MenuType.SIDE,
    name: '빵',
    price: 1000,
    option: [],
  },
  {
    id: 11,
    type: MenuType.STYLE,
    name: '흰색 면 냅킨',
    price: 0,
    option: [],
  },
  {
    id: 12,
    type: MenuType.STYLE,
    name: '린넨 냅킨',
    price: 0,
    option: [],
  },
  {
    id: 13,
    type: MenuType.STYLE,
    name: '나무 쟁반',
    price: 0,
    option: [],
  },
  {
    id: 14,
    type: MenuType.STYLE,
    name: '은 쟁반',
    price: 0,
    option: [],
  },
  {
    id: 15,
    type: MenuType.STYLE,
    name: '작은 꽃병',
    price: 0,
    option: [],
  },
];

const styleDummyData = [
  {
    id: 0,
    name: '심플',
    desc: '플라스틱 쟁반 | 상자 접시 | 냅킨',
    price: 5000,
  },
  {
    id: 1,
    name: '그랜드',
    desc: '나무 쟁반 | 도자기 접시 | 흰색 면 냅킨',
    price: 9000,
  },
  {
    id: 2,
    name: '딜럭스',
    desc: '은 쟁반 | 도자기 접시 | 꽃병 | 린넨 냅킨',
    price: 15000,
  },
];

export const styleInfoState = selector({
  key: 'styleInfoState',
  get: () => {
    return styleDummyData;
  },
});

export const menuInfoState = selector({
  key: 'menuInfoState',
  get: () => {
    return dummyData;
  },
});
