import styled from 'styled-components';

import { FontSize, FontWeight } from '@/constants/font';
import { ColorCode } from '@/constants/color';

interface ItemContainerValue {
  isShowOption?: boolean;
}
interface ItemWrapperValue {
  highlight?: boolean;
}

export const ItemWrapper = styled.div<ItemWrapperValue>`
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  border: ${(props) =>
    props.highlight ? `1px solid ${ColorCode.PRIMARY}` : `1px solid ${ColorCode.WHITE}`};

  backdrop-filter: blur(7.5px);
`;

export const ItemContainer = styled.div<ItemContainerValue>`
  position: relative;
  width: calc(100% - 2rem);
  height: 8rem;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  /* Note: backdrop-filter has minimal browser support */
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 15px;

  ${(props) =>
    props.isShowOption
      ? `
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(7.5px);
          border: 1px solid ${ColorCode.WHITE};
        `
      : ''}

  z-index: 2;
`;

export const ItemImgWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  padding: 0;

  flex-shrink: 0;

  background: rgba(255, 255, 255, 0.15);
  border: 1px solid ${ColorCode.WHITE};
  backdrop-filter: blur(7.5px);
  /* Note: backdrop-filter has minimal browser support */
`;
export const ItemImg = styled.img`
  width: 100%;
`;

export const ItemInfoContainer = styled.div`
  height: calc(100% - 2rem);

  overflow: hidden;
  white-space: nowrap;

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  justify-content: space-between;
`;

export const ItemTitle = styled.span`
  display: block;

  overflow: hidden;
  text-overflow: ellipsis;

  font-size: ${FontSize.XL};
  font-weight: ${FontWeight.MEDIUM};
  color: ${ColorCode.BLACK};
  padding: 1px 0;
`;

export const ItemSubTitle = styled.span`
  flex: 1;
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.DARKGREY};
  padding: 1px 0;
`;

export const ItemDesc = styled.span`
  font-size: ${FontSize.L};
  font-weight: ${FontWeight.REGULAR};
  color: ${ColorCode.BLACK};
  padding: 1px 0;
`;

export const ItemDeleteBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  width: 1.5rem;
  background: none;
  outline: 0;
  border: none;
  padding: 0;

  z-index: 5;
`;
export const ItemDeleteImg = styled.img`
  width: 100%;
`;

export const ItemRadioBox = styled.div`
  width: 4rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemRadioImg = styled.img`
  width: 2.5rem;
`;
