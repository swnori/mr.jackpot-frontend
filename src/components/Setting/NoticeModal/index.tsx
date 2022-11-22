import React from 'react';

import { SettingModalContainer, SettingModalNoticeWrapper } from '../style';

const NoticeModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <SettingModalContainer>
      <SettingModalNoticeWrapper>{children}</SettingModalNoticeWrapper>
    </SettingModalContainer>
  );
};

export default NoticeModal;
