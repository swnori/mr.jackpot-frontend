import { selector } from 'recoil';

const dummyData = [
  { id: 0, name: '대기' },
  { id: 1, name: '접수' },
  { id: 2, name: '취소' },
  { id: 3, name: '요리' },
  { id: 4, name: '포장' },
  { id: 5, name: '배달' },
  { id: 6, name: '도착' },
  { id: 7, name: '회수' },
  { id: 8, name: '완료' },
];

export const stateState = selector({
  key: 'stateState',
  get: () => {
    const dict = dummyData.reduce((pre, cur) => {
      const { id, name } = cur;
      const next = { ...pre };
      next[id] = { id, name };
      return next;
    }, {} as { [key: number]: { id: number; name: string } });

    return dict;
  },
});
