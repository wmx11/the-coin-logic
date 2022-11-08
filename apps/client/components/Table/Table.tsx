import React, { FC } from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/mantine';
import mainTheme from './mainTheme';
import { Column } from '@table-library/react-table-library/types/compact';
import { TableNode } from '@table-library/react-table-library/types/table';
import { Theme } from '@table-library/react-table-library/types/theme';
import { Sort } from '@table-library/react-table-library/types/sort';

type TableProps = {
  data: TableNode[];
  columns: Column[];
  customTheme?: Theme;
  sort?: Sort;
};

const Table: FC<TableProps> = ({ data, columns, customTheme = {}, sort }) => {
  const mantineTheme = getTheme({ highlightOnHover: true, verticalSpacing: 12 });
  const theme = useTheme([mantineTheme, mainTheme, customTheme]);

  return (
    <CompactTable
      data={{ nodes: data }}
      columns={columns}
      theme={theme}
      sort={sort}
      layout={{ custom: true, horizontalScroll: true, fixedHeader: true }}
    />
  );
};

export default Table;
