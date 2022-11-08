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

import { dinnerOrderState } from '@/stores/order';
import { menuInfoState } from '@/stores/menu';
import { dinnerInfoState } from '@/stores/dinner';

const ClientDinnerPage = () => {
  const { id } = useParams();
  const menuInfo = useRecoilValue(menuInfoState);
  const dinnerInfoList = useRecoilValue(dinnerInfoState);
  const dinnerInfo = dinnerInfoList[Number(id)];
  const [dinnerOrder, setDinnerOrder] = useRecoilState(dinnerOrderState);

  useLayoutEffect(() => {
    setDinnerOrder((prev) => ({
      ...prev,
      mainDish: dinnerInfo.mainDish.map((menuId) => ({
        menuId,
        option: [
          menuInfo[menuId].option[0]?.default ?? 0,
          menuInfo[menuId].option[1]?.default ?? 0,
        ],
      })),
      side: dinnerInfo.side.map((menuId) => ({
        menuId,
        option: [
          menuInfo[menuId].option[0]?.default ?? 0,
          menuInfo[menuId].option[1]?.default ?? 0,
        ],
      })),
      drink: dinnerInfo.drink.map((menuId) => ({
        menuId,
        option: [
          menuInfo[menuId].option[0]?.default ?? 0,
          menuInfo[menuId].option[1]?.default ?? 0,
        ],
      })),
      style: dinnerInfo.style,
    }));
  }, [dinnerInfo, menuInfo, setDinnerOrder]);

  const setStyleHandler = (style: number) => {
    setDinnerOrder((prev) => ({ ...prev, style }));
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
        <DinnerSection title='Main Dish' menuOrderList={dinnerOrder.mainDish} />
        <DinnerSection title='Side' menuOrderList={dinnerOrder.side} />
        <DinnerSection title='Drink' menuOrderList={dinnerOrder.drink} />
        <StyleSection orderStyle={dinnerOrder.style} setStyleHandler={setStyleHandler} />
      </DinnerDetailContainer>
    </DinnerContainer>
  );
};

export default ClientDinnerPage;
