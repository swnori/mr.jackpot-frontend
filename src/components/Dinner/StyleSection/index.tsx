import { SectionContainer, SectionDesc, SectionTitle } from '../style';

import MobileItem from '@/components/MobileItem';

import useMenu from '@/hooks/useMenu';

import { KRWFormat } from '@/utils/format';

interface StyleSectionValue {
  dinnerName: string;
  orderStyle: number;
  setStyleHandler: (id: number) => void;
}

const StyleSection = ({ dinnerName, orderStyle, setStyleHandler }: StyleSectionValue) => {
  const { styleList } = useMenu();
  return (
    <SectionContainer>
      <SectionTitle>Style</SectionTitle>
      {styleList
        .filter((style) => dinnerName !== '샴페인 축제 디너' || style.name !== '심플')
        .map((style) => (
          <MobileItem
            key={style.id}
            type='radio'
            title={style.name}
            subTitle={style.desc}
            desc={KRWFormat(style.price)}
            onClick={() => setStyleHandler(style.id)}
            checked={style.id === orderStyle}
          />
        ))}

      <SectionDesc>* 발렌타인 디너일 경우, 접시에 큐피드 장식이 추가됩니다</SectionDesc>
    </SectionContainer>
  );
};

export default StyleSection;
