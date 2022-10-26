import { isMobile } from 'react-device-detect';

import {
  DesktopIntroCardContainer,
  IntroContainer,
  IntroTitle,
  MobileIntroCardContainer,
} from './style';

import Page from '@/components/Page';
import IntroCard from '@/components/Intro/Card';

import CEOIcon from '@/assets/icons/icon-setting.svg';
import ClientIcon from '@/assets/icons/icon-dining.svg';
import StaffIcon from '@/assets/icons/icon-chef.svg';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delay: 0.7,
    },
  },
};

const IntroPage = () => {
  return (
    <Page type='common'>
      <IntroContainer>
        <IntroTitle
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 3 } }}
        >
          당신은 누구신가요?
        </IntroTitle>

        {isMobile ? (
          <MobileIntroCardContainer variants={container} initial='hidden' animate='show'>
            <IntroCard
              img={ClientIcon}
              title='고객'
              desc='특별한 날, 집으로 감동이 배달됩니다.'
              to='/client'
            />
            <IntroCard img={StaffIcon} title='직원' desc='감동을 만들어 보냅니다.' to='/staff' />
            <IntroCard img={CEOIcon} title='관리자' desc='서비스의 주인입니다.' to='/ceo' />
          </MobileIntroCardContainer>
        ) : (
          <DesktopIntroCardContainer variants={container} initial='hidden' animate='show'>
            <IntroCard
              img={ClientIcon}
              title='고객'
              desc='특별한 날, 집으로 감동이 배달됩니다.'
              to='/client'
            />
            <IntroCard img={StaffIcon} title='직원' desc='감동을 만들어 보냅니다.' to='/staff' />
            <IntroCard img={CEOIcon} title='관리자' desc='서비스의 주인입니다.' to='/ceo' />
          </DesktopIntroCardContainer>
        )}
      </IntroContainer>
    </Page>
  );
};

export default IntroPage;
