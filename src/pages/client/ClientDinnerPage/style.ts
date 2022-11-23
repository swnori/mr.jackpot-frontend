import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const DinnerContainer = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;

  margin-bottom: 10rem;
`;

export const Title = styled.span`
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.BLACK};
`;

export const SubTitle = styled.span`
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.DARKGREY};
`;

export const DinnerDetailContainer = styled.div`
  position: absolute;
  left: 0;

  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 20rem;

  background: rgba(255, 255, 255, 0.2);
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 100px 100px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const DinnerDetailDesc = styled.span`
  text-align: center;
  color: ${ColorCode.GREY};
  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.MEDIUM};
  line-height: ${FontSize.XL};

  margin-top: 10rem;
`;

export const DinnerImgWrapper = styled.div`
  position: absolute;
  top: -8.5rem;
  width: 17rem;
  height: 17rem;
  /* Note: backdrop-filter has minimal browser support */
`;

export const DinnerImg = styled.img`
  width: 100%;
`;
