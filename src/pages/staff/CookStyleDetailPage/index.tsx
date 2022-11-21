import { useState } from 'react';

import {
  CookStyleDetailBackBtn,
  CookStyleDetailBackBtnImg,
  CookStyleDetailBtn,
  CookStyleDetailBtnImg,
  CookStyleDetailContainer,
  CookStyleDetailTitle,
} from './style';

import DinnerInfoSection from '@/components/StaffOrderInfo/DinnerInfoSection';

import { useLink } from '@/hooks/useLink';

import { ValueOf } from '@/utils/type';

import { MenuOrder } from '@/types/order';
import { MenuType } from '@/types/menu';

import CheckIcon from '@/assets/icons/icon-check.svg';
import BackIcon from '@/assets/icons/icon-arrow-back.svg';

const dummyData = {
  id: 24,
  type: 0,
  price: 100000,
  menuList: [
    { id: 0, menuId: 0, option: [41, 46], count: 1, stateId: 8 },
    { id: 1, menuId: 9, option: [null, null], count: 4, stateId: 8 },
    { id: 2, menuId: 5, option: [51, null], count: 1, stateId: 8 },
    { id: 3, menuId: 11, option: [null, null], count: 1, stateId: 0 },
    { id: 4, menuId: 13, option: [null, null], count: 1, stateId: 0 },
  ] as MenuOrder[],
  style: 1,
  stateId: 4,
};

const nextState = {
  0: 8,
  8: 0,
};

const CookStyleDetailPage = () => {
  const link = useLink();
  const initial = {
    dinnerId: dummyData.id,
    type: dummyData.type,
    price: dummyData.price,
    style: dummyData.style,
    menuList: dummyData.menuList,
    stateId: dummyData.stateId,
  };
  const [data, setData] = useState(initial);
  const dinnerClickHandler = (idx: number, type?: ValueOf<typeof MenuType>) => {
    if (type === MenuType.STYLE) {
      setData((prev) => {
        const nextMenu = {
          ...prev.menuList[idx],
          stateId: nextState[prev.menuList[idx].stateId as 0 | 8],
        };
        const nextMenuList = [
          ...prev.menuList.slice(0, idx),
          nextMenu,
          ...prev.menuList.slice(idx + 1),
        ];
        return { ...prev, menuList: nextMenuList };
      });
    }
  };
  const isAllComplete = data.menuList.every((menu) => menu.stateId === 8);
  return (
    <CookStyleDetailContainer>
      <CookStyleDetailTitle>
        디너 상세
        <CookStyleDetailBackBtn onClick={() => link.back()}>
          <CookStyleDetailBackBtnImg src={BackIcon} />
        </CookStyleDetailBackBtn>
      </CookStyleDetailTitle>
      <DinnerInfoSection data={data} onClick={dinnerClickHandler} showState />;
      <CookStyleDetailBtn disabled={!isAllComplete}>
        포장 완료 <CookStyleDetailBtnImg src={CheckIcon} />
      </CookStyleDetailBtn>
    </CookStyleDetailContainer>
  );
};

export default CookStyleDetailPage;
