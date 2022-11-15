/* eslint-disable react-hooks/exhaustive-deps */
import { useRecoilState, useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import {
  DinnerContainer,
  DinnerDetailContainer,
  DinnerDetailDesc,
  DinnerImg,
  DinnerImgWrapper,
  SubTitle,
  Title,
  TitleContainer,
} from './style';

import Header from '@/components/Header';
import StyleSection from '@/components/Dinner/StyleSection';
import DinnerSection from '@/components/Dinner/DinnerSection';

import useOrder from '@/hooks/useOrder';
import { useLink } from '@/hooks/useLink';

import { dinnerOrderState } from '@/stores/order';
import { dinnerInfoState } from '@/stores/dinner';

import { MenuOrder } from '@/types/order';
import { MenuType } from '@/types/menu';

const ClientDinnerPage = () => {
  const { mode, id } = useParams();
  const dinnerInfoList = useRecoilValue(dinnerInfoState);
  const [dinnerOrder, setDinnerOrder] = useRecoilState(dinnerOrderState);
  const { setDinnerDefault, loadDinnerFromCart } = useOrder();
  const link = useLink();

  const dinnerInfo =
    mode === 'create' ? dinnerInfoList[Number(id)] : dinnerInfoList[dinnerOrder.type];

  useLayoutEffect(() => {
    if (dinnerOrder.mainDish.length === 0 && mode === 'create') {
      // 모든 디너에는 mainDish가 무조건 존재하므로 주문 정보가 아예 초기화됐는지 검사하려면 mainDish만 검사해도 됨
      setDinnerDefault(Number(id));
    }

    if (mode === 'update') {
      if (!loadDinnerFromCart(Number(id))) {
        link.back();
      }
    }
  }, []);

  const setStyleHandler = (style: number) => {
    setDinnerOrder((prev) => ({ ...prev, style }));
  };

  const setMainDishOrderList = (menuOrderList: MenuOrder[]) => {
    setDinnerOrder((prev) => ({ ...prev, mainDish: menuOrderList }));
  };

  const setSideOrderList = (menuOrderList: MenuOrder[]) => {
    setDinnerOrder((prev) => ({ ...prev, side: menuOrderList }));
  };

  const setDrinkOrderList = (menuOrderList: MenuOrder[]) => {
    setDinnerOrder((prev) => ({ ...prev, drink: menuOrderList }));
  };

  return (
    <DinnerContainer>
      <Header type='back' />
      <TitleContainer>
        <Title>{dinnerInfo.name}</Title>
        <SubTitle>{dinnerInfo.desc}</SubTitle>
      </TitleContainer>
      <DinnerDetailContainer>
        <DinnerImgWrapper>
          <DinnerImg />
        </DinnerImgWrapper>
        <DinnerDetailDesc>
          각 상세 메뉴를 터치하시면 <br />
          메뉴의 옵션을 수정하실 수 있습니다.
        </DinnerDetailDesc>
        <DinnerSection
          title='Main Dish'
          menuOrderList={dinnerOrder.mainDish}
          setMenuOrderList={setMainDishOrderList}
          menuListPath={`/client/menu/${MenuType.MAIN_DISH}`}
        />
        <DinnerSection
          title='Side'
          menuOrderList={dinnerOrder.side}
          setMenuOrderList={setSideOrderList}
          menuListPath={`/client/menu/${MenuType.SIDE}`}
        />
        <DinnerSection
          title='Drink'
          menuOrderList={dinnerOrder.drink}
          setMenuOrderList={setDrinkOrderList}
          menuListPath={`/client/menu/${MenuType.DRINK}`}
        />
        <StyleSection orderStyle={dinnerOrder.style} setStyleHandler={setStyleHandler} />
      </DinnerDetailContainer>
    </DinnerContainer>
  );
};

export default ClientDinnerPage;
