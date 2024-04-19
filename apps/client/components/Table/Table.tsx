import React, { FC } from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/mantine';
import mainTheme from './mainTheme';
import { Column } from '@table-library/react-table-library/types/compact';
import { TableNode } from '@table-library/react-table-library/types/table';
import { Theme } from '@table-library/react-table-library/types/theme';
import { Sort } from '@table-library/react-table-library/types/sort';
import useThemeStore from 'store/useThemeStore';

type TableProps = {
  data: TableNode[];
  columns: Column<any>[];
  customTheme?: Theme;
  sort?: Sort<any>;
};

const Table = ({ data, columns, customTheme = {}, sort }: TableProps) => {
  const globalTheme = useThemeStore((state) => state.theme);
  const mantineTheme = getTheme({ highlightOnHover: true, verticalSpacing: 14 });
  const theme = useTheme([mantineTheme, mainTheme(globalTheme), customTheme]);

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
