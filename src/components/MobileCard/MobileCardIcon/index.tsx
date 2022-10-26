import { MobileCardIconContainer, MobileCardTitleIcon } from '../style';

interface CardTitleValue {
  img: string;
}

const MobileCardIcon = ({ img }: CardTitleValue) => {
  return (
    <MobileCardIconContainer>
      <MobileCardTitleIcon src={img} />
    </MobileCardIconContainer>
  );
};

export default MobileCardIcon;
