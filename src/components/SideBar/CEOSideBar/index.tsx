import { LogOutBtn, SideBarBtn, SideBarContainer, SideBarIcon } from '../style';

import { useLink } from '@/hooks/useLink';

import StockIcon from '@/assets/icons/icon-stock.svg';
import StatisticIcon from '@/assets/icons/icon-statistic.svg';
import SettingIcon from '@/assets/icons/icon-setting.svg';
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
const CEOSideBar = ({ pathName }: SideBarValue) => {
  const link = useLink();
  const isMain = pathName === 'order';
  const isTask = pathName === 'task';
  const isStock = pathName === 'stock';
  const isStatistic = pathName === 'statistic';
  const isSetting = pathName === 'setting';
  return (
    <SideBarContainer>
      <SideBarBtn onClick={() => link.to('/ceo/order')} isActive={isMain}>
        <SideBarIcon src={BellIcon} />
        {isMain ? 'Orders' : ''}
      </SideBarBtn>
      <SideBarBtn onClick={() => link.to('/ceo/task')} isActive={isTask}>
        <SideBarIcon src={CheckListIcon} />
        {isTask ? 'Tasks' : ''}
      </SideBarBtn>
      <SideBarBtn onClick={() => link.to('/ceo/stock')} isActive={isStock}>
        <SideBarIcon src={StockIcon} />
        {isStock ? 'Stock' : ''}
      </SideBarBtn>
      <SideBarBtn onClick={() => link.to('/ceo/statistic')} isActive={isStatistic}>
        <SideBarIcon src={StatisticIcon} />
        {isStatistic ? 'Statistic' : ''}
      </SideBarBtn>
      <SideBarBtn onClick={() => link.to('/ceo/setting')} isActive={isSetting}>
        <SideBarIcon src={SettingIcon} />
        {isSetting ? 'Setting' : ''}
      </SideBarBtn>
      <LogOutBtn onClick={() => link.to('/')}>
        <SideBarIcon src={LogOutIcon} />
      </LogOutBtn>
    </SideBarContainer>
  );
};

export default CEOSideBar;
