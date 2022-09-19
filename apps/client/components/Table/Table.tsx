import React, { FC } from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/mantine';
import mainTheme from './mainTheme';
import { Column } from '@table-library/react-table-library/types/compact';
import { TableNode } from '@table-library/react-table-library/types/table';
import { Theme } from '@table-library/react-table-library/types/theme';

type TableProps = {
  data: TableNode[];
  columns: Column[];
  customTheme?: Theme;
};

const Table: FC<TableProps> = ({ data, columns, customTheme = {} }) => {
  const mantineTheme = getTheme({ highlightOnHover: true, verticalSpacing: 12 });
  const theme = useTheme([mantineTheme, mainTheme, customTheme]);

  return (
    <CompactTable
      data={{ nodes: data }}
      columns={columns}
      theme={theme}
      layout={{ custom: true, horizontalScroll: true, fixedHeader: true }}
    />
  );
};

export default Table;
