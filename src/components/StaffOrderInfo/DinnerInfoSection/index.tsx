import { useState } from 'react';

import {
  StaffOrderInfoBtn,
  StaffOrderInfoBtnImg,
  StaffOrderInfoDesc,
  StaffOrderInfoSectionContainer,
  StaffOrderInfoTitle,
  StaffOrderInfoWrapper,
} from '../style';

import TableRow from '@/components/Table/TableRow';
import Table from '@/components/Table';
import OrderState from '@/components/OrderState';

import useMenu from '@/hooks/useMenu';

import { ValueOf } from '@/utils/type';

import { MenuOrder } from '@/types/order';
import { MenuType } from '@/types/menu';

import TopIcon from '@/assets/icons/icon-arrow-top.svg';
import BottomIcon from '@/assets/icons/icon-arrow-bottom.svg';

interface DinnerInfoData {
  dinnerId: number;
  type: number;
  style: number;
  menuList: MenuOrder[];
  stateId: number;
}

interface DinnerInfoValue {
  data: DinnerInfoData;
  showState?: boolean;
  onClick?: (idx: number, type?: ValueOf<typeof MenuType>) => void;
}

const DinnerInfoSection = ({ data, showState = false, onClick }: DinnerInfoValue) => {
  const [showDinner, setShowDinner] = useState(false);

  const { getMenuById, getDinnerById, getStyleById } = useMenu();

  const showDinnerHandler = () => {
    setShowDinner((prev) => !prev);
  };

  const tableHeaderList = showState
    ? ['ID', 'Menu', 'Opt.1', 'Opt.2', 'Cnt', 'Status']
    : ['ID', 'Menu', 'Opt.1', 'Opt.2', 'Cnt'];

  return (
    <StaffOrderInfoSectionContainer>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>디너 ID</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>
          D-{data.dinnerId} <OrderState stateId={data.stateId} />
        </StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>디너 이름</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{getDinnerById(data.type)!.name}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>스타일</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{getStyleById(data.style)!.name}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>디너 구성</StaffOrderInfoTitle>
        <StaffOrderInfoBtn onClick={() => showDinnerHandler()}>
          <StaffOrderInfoBtnImg src={showDinner ? TopIcon : BottomIcon} />
        </StaffOrderInfoBtn>
      </StaffOrderInfoWrapper>
      {showDinner ? (
        <Table headerList={tableHeaderList}>
          {data.menuList.map((menu, idx) => {
            const menuInfo = getMenuById(menu.menuId)!;
            const dataList = showState
              ? [
                  menu.id!,
                  menuInfo.name,
                  menuInfo.option[0]?.list[menu.option[0] ?? 0]?.name ?? '-',
                  menuInfo.option[1]?.list[menu.option[1] ?? 0]?.name ?? '-',
                  menu.count,
                  menu.stateId!,
                ]
              : [
                  menu.id!,
                  menuInfo.name,
                  menuInfo.option[0]?.list[menu.option[0] ?? 0]?.name ?? '-',
                  menuInfo.option[1]?.list[menu.option[1] ?? 0]?.name ?? '-',
                  menu.count,
                ];
            const onClickHandler = () => {
              if (onClick) {
                onClick(idx, menuInfo.type);
              }
            };
            return (
              <TableRow
                key={menu.id}
                dataList={dataList}
                onClick={onClickHandler}
                lastIsState={showState}
              />
            );
          })}
        </Table>
      ) : null}
    </StaffOrderInfoSectionContainer>
  );
};

export default DinnerInfoSection;
