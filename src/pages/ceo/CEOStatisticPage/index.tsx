import { StatisticContainer, StatisticTitle } from './style';

import Graph from '@/components/Statistic/Graph';

const dummyData = [
  7812400, 7310200, 3752300, 5234100, 6923500, 4252300, 4825200, 5823400, 7520300, 4235300, 2310000,
  0,
];

const CEOStatisticPage = () => {
  return (
    <StatisticContainer>
      <StatisticTitle>매출 통계</StatisticTitle>
      <Graph data={dummyData} curMonth={new Date().getMonth() + 1} />
    </StatisticContainer>
  );
};

export default CEOStatisticPage;
