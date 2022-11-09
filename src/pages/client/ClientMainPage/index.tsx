import { useRecoilValue } from 'recoil';

import { DinnerListContainer, MainContainer, MainNoticeWrapper } from './style';

import MobileSearch from '@/components/MobileSearch';
import MobileItem from '@/components/MobileItem';
import Header from '@/components/Header';

import { useLink } from '@/hooks/useLink';

import { KRWFormat } from '@/utils/format';

import { dinnerInfoState } from '@/stores/dinner';

const ClientMainPage = () => {
  const link = useLink();
  const dinnerList = useRecoilValue(dinnerInfoState);
  return (
    <MainContainer>
      <Header type='none' showLogo />
      <MobileSearch />
      <MainNoticeWrapper
        initial={{ opacity: 0, transform: 'translateY(5px)' }}
        animate={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.9, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
      >
        원하시는 디너를 골라주세요
      </MainNoticeWrapper>
      <DinnerListContainer>
        {dinnerList.map((item) => (
          <MobileItem
            key={item.id}
            type='button'
            id={item.id}
            title={item.name}
            subTitle={item.desc}
            desc={KRWFormat(item.price)}
            onClick={() => link.to(`/client/dinner/${item.id}`)}
          />
        ))}
      </DinnerListContainer>
    </MainContainer>
  );
};

export default ClientMainPage;
