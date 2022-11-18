import { TableRowContainer, TableRowItem } from './style';

import OrderState from '@/components/OrderState';

interface TableRowValue {
  dataList: (string | number)[];
  lastIsState?: boolean;
}

const TableRow = ({ dataList, lastIsState = false }: TableRowValue) => {
  return (
    <TableRowContainer>
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
