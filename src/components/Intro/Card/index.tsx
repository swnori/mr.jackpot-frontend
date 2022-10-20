import {
  DesktopCardContainer,
  DesktopCardDesc,
  DesktopCardTitle,
  DesktopCardTitleContainer,
  DesktopCardTitleIcon,
} from './style';

import { useLink } from '@/hooks/useLink';

interface IIntroCard {
  img: string;
  title: string;
  desc: string;
  to: string;
}

const item = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

const IntroCard = ({ img, title, desc, to }: IIntroCard) => {
  const link = useLink();

  return (
    <DesktopCardContainer
      onClick={() => link.to(to)}
      variants={item}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.30)' }}
      transition={{ type: 'easeInOut', duration: 0.5 }}
    >
      <DesktopCardTitleContainer>
        <DesktopCardTitleIcon src={img} />
        <DesktopCardTitle>{title}</DesktopCardTitle>
      </DesktopCardTitleContainer>
      <DesktopCardDesc>{desc}</DesktopCardDesc>
    </DesktopCardContainer>
  );
};

export default IntroCard;
