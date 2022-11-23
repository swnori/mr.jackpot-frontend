import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

import { GraphContainer } from './style';

import { KRWFormat } from '@/utils/format';

import { StateColorCode } from '@/constants/color';

interface GraphValue {
  data: number[];
  curMonth: number;
}

const Graph = ({ data, curMonth }: GraphValue) => {
  const colors = data.map((_, idx) =>
    idx + 1 === curMonth ? StateColorCode.접수 : StateColorCode.완료,
  );

  const series = [{ name: '매출액', data }];
  const options: ApexOptions = {
    colors,
    plotOptions: {
      bar: {
        columnWidth: '40%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        'Jan.',
        'Feb.',
        'Mar.',
        'Apr.',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep.',
        'Oct.',
        'Nov.',
        'Dec.',
      ],
      labels: {
        style: {
          fontSize: '12px',
        },
      },
    },
    title: {
      text: '미스터 대박 월별 매출',
    },
    tooltip: {
      y: {
        formatter(val: number) {
          return KRWFormat(val);
        },
      },
    },
  };
  return (
    <GraphContainer>
      <Chart type='bar' series={series} options={options} width='750' />
    </GraphContainer>
  );
};

export default Graph;
