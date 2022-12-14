import React, { useState } from 'react';

import { DinnerListContainer, MainContainer, MainNoticeWrapper } from './style';

import MobileSearch from '@/components/MobileSearch';
import MobileItem from '@/components/MobileItem';
import Header from '@/components/Header';

import useOrder from '@/hooks/useOrder';
import useMenu from '@/hooks/useMenu';
import { useLink } from '@/hooks/useLink';

import { KRWFormat } from '@/utils/format';

import DinnerImg from '@/assets/images/dinner.png';

const priceArr = [50000, 40000, 37000, 128000];

const ClientMainPage = () => {
  const link = useLink();
  const { setDinnerDefault } = useOrder();
  const { dinnerList } = useMenu();

  const [filteredDinnerList, setFilteredDinnerList] = useState(dinnerList);
  const [keyword, setKeyword] = useState('');

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.currentTarget.value;
    setKeyword(word);
    if (word === '') {
      setFilteredDinnerList(dinnerList);
    } else {
      setFilteredDinnerList(
        dinnerList.filter((dinner) => dinner.desc.includes(word) || dinner.name.includes(word)),
      );
    }
  };

  const goDinnerPage = (id: number) => {
    setDinnerDefault(id);
    link.to(`/client/dinner/create/${id}`);
  };
  return (
    <MainContainer>
      <Header type='none' showLogo />
      <MobileSearch value={keyword} setValueHandler={searchHandler} />
      <MainNoticeWrapper
        initial={{ opacity: 0, transform: 'translateY(5px)' }}
        animate={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.9, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
      >
        원하시는 디너를 골라주세요
      </MainNoticeWrapper>
      <DinnerListContainer>
        {filteredDinnerList.map((item, idx) => (
          <MobileItem
            key={item.id}
            type='button'
            id={item.id}
            img={DinnerImg}
            title={item.name}
            subTitle={item.desc}
            desc={KRWFormat(priceArr[idx])}
            onClick={() => goDinnerPage(item.id)}
          />
        ))}
      </DinnerListContainer>
    </MainContainer>
  );
};

export default ClientMainPage;
