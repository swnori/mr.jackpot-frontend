import { TableRowContainer, TableRowItem, TableRowItemBtn, TableRowItemBtnImg } from './style';

import OrderState from '@/components/OrderState';

import DeleteIcon from '@/assets/icons/icon-trash-bin.svg';
import PencilIcon from '@/assets/icons/icon-pencil-square.svg';

interface TableRowValue {
  dataList: (string | number)[];
  lastIsState?: boolean;
  onClick?: () => void;
  onUpdate?: () => void;
  onDelete?: () => void;
}

const TableRow = ({
  dataList,
  lastIsState = false,
  onClick,
  onUpdate,
  onDelete,
}: TableRowValue) => {
  return (
    <TableRowContainer onClick={onClick}>
      {lastIsState ? (
        <>
          {dataList.slice(0, -1).map((item, idx) => (
            <TableRowItem key={idx}>{item}</TableRowItem>
          ))}
          <TableRowItem width='9rem'>
            <OrderState stateId={Number(dataList[dataList.length - 1])} />
          </TableRowItem>
        </>
      ) : (
        dataList.map((item, idx) => <TableRowItem key={idx}>{item}</TableRowItem>)
      )}
      {onUpdate ? (
        <TableRowItem width='4rem'>
          <TableRowItemBtn onClick={onUpdate} isUpdate>
            <TableRowItemBtnImg src={PencilIcon} />
          </TableRowItemBtn>
        </TableRowItem>
      ) : null}
      {onDelete ? (
        <TableRowItem>
          <TableRowItemBtn onClick={onDelete} isDelete>
            <TableRowItemBtnImg src={DeleteIcon} />
          </TableRowItemBtn>
        </TableRowItem>
      ) : null}
    </TableRowContainer>
  );
};

export default TableRow;
