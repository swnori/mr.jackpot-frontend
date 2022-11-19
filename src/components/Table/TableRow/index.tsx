import { TableRowContainer, TableRowItem } from './style';

import OrderState from '@/components/OrderState';

interface TableRowValue {
  dataList: (string | number)[];
  lastIsState?: boolean;
  onClick?: () => void;
}

const TableRow = ({ dataList, lastIsState = false, onClick }: TableRowValue) => {
  return (
    <TableRowContainer onClick={onClick}>
      {lastIsState ? (
        <>
          {dataList.slice(0, -1).map((item, idx) => (
            <TableRowItem key={idx}>{item}</TableRowItem>
          ))}
          <TableRowItem>
            <OrderState stateId={Number(dataList[dataList.length - 1])} />
          </TableRowItem>
        </>
      ) : (
        dataList.map((item, idx) => <TableRowItem key={idx}>{item}</TableRowItem>)
      )}
    </TableRowContainer>
  );
};

export default TableRow;
