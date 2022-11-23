import {
  CardContainer,
  CardImg,
  CardTitle,
  CardUnit,
  CardValue,
  CardValueContainer,
} from './style';

interface StatisticCardValue {
  iconSrc: string;
  title: string;
  value: number;
  unit: string;
}

const StatisticCard = ({ iconSrc, title, value, unit }: StatisticCardValue) => {
  return (
    <CardContainer>
      <CardImg src={iconSrc} />
      <CardTitle>
        전 달 대비 <br />
        {title}
      </CardTitle>
      <CardValueContainer>
        <CardValue>
          {value >= 0 ? '+' : '-'} {value}
        </CardValue>
        <CardUnit>{unit}</CardUnit>
      </CardValueContainer>
    </CardContainer>
  );
};

export default StatisticCard;
