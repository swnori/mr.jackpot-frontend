import {
  DesktopCardContainer,
  DesktopCardDesc,
  DesktopCardTitle,
  DesktopCardTitleContainer,
  DesktopCardTitleIcon,
} from './style';

interface IIntroCard {
  img: string;
  title: string;
  desc: string;
}

const IntroCard = ({ img, title, desc }: IIntroCard) => {
  return (
    <DesktopCardContainer>
      <DesktopCardTitleContainer>
        <DesktopCardTitleIcon src={img} />
        <DesktopCardTitle>{title}</DesktopCardTitle>
      </DesktopCardTitleContainer>
      <DesktopCardDesc>{desc}</DesktopCardDesc>
    </DesktopCardContainer>
  );
};

export default IntroCard;
