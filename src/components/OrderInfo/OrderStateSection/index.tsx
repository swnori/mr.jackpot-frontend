import {
  OrderDDayContainer,
  OrderInfoBtn,
  OrderInfoText,
  OrderSection,
  OrderSectionTitle,
  OrderSectionTitleImg,
} from '../style';

import { ddayFormat } from '@/utils/format';

import ClockIcon from '@/assets/icons/icon-clock.svg';

const stateMap: { [key: string]: string } =
  {
    대기: '주문이 아직 접수되지 않았습니다.',
    접수: '담당자에 의해 예약이 접수되었습니다.',
    취소: '주문이 취소되었습니다.',
    요리: '주문하신 디너가 맛있게 요리되는 중입니다.',
    포장: '스타일링 작업 중입니다.',
    배달: '배달 직원이 디너를 배달하는 중입니다.',
    도착: '배달이 완료되었습니다. 맛있게 드세요!',
    회수: '배달 직원이 그릇을 회수하러 출발하였습니다.',
    완료: '감사합니다. 다음에 또 이용해주세요!',
  } ?? '';

interface OrderStateValue {
  stateName: string;
  reserveDate: Date;
}

const OrderStateSection = ({ stateName, reserveDate }: OrderStateValue) => {
  return (
    <OrderSection>
      <OrderSectionTitle>
        <OrderSectionTitleImg src={ClockIcon} />
        주문 접수 현황
      </OrderSectionTitle>
      <OrderDDayContainer>{ddayFormat(reserveDate)}</OrderDDayContainer>
      <OrderInfoText>{stateMap[stateName]}</OrderInfoText>
      {stateName === '도착' ? <OrderInfoBtn>그릇 회수 요청</OrderInfoBtn> : null}
    </OrderSection>
  );
};

export default OrderStateSection;
