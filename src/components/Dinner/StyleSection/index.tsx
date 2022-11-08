import { useRecoilValue } from 'recoil';

import { SectionContainer, SectionTitle } from '../style';

import MobileItem from '@/components/MobileItem';

import { KRWFormat } from '@/utils/format';

import { styleInfoState } from '@/stores/menu';

interface StyleSectionValue {
  orderStyle: number;
  setStyleHandler: (id: number) => void;
}

const StyleSection = ({ orderStyle, setStyleHandler }: StyleSectionValue) => {
  const styleInfo = useRecoilValue(styleInfoState);
  return (
    <SectionContainer>
      <SectionTitle>Style</SectionTitle>
      {styleInfo.map((item) => (
        <MobileItem
          key={item.id}
          type='radio'
          title={item.name}
          subTitle={item.desc}
          desc={KRWFormat(item.price)}
          onClick={() => setStyleHandler(item.id)}
          checked={item.id === orderStyle}
        />
      ))}
    </SectionContainer>
  );
};

export default StyleSection;
