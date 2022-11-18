import React from 'react';

import TableHeader from './TableHeader';
import { TableBody, TableContainer } from './style';

interface TableValue {
  headerList: string[];
  children: React.ReactNode;
}

const Table = ({ headerList, children }: TableValue) => {
  return (
    <TableContainer>
      <TableHeader headerList={headerList} />
      <TableBody>{children}</TableBody>
    </TableContainer>
  );
};

export default Table;
