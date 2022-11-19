import { FooterBtn, FooterContainer, FooterIcon, LogOutBtn } from '../style';

import { useLink } from '@/hooks/useLink';

import LogOutIcon from '@/assets/icons/icon-log-out.svg';
import CheckListIcon from '@/assets/icons/icon-check-list.svg';
import BellIcon from '@/assets/icons/icon-bell.svg';

interface FooterValue {
  pathName: string;
}
/**
 * @param pathName url path 두번째 인자
 * @returns pathName에 따른 footer
 */
const StaffFooter = ({ pathName }: FooterValue) => {
  const link = useLink();
  const isMain = pathName === 'main';
  return (
    <FooterContainer isStaff>
      <FooterBtn onClick={() => link.to('/staff/delivery/main')} isActive={isMain}>
        <FooterIcon src={BellIcon} />
        {isMain ? 'Orders' : ''}
      </FooterBtn>
      <FooterBtn onClick={() => link.to('/staff/delivery/task')} isActive={!isMain}>
        <FooterIcon src={CheckListIcon} />
        {!isMain ? 'Tasks' : ''}
      </FooterBtn>
      <LogOutBtn onClick={() => link.to('/')}>
        <FooterIcon src={LogOutIcon} />
      </LogOutBtn>
    </FooterContainer>
  );
};

export default StaffFooter;
