/* eslint-disable react-hooks/exhaustive-deps */
import { useMutation } from 'react-query';
import { useLayoutEffect, useState } from 'react';

import { TaskContainer, TaskTitle } from './style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';

import useMenu from '@/hooks/useMenu';
import { useLink } from '@/hooks/useLink';

import { UX_DELAY } from '@/constants/timer';
import { fetchGetTaskList, fetchTaskNextStep } from '@/apis/staff';

const CookTaskPage = () => {
  const isStyle =
    window.sessionStorage.getItem('role') && window.sessionStorage.getItem('role') === 'styler';

  const link = useLink();
  const { getMenuById, getStyleById, getDinnerById } = useMenu();
  const [taskList, setTaskList] = useState([]);
  const headerList = isStyle
    ? ['D-ID', 'O-ID', 'Dinner', 'Style', 'Status']
    : ['M-ID', 'D-ID', 'O-ID', 'Menu', 'Opt.1', 'Opt.2', 'Dish', 'Count', 'Status'];
  const taskListMutation = useMutation('staffTaskList', fetchGetTaskList, {
    onSuccess: async (res) => {
      const data = await res.json();
      if (isStyle) {
        setTaskList(
          data
            .map((item: any) => ({
              OId: item.orderId,
              DId: item.id,
              dinnerName: getDinnerById(item.dinnerId)!.name,
              style: item.styleId,
              stateId: item.stateId,
            }))
            .sort((a: any, b: any) => b.DId - a.DId),
        );
      } else {
        setTaskList(
          data
            .map((item: any) => ({
              OId: item.orderId,
              DId: item.dinnerId,
              MId: item.id,
              menuId: item.menuId,
              option: item.optionList,
              stateId: item.stateId,
              dish: '종이',
            }))
            .sort((a: any, b: any) => b.MId - a.MId),
        );
      }
    },
  });

  const getTaskList = () => {
    taskListMutation.mutate();
  };

  const taskNextStepMutation = useMutation('staffNextStep', fetchTaskNextStep, {
    onSuccess: () => {
      getTaskList();
    },
    onError: () => {},
  });

  useLayoutEffect(() => {
    getTaskList();
    const interval = setInterval(() => getTaskList(), UX_DELAY);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TaskContainer>
      <TaskTitle>할 일 목록</TaskTitle>
      <Table headerList={headerList}>
        {taskList.map((item: any, idx) => {
          const menu = getMenuById(item.menuId!)!;
          const style = getStyleById(item.style!)!;
          const dataList = isStyle
            ? [item.DId, item.OId, item.dinnerName!, style.name, item.stateId]
            : [
                item.MId!,
                item.DId,
                item.OId,
                menu.name,
                menu.option[0]?.list[item?.option![0] ?? 0].name ?? '-',
                menu.option[1]?.list[item?.option![1] ?? 0].name ?? '-',
                item.dish!,
                item.count!,
                item.stateId,
              ];
          const onClickHandler = () => {
            if (isStyle) {
              link.to(`/staff/cook/task/${item.OId}/${item.DId}`);
            } else {
              taskNextStepMutation.mutate({ id: item.MId });
            }
          };
          return <TableRow key={idx} onClick={onClickHandler} dataList={dataList} lastIsState />;
        })}
      </Table>
    </TaskContainer>
  );
};

export default CookTaskPage;
