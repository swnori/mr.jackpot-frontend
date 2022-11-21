import {
  LogOutBtn,
  SideBarBtn,
  SideBarBtnContainer,
  SideBarContainer,
  SideBarIcon,
} from '../style';

import { useLink } from '@/hooks/useLink';

import StockIcon from '@/assets/icons/icon-stock.svg';
import LogOutIcon from '@/assets/icons/icon-log-out.svg';
import CheckListIcon from '@/assets/icons/icon-check-list.svg';
import BellIcon from '@/assets/icons/icon-bell.svg';

interface SideBarValue {
  pathName: string;
}
/**
 * @param pathName url path 세번째 인자
 * @returns pathName에 따른 footer
 */
const StaffSideBar = ({ pathName }: SideBarValue) => {
  const link = useLink();
  const isMain = pathName === 'order';
  const isTask = pathName === 'task';
  const isStock = pathName === 'stock';
  return (
    <SideBarContainer>
      <SideBarBtnContainer>
        <SideBarBtn onClick={() => link.to('/staff/cook/order')} isActive={isMain}>
          <SideBarIcon src={BellIcon} />
          {isMain ? 'Orders' : ''}
        </SideBarBtn>
        <SideBarBtn onClick={() => link.to('/staff/cook/task')} isActive={isTask}>
          <SideBarIcon src={CheckListIcon} />
          {isTask ? 'Tasks' : ''}
        </SideBarBtn>
        <SideBarBtn onClick={() => link.to('/staff/cook/stock')} isActive={isStock}>
          <SideBarIcon src={StockIcon} />
          {isStock ? 'Stock' : ''}
        </SideBarBtn>
      </SideBarBtnContainer>
      <LogOutBtn onClick={() => link.to('/')}>
        <SideBarIcon src={LogOutIcon} />
      </LogOutBtn>
    </SideBarContainer>
  );
};

export default StaffSideBar;
