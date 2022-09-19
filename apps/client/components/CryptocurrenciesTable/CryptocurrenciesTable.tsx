import { Container, Text, Title } from '@mantine/core';
import { Column } from '@table-library/react-table-library/types/compact';
import { TableNode } from '@table-library/react-table-library/types/table';
import { ProjectTitle } from 'components/ProjectTitle';
import Table from 'components/Table';
import { Trend } from 'components/Trend';
import { FC } from 'react';
import { Sparklines, SparklinesCurve, SparklinesSpots } from 'react-sparklines';
import { PreviousValueTypes } from 'types/MarketData';
import toCurrency from 'utils/toCurrency';

type CryptocurrenciesTableProps = {
  data: TableNode[];
};

const CryptocurrenciesTable: FC<CryptocurrenciesTableProps> = ({ data }) => {
  const theme = {
    Table: `--data-table-library_grid-template-columns: 40px 195px repeat(6, 1fr);`,
    BaseCell: `
    &:nth-of-type(2) {
      left: 0px;
      box-shadow: 2px 0px 2px rgba(0,0,0,0.1);
    }`,
  };

  const columns: Column[] = [
    {
      label: '#',
      renderCell: (item) => (
        <Text size="xs" color="dimmed">
          {item.market_cap_rank}
        </Text>
      ),
    },
    {
      label: 'Name',
      pinLeft: true,
      renderCell: (item) => (
        <ProjectTitle title={item.name as string} size="sm" avatar={item.image} notifications={[]} />
      ),
    },
    {
      label: 'Price',
      renderCell: (item) => (
        <>
          {toCurrency(item.current_price as number)}
          {
            <Trend
              previousValue={
                { change: item.price_change_24h, percentage: item.price_change_percentage_24h } as PreviousValueTypes
              }
              inline={true}
            />
          }
        </>
      ),
    },
    {
      label: '24h High',
      renderCell: (item) => <>{toCurrency(item.high_24h as number)}</>,
    },
    {
      label: '24h Low',
      renderCell: (item) => <>{toCurrency(item.low_24h as number)}</>,
    },
    {
      label: 'Market Cap',
      renderCell: (item) => (
        <>
          {toCurrency(item.market_cap as number)}
          {
            <Trend
              previousValue={
                {
                  change: item.market_cap_change_24h,
                  percentage: item.market_cap_change_percentage_24h,
                } as PreviousValueTypes
              }
              inline={true}
            />
          }
        </>
      ),
    },
    { label: 'Volume', renderCell: (item) => toCurrency(item.total_volume) },
    {
      label: 'Last 7 Days',
      renderCell: (item) => (
        <Sparklines data={item.sparkline_in_7d.price} width={100} style={{ minWidth: 100 }} height={20} margin={5}>
          <SparklinesCurve color="#7950f2" />
          <SparklinesSpots style={{ fill: '#7950f2' }} />
        </Sparklines>
      ),
    },
  ];

  return (
    <Container className="py-10">
      <Title order={2} className="mb-6">
        Top 25 Cryptocurrencies by Market Cap
      </Title>
      <div style={{ height: 700 }}>
        <Table data={data} columns={columns} customTheme={theme} />
      </div>
    </Container>
  );
};

export default CryptocurrenciesTable;
