import { TableHeaderContainer, TableHeaderItem, TableHeaderWrapper } from './style';

interface TableHeaderValue {
  headerList: string[];
}

const TableHeader = ({ headerList }: TableHeaderValue) => {
  return (
    <TableHeaderContainer>
      <TableHeaderWrapper>
        {headerList.map((title, idx) => (
          <TableHeaderItem key={idx}>{title}</TableHeaderItem>
        ))}
      </TableHeaderWrapper>
    </TableHeaderContainer>
  );
};

export default TableHeader;
