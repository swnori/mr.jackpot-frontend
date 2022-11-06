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

  background: rgba(255, 255, 255, 0.2);
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
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
  top: -7.5rem;
  width: 15rem;
  height: 15rem;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */
`;

export const DinnerImg = styled.img``;

const DishContainer = styled.div`
  width: calc(100% - 4rem);
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DishTitle = styled.span`
  font-size: ${FontSize.XXL};
  font-weight: ${FontWeight.MEDIUM};
`;

export const MainDishContainer = styled(DishContainer)``;

export const SideContainer = styled(DishContainer)``;

export const DrinkContainer = styled(DishContainer)``;

export const StyleContainer = styled(DishContainer)``;

export const AddMenuBtnContainer = styled.button`
  background: ${ColorCode.PRIMARY};
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;

  color: ${ColorCode.WHITE};
  font-size: ${FontSize.M};
  font-weight: ${FontWeight.REGULAR};

  align-self: flex-end;

  display: flex;
  max-width: fit-content;
  padding: 0.7rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const AddMenuImg = styled.img`
  width: 1.5rem;
`;
