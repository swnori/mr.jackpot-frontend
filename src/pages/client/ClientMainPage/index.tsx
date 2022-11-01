import { ItemListContainer, MainContainer } from './style';

import MobileSearch from '@/components/MobileSearch';
import MobileItem from '@/components/MobileItem';
import Header from '@/components/Header';

const dummyItemList = [
  {
    id: 0,
    img: '',
    title: '발렌타인 디너(Valentine Dinner)',
    subTitle: '스테이크, 와인, 큐피드 접시',
    desc: 'KRW 99,000',
  },
  {
    id: 1,
    img: '',
    title: '프렌치 디너(French Dinner)',
    subTitle: '스테이크, 샐러드, 와인, 커피',
    desc: 'KRW 99,000',
  },
  {
    id: 2,
    img: '',
    title: '잉글리시 디너(English Dinner)',
    subTitle: '스테이크, 베이컨, 에그 스크램블, 빵',
    desc: 'KRW 99,000',
  },
  {
    id: 3,
    img: '',
    title: '샴페인 축제 디너(Champagne Feast Dinner)',
    subTitle: '스테이크, 와인, 커피, 빵',
    desc: 'KRW 99,000',
  },
];

const ClientMainPage = () => {
  return (
    <MainContainer>
      <Header type='none' title='' />
      <MobileSearch />
      <ItemListContainer>
        {dummyItemList.map((item) => (
          <MobileItem
            key={item.id}
            type='button'
            id={item.id}
            title={item.title}
            subTitle={item.subTitle}
            desc={item.desc}
          />
        ))}
      </ItemListContainer>
    </MainContainer>
  );
};

export default ClientMainPage;
