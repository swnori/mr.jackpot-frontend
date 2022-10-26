import { MobileCardTitleText } from '../style';

interface CardTitleValue {
  title: string;
}

const MobileCardTitle = ({ title }: CardTitleValue) => {
  return <MobileCardTitleText>{title}</MobileCardTitleText>;
};

export default MobileCardTitle;
