import { useRecoilValue } from 'recoil';
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

import { KRWFormat } from '@/utils/format';

import { menuInfoState, styleInfoState } from '@/stores/menu';
import { dinnerInfoState } from '@/stores/dinner';

import { MenuOrder } from '@/types/order';

import TopIcon from '@/assets/icons/icon-arrow-top.svg';
import BottomIcon from '@/assets/icons/icon-arrow-bottom.svg';

interface DinnerInfoData {
  dinnerId: number;
  type: number;
  price: number;
  style: number;
  menuList: MenuOrder[];
  stateId: number;
}

interface DinnerInfoValue {
  data: DinnerInfoData;
}

const DinnerInfoSection = ({ data }: DinnerInfoValue) => {
  const dinnerInfo = useRecoilValue(dinnerInfoState);
  const styleInfo = useRecoilValue(styleInfoState);
  const menuInfo = useRecoilValue(menuInfoState);
  const [showDinner, setShowDinner] = useState(false);

  const showDinnerHandler = () => {
    setShowDinner((prev) => !prev);
  };

  return (
    <StaffOrderInfoSectionContainer>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>디너 ID</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>
          D-{data.dinnerId} <OrderState stateId={data.stateId} />{' '}
        </StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>디너 이름</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{dinnerInfo[data.type].name}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>가격</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{KRWFormat(data.price)}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>스타일</StaffOrderInfoTitle>
        <StaffOrderInfoDesc>{styleInfo[data.style].name}</StaffOrderInfoDesc>
      </StaffOrderInfoWrapper>
      <StaffOrderInfoWrapper>
        <StaffOrderInfoTitle>디너 구성</StaffOrderInfoTitle>
        <StaffOrderInfoBtn onClick={() => showDinnerHandler()}>
          <StaffOrderInfoBtnImg src={showDinner ? TopIcon : BottomIcon} />
        </StaffOrderInfoBtn>
      </StaffOrderInfoWrapper>
      {showDinner ? (
        <Table headerList={['ID', 'Menu', 'Opt.1', 'Opt.2', 'Cnt']}>
          {data.menuList.map((menu) => (
            <TableRow
              dataList={[
                menu.id!,
                menuInfo[menu.menuId].name,
                menuInfo[menu.menuId].option[0]?.list[menu.option[0] ?? 0]?.name ?? '-',
                menuInfo[menu.menuId].option[1]?.list[menu.option[1] ?? 0]?.name ?? '-',
                menu.count,
              ]}
            />
          ))}
        </Table>
      ) : null}
    </StaffOrderInfoSectionContainer>
  );
};

export default DinnerInfoSection;
