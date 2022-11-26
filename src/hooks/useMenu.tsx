import { useRecoilValue } from 'recoil';

import { menuInfoState, styleInfoState } from '@/stores/menu';
import { dinnerInfoState } from '@/stores/dinner';

const useMenu = () => {
  const dinnerList = useRecoilValue(dinnerInfoState);
  const menuList = useRecoilValue(menuInfoState);
  const styleList = useRecoilValue(styleInfoState);

  const getDinnerById = (id: number) => {
    const dinner = dinnerList.find((item) => item.id === id);
    return dinner;
  };

  const getMenuById = (id: number) => {
    const menu = menuList.find((item) => item.id === id);
    return menu;
  };

  const getStyleById = (id: number) => {
    const style = styleList.find((item) => item.id === id);
    return style;
  };

  const getMenuByOptId = (id: number) => {
    const menu = menuList.find((item) =>
      item.option.some((optType) => Object.keys(optType?.list!).some((opt) => Number(opt) === id)),
    );
    return menu;
  };

  return {
    dinnerList,
    menuList,
    styleList,
    getDinnerById,
    getMenuById,
    getStyleById,
    getMenuByOptId,
  };
};

export default useMenu;
