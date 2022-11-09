import { useRecoilValue, useSetRecoilState } from 'recoil';

import { DinnerListContainer, MainContainer, MainNoticeWrapper } from './style';

import MobileSearch from '@/components/MobileSearch';
import MobileItem from '@/components/MobileItem';
import Header from '@/components/Header';

import { useLink } from '@/hooks/useLink';

import { KRWFormat } from '@/utils/format';

import { dinnerOrderState } from '@/stores/order';
import { menuInfoState } from '@/stores/menu';
import { dinnerInfoState } from '@/stores/dinner';

const ClientMainPage = () => {
  const link = useLink();
  const dinnerList = useRecoilValue(dinnerInfoState);
  const menuInfo = useRecoilValue(menuInfoState);
  const setDinnerOrder = useSetRecoilState(dinnerOrderState);

  const goDinnerPage = (id: number) => {
    const dinnerInfo = dinnerList[id];
    setDinnerOrder({
      mainDish: dinnerInfo.mainDish.map((menu) => ({
        menuId: menu.menuId,
        option: [
          menuInfo[menu.menuId].option[0]?.default ?? 0,
          menuInfo[menu.menuId].option[1]?.default ?? 0,
        ],
        isDefault: true,
        count: menu.count,
      })),
      side: dinnerInfo.side.map((menu) => ({
        menuId: menu.menuId,
        option: [
          menuInfo[menu.menuId].option[0]?.default ?? 0,
          menuInfo[menu.menuId].option[1]?.default ?? 0,
        ],
        isDefault: true,
        count: menu.count,
      })),
      drink: dinnerInfo.drink.map((menu) => ({
        menuId: menu.menuId,
        option: [
          menuInfo[menu.menuId].option[0]?.default ?? 0,
          menuInfo[menu.menuId].option[1]?.default ?? 0,
        ],
        isDefault: true,
        count: menu.count,
      })),
      style: dinnerInfo.style,
    });
    link.to(`/client/dinner/${id}`);
  };
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
            onClick={() => goDinnerPage(item.id)}
          />
        ))}
      </DinnerListContainer>
    </MainContainer>
  );
};

export default ClientMainPage;
