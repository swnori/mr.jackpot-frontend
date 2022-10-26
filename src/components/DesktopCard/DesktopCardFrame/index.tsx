import { DesktopCardContainer } from '../style';

const DesktopCardFrame = (props: any) => {
  const { children } = props;
  return <DesktopCardContainer {...props}>{children}</DesktopCardContainer>;
};

export default DesktopCardFrame;
