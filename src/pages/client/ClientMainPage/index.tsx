import { DinnerListContainer, MainContainer, MainNoticeWrapper } from './style';

import MobileSearch from '@/components/MobileSearch';
import MobileItem from '@/components/MobileItem';
import Header from '@/components/Header';

import { useLink } from '@/hooks/useLink';

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
  const link = useLink();
  return (
    <MainContainer>
      <Header type='none' showLogo />
      <MobileSearch />
      <MainNoticeWrapper
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.9, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
      >
        원하시는 디너를 골라주세요
      </MainNoticeWrapper>
      <DinnerListContainer>
        {dummyItemList.map((item) => (
          <MobileItem
            key={item.id}
            type='button'
            id={item.id}
            title={item.title}
            subTitle={item.subTitle}
            desc={item.desc}
            onClick={() => link.to(`/client/dinner/${item.id}`)}
          />
        ))}
      </DinnerListContainer>
    </MainContainer>
  );
};

export default ClientMainPage;
