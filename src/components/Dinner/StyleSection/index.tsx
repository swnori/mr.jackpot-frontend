import { useRecoilValue } from 'recoil';

import { SectionContainer, SectionDesc, SectionTitle } from '../style';

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

      <SectionDesc>* 발렌타인 디너일 경우, 접시에 큐피드 장식이 추가됩니다</SectionDesc>
    </SectionContainer>
  );
};

export default StyleSection;
