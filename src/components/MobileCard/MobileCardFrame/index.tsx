import { MobileCardContainer } from '../style';

const MobileCardFrame = (props: any) => {
  const { children } = props;
  return <MobileCardContainer {...props}>{children}</MobileCardContainer>;
};

export default MobileCardFrame;
