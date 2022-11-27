import { selector } from 'recoil';

import { KeyOf } from '@/utils/type';

import { fetchState } from '@/apis/common';

const stateDic =
  {
    created: '대기',
    rejected: '취소',
    accepted: '접수',
    started: '접수',
    cooking: '요리',
    prepared: '포장',
    delivering: '배달',
    delivered: '도착',
    requested: '회수',
    collected: '회수',
    finished: '완료',
  } ?? '';

export const stateState = selector({
  key: 'stateState',
  get: async () => {
    const res = await fetchState();
    const data = await res.json();
    const dict = data.reduce((pre: any, cur: any) => {
      const { id, state } = cur;
      const next = { ...pre };
      next[id] = { id, name: stateDic[state as KeyOf<typeof stateDic>] };
      return next;
    }, {} as { [key: number]: { id: number; name: string } });

    return dict;
  },
});
