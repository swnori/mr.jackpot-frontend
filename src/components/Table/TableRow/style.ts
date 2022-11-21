import styled from 'styled-components';

import { FontSize } from '@/constants/font';
import { ColorCode } from '@/constants/color';

export const TableRowContainer = styled.tr`
  height: 6rem;
  border-bottom: 1px solid ${ColorCode.GREY};
`;

interface ItemValue {
  width?: string;
}

export const TableRowItem = styled.td<ItemValue>`
  font-size: ${FontSize.L};
  text-align: center;
  vertical-align: middle;

  ${(props) => (props.width ? `width: ${props.width};` : '')}
`;

interface BtnValue {
  isDelete?: boolean;
  isUpdate?: boolean;
}

export const TableRowItemBtn = styled.button<BtnValue>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;

  padding: 0;
  margin: auto;
  background: none;
  ${(props) => (props.isDelete ? `background: ${ColorCode.ERROR};` : '')}
  ${(props) => (props.isUpdate ? `background: ${ColorCode.CONFIRM};` : '')}

  border:none;
  border-radius: 1.25rem;
`;

export const TableRowItemBtnImg = styled.img`
  width: 1.5rem;
`;
