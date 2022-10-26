import { DesktopCardTitleContainer, DesktopCardTitleIcon, DesktopCardTitleText } from '../style';

interface CardTitleValue {
  img: string;
  title: string;
}

const DesktopCardTitle = ({ img, title }: CardTitleValue) => {
  return (
    <DesktopCardTitleContainer>
      <DesktopCardTitleIcon src={img} />
      <DesktopCardTitleText>{title}</DesktopCardTitleText>
    </DesktopCardTitleContainer>
  );
};

export default DesktopCardTitle;
