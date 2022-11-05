import { useParams } from 'react-router-dom';

import { DinnerContainer, SubTitle, Title, TitleContainer } from './style';

import Header from '@/components/Header';

const dummyData = [
  {
    title: '발렌타인 디너(Valentine Dinner)',
    subTitle: '스테이크 + 와인 + 냅킨 + 큐피드 접시',
  },
];

const ClientDinnerPage = () => {
  const { id } = useParams();
  const data = dummyData[Number(id)];
  return (
    <DinnerContainer>
      <Header type='back' />
      <TitleContainer>
        <Title>{data.title}</Title>
        <SubTitle>{data.subTitle}</SubTitle>
      </TitleContainer>
    </DinnerContainer>
  );
};

export default ClientDinnerPage;
