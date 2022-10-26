import { isMobile } from 'react-device-detect';

import { DesktopCardDesc, MobileCardDesc, MobileCardTextContainer } from './style';

import { MobileCardFrame, MobileCardIcon, MobileCardTitle } from '@/components/MobileCard';
import { DesktopCardFrame, DesktopCardTitle } from '@/components/DesktopCard';

import { useLink } from '@/hooks/useLink';

interface IntroCardValue {
  img: string;
  title: string;
  desc: string;
  to: string;
}

const desktopVariable = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

const mobileVariable = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const IntroCard = ({ img, title, desc, to }: IntroCardValue) => {
  const link = useLink();

  return isMobile ? (
    <MobileCardFrame
      onClick={() => link.to(to)}
      variants={mobileVariable}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.30)' }}
      transition={{ type: 'easeInOut', duration: 0.5 }}
    >
      <MobileCardIcon img={img} />
      <MobileCardTextContainer>
        <MobileCardTitle title={title} />
        <MobileCardDesc>{desc}</MobileCardDesc>
      </MobileCardTextContainer>
    </MobileCardFrame>
  ) : (
    <DesktopCardFrame
      onClick={() => link.to(to)}
      variants={desktopVariable}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.30)' }}
      transition={{ type: 'easeInOut', duration: 0.5 }}
    >
      <DesktopCardTitle img={img} title={title} />
      <DesktopCardDesc>{desc}</DesktopCardDesc>
    </DesktopCardFrame>
  );
};

export default IntroCard;
