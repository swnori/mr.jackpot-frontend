import {
  MemberInfoDesc,
  MemberInfoSectionContainer,
  MemberInfoTitle,
  MemberInfoWrapper,
} from './style';

import { dateFormat, KRWFormat } from '@/utils/format';

import { Member } from '@/types/user';

interface MemberInfoValue {
  data: Member;
}

const MemberInfoSection = ({ data }: MemberInfoValue) => {
  return (
    <MemberInfoSectionContainer>
      <MemberInfoWrapper>
        <MemberInfoTitle>고객 ID</MemberInfoTitle>
        <MemberInfoDesc>{data.id}</MemberInfoDesc>
      </MemberInfoWrapper>
      <MemberInfoWrapper>
        <MemberInfoTitle>이름</MemberInfoTitle>
        <MemberInfoDesc>{data.name}</MemberInfoDesc>
      </MemberInfoWrapper>
      <MemberInfoWrapper>
        <MemberInfoTitle>전화번호</MemberInfoTitle>
        <MemberInfoDesc>{data.contact}</MemberInfoDesc>
      </MemberInfoWrapper>
      <MemberInfoWrapper>
        <MemberInfoTitle>주소</MemberInfoTitle>
        <MemberInfoDesc>{data.address}</MemberInfoDesc>
      </MemberInfoWrapper>
      <MemberInfoWrapper>
        <MemberInfoTitle>가입일자</MemberInfoTitle>
        <MemberInfoDesc>{dateFormat(data.join, false)}</MemberInfoDesc>
      </MemberInfoWrapper>
      <MemberInfoWrapper>
        <MemberInfoTitle>누적 주문 수</MemberInfoTitle>
        <MemberInfoDesc>{data.order.toLocaleString()}</MemberInfoDesc>
      </MemberInfoWrapper>
      <MemberInfoWrapper>
        <MemberInfoTitle>누적 주문 금액</MemberInfoTitle>
        <MemberInfoDesc>{KRWFormat(data.pay)}</MemberInfoDesc>
      </MemberInfoWrapper>
      <MemberInfoWrapper>
        <MemberInfoTitle>평점</MemberInfoTitle>
        <MemberInfoDesc>{data.rating}</MemberInfoDesc>
      </MemberInfoWrapper>
    </MemberInfoSectionContainer>
  );
};

export default MemberInfoSection;
