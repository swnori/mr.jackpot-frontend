import { useRecoilValue } from 'recoil';
import { useState } from 'react';

import { TaskContainer, TaskTitle } from './style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';

import { menuInfoState } from '@/stores/menu';

interface CookData {
  OId: number;
  DId: number;
  MId?: number;
  menuId?: number;
  option?: [number | null, number | null];
  count?: number;
  dish?: string;

  dinnerName?: string;
  style?: number;

  stateId: number;
}

const dummyData = [
  { OId: 1, DId: 2, MId: 4, menuId: 0, option: [45, 48], count: 1, dish: '종이', stateId: 0 },
  { OId: 1, DId: 2, MId: 3, menuId: 0, option: [43, 48], count: 1, dish: '종이', stateId: 3 },
  { OId: 1, DId: 1, MId: 2, menuId: 0, option: [41, 47], count: 1, dish: '종이', stateId: 3 },
  { OId: 1, DId: 1, MId: 1, menuId: 0, option: [42, 46], count: 1, dish: '종이', stateId: 8 },
] as CookData[];

const nextState = {
  0: 3,
  3: 8,
  8: 0,
};

const CookTaskPage = () => {
  const menuInfo = useRecoilValue(menuInfoState);
  const [taskList, setTaskList] = useState(dummyData);
  const isStyle = false;
  const headerList = isStyle
    ? ['D-ID', 'O-ID', 'Dinner', 'Style', 'Status']
    : ['M-ID', 'D-ID', 'O-ID', 'Menu', 'Opt.1', 'Opt.2', 'Dish', 'Count', 'Status'];
  return (
    <TaskContainer>
      <TaskTitle>할 일 목록</TaskTitle>
      <Table headerList={headerList}>
        {taskList.map((item, idx) => {
          const dataList = isStyle
            ? [item.DId, item.OId, item.dinnerName!, item.style!, item.stateId]
            : [
                item.MId!,
                item.DId,
                item.OId,
                menuInfo[item.menuId!].name,
                menuInfo[item.menuId!].option[0]?.list[item?.option![0] ?? 0].name ?? '-',
                menuInfo[item.menuId!].option[1]?.list[item?.option![1] ?? 0].name ?? '-',
                item.dish!,
                item.count!,
                item.stateId,
              ];
          const changeStateHandler = () => {
            if (!isStyle) {
              const nextTask = { ...item, stateId: nextState[item.stateId as 0 | 3 | 8] };
              setTaskList((prev) => [...prev.slice(0, idx), nextTask, ...prev.slice(idx + 1)]);
            }
          };
          return (
            <TableRow key={idx} onClick={changeStateHandler} dataList={dataList} lastIsState />
          );
        })}
      </Table>
    </TaskContainer>
  );
};

export default CookTaskPage;
