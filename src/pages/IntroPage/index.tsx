import { IntroCardContainer, IntroContainer, IntroTitle } from './style';

import Page from '@/components/Page';
import IntroCard from '@/components/Intro/Card';

import CEOIcon from '@/assets/icons/icon-setting.svg';
import ClientIcon from '@/assets/icons/icon-dining.svg';
import StaffIcon from '@/assets/icons/icon-chef.svg';

const IntroPage = () => {
  return (
    <Page type='common'>
      <IntroContainer>
        <IntroTitle>당신은 누구신가요?</IntroTitle>
        <IntroCardContainer>
          <IntroCard img={ClientIcon} title='고객' desc='특별한 날, 집으로 감동이 배달됩니다.' />
          <IntroCard img={StaffIcon} title='직원' desc='감동을 만들어 보냅니다.' />
          <IntroCard img={CEOIcon} title='관리자' desc='서비스의 주인입니다.' />
        </IntroCardContainer>
      </IntroContainer>
    </Page>
  );
};

export default IntroPage;
