import { useParams } from 'react-router-dom';

import {
  AddMenuBtnContainer,
  AddMenuImg,
  DinnerContainer,
  DinnerDetailContainer,
  DinnerDetailDesc,
  DinnerImg,
  DinnerImgWrapper,
  DishTitle,
  DrinkContainer,
  MainDishContainer,
  SideContainer,
  StyleContainer,
  SubTitle,
  Title,
  TitleContainer,
} from './style';

import MobileItem from '@/components/MobileItem';
import Header from '@/components/Header';

import AddMenuIcon from '@/assets/icons/icon-round-add.svg';

const dummyData = [
  {
    title: '발렌타인 디너(Valentine Dinner)',
    subTitle: '스테이크 + 와인 + 냅킨 + 큐피드 접시',
    img: '',
    defaultMenu: {
      mainDish: [
        {
          name: '스테이크(Steak)',
          price: 49000,
        },
        {
          name: '스테이크(Steak)',
          price: 49000,
        },
        {
          name: '스테이크(Steak)',
          price: 49000,
        },
        {
          name: '스테이크(Steak)',
          price: 49000,
        },
        {
          name: '스테이크(Steak)',
          price: 49000,
        },
        {
          name: '스테이크(Steak)',
          price: 49000,
        },
        {
          name: '스테이크(Steak)',
          price: 49000,
        },
        {
          name: '스테이크(Steak)',
          price: 49000,
        },
      ],
      side: [
        {
          name: '에그 스크램블(Scrambled Egg)',
          price: 9000,
        },
      ],
      drink: [
        {
          name: '레드 와인(Red Wine)',
          price: 4500,
        },
      ],
      style: 'simple',
    },
  },
];

interface AddMenuBtnValue {
  onClick?: () => void;
}

const AddMenuBtn = ({ onClick }: AddMenuBtnValue) => {
  return (
    <AddMenuBtnContainer onClick={onClick}>
      <AddMenuImg src={AddMenuIcon} />
      메뉴 추가
    </AddMenuBtnContainer>
  );
};

const ClientDinnerPage = () => {
  const { id } = useParams();
  const data = dummyData[Number(id)];
  return (
    <DinnerContainer>
      <Header type='back' />
      <TitleContainer>
        <Title>{data.title}</Title>
        <SubTitle>{data.subTitle}</SubTitle>
      </TitleContainer>
      <DinnerDetailContainer>
        <DinnerImgWrapper>
          <DinnerImg />
        </DinnerImgWrapper>
        <DinnerDetailDesc>
          각 상세 메뉴를 터치하시면 <br />
          메뉴의 옵션을 수정하실 수 있습니다.
        </DinnerDetailDesc>
        <MainDishContainer>
          <DishTitle>Main Dish</DishTitle>
          {data.defaultMenu.mainDish.map((item, idx) => (
            <MobileItem key={idx} type='item' title={item.name} desc={`${item.price}`} />
          ))}
          <AddMenuBtn />
        </MainDishContainer>
        <SideContainer>
          <DishTitle>Side</DishTitle>
          {data.defaultMenu.side.map((item, idx) => (
            <MobileItem key={idx} type='item' title={item.name} desc={`${item.price}`} />
          ))}
          <AddMenuBtn />
        </SideContainer>
        <DrinkContainer>
          <DishTitle>Drink</DishTitle>
          {data.defaultMenu.drink.map((item, idx) => (
            <MobileItem key={idx} type='item' title={item.name} desc={`${item.price}`} />
          ))}
          <AddMenuBtn />
        </DrinkContainer>
        <StyleContainer>
          <DishTitle>Style</DishTitle>
          <MobileItem
            type='radio'
            title='심플(Simple)'
            subTitle='플라스틱 쟁반 | 상자 접시 | 냅킨'
            desc='KRW 5,000'
            checked={data.defaultMenu.style === 'simple'}
          />
          <MobileItem
            type='radio'
            title='그랜드(Grand)'
            subTitle='나무 쟁반 | 도자기 접시 | 흰색 면 냅킨'
            desc='KRW 9,000'
            checked={data.defaultMenu.style === 'grand'}
          />
          <MobileItem
            type='radio'
            title='딜럭스(Deluxe)'
            subTitle='은 쟁반 | 도자기 접시 | 꽃병 | 린넨 냅킨'
            desc='KRW 15,000'
            checked={data.defaultMenu.style === 'deluxe'}
          />
        </StyleContainer>
      </DinnerDetailContainer>
    </DinnerContainer>
  );
};

export default ClientDinnerPage;
