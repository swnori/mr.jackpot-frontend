import { useSetRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

import { MenuListContainer, MenuListNoticeWrapper } from './style';

import MobileSearch from '@/components/MobileSearch';
import MobileItem from '@/components/MobileItem';
import Header from '@/components/Header';

import useMenu from '@/hooks/useMenu';
import { useLink } from '@/hooks/useLink';

import { KRWFormat } from '@/utils/format';

import { dinnerOrderState } from '@/stores/order';

import { MenuOrder } from '@/types/order';
import { MenuType } from '@/types/menu';

const ClientMenuListPage = () => {
  const { type } = useParams();
  const link = useLink();
  const { getMenuById, menuList } = useMenu();

  const setDinnerOrder = useSetRecoilState(dinnerOrderState);
  const filteredTypeMenuList = menuList.filter((menu) => menu.type === type);
  const [filteredWordMenuList, setFilteredWordMenuList] = useState(filteredTypeMenuList);

  const [keyword, setKeyword] = useState('');

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.currentTarget.value;
    setKeyword(word);
    if (word === '') {
      setFilteredWordMenuList(filteredTypeMenuList);
    } else {
      setFilteredWordMenuList(filteredTypeMenuList.filter((menu) => menu.name.includes(word)));
    }
  };

  const addItem = (id: number) => {
    const newItem = getMenuById(id)!;
    const newOrder = {
      menuId: newItem.id,
      option: [newItem.option[0]?.default, newItem.option[1]?.default],
      isDefault: false,
      count: 1,
    } as MenuOrder;
    if (type === MenuType.MAIN_DISH) {
      setDinnerOrder((prev) => ({ ...prev, mainDish: [...prev.mainDish, newOrder] }));
    } else if (type === MenuType.SIDE) {
      setDinnerOrder((prev) => ({ ...prev, side: [...prev.side, newOrder] }));
    } else if (type === MenuType.DRINK) {
      setDinnerOrder((prev) => ({ ...prev, drink: [...prev.drink, newOrder] }));
    }

    link.back();
  };

  return (
    <MenuListContainer>
      <Header type='back' showLogo />
      <MobileSearch value={keyword} setValueHandler={searchHandler} />
      <MenuListNoticeWrapper
        initial={{ opacity: 0, transform: 'translateY(5px)' }}
        animate={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.9, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
      >
        메뉴를 클릭하면 자동으로 담아집니다
      </MenuListNoticeWrapper>
      {filteredWordMenuList.map((item) => {
        const optionText = item.option[0]
          ? `${item.option[0]?.name ?? ''}${
              item.option[1]?.name ? ` | ${item.option[1].name}` : ''
            } 선택 가능`
          : '옵션 없음';
        return (
          <MobileItem
            key={item.id}
            type='button'
            id={item.id}
            title={item.name}
            subTitle={optionText}
            desc={KRWFormat(item.price)}
            onClick={() => addItem(item.id)}
          />
        );
      })}
    </MenuListContainer>
  );
};

export default ClientMenuListPage;
