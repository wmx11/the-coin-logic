import { Container, Text } from '@mantine/core';
import { Column } from '@table-library/react-table-library/types/compact';
import { TableNode } from '@table-library/react-table-library/types/table';
import GrayBox from 'components/GrayBox';
import { NetworkBadge } from 'components/NetworkBadge';
import Paper from 'components/Paper';
import { ProjectTitle } from 'components/ProjectTitle';
import Table from 'components/Table';
import GradientTitle from 'components/Text/GradientTitle';
import { Trend } from 'components/Trend';
import { DataForNFTProjects } from 'data/api/utils/transformDataForCharts';
import { FC } from 'react';
import { Network } from 'types';
import { PreviousValueTypes } from 'types/MarketData';
import toLocaleString from 'utils/toLocaleString';
import { getLogoLink } from 'utils/utils';

type NFTProjectsTableProps = {
  projects: DataForNFTProjects[];
};

const NFTProjectsTable: FC<NFTProjectsTableProps> = ({ projects }) => {
  if (!projects) {
    return (
      <Container className="py-10" size="xl">
        <GrayBox>There are no NFT projects 🤔</GrayBox>
      </Container>
    );
  }

  const theme = {
    Table: `--data-table-library_grid-template-columns: 210px repeat(7, 1fr)`,
    BaseCell: `
    > div {
      white-space: normal;
    }
    &:nth-of-type(1) {
      left: 0px;
      box-shadow: 2px 0px 2px rgba(0,0,0,0.1);
    }`,
  };

  const columns: Column[] = [
    {
      label: 'Name',
      pinLeft: true,
      renderCell: ({ name, slug, logo_id, logo_extension, isPromoted }) => (
        <>
          <ProjectTitle
            component="a"
            href={`/project/${slug || ''}`}
            title={name as string}
            size="sm"
            avatar={getLogoLink(logo_id, logo_extension)}
            notifications={[]}
            isPromoted={isPromoted}
          />
        </>
      ),
    },
    {
      label: 'Volume',
      renderCell: ({ salesVolume, salesVolumeChange24, salesVolumeChange24Percentage }) => (
        <div>
          {toLocaleString(salesVolume as number) || 'N/A'}
          {
            <Trend
              previousValue={
                { change: salesVolumeChange24, percentage: salesVolumeChange24Percentage } as PreviousValueTypes
              }
              inline={true}
            />
          }
        </div>
      ),
    },
    {
      label: 'Floor Price',
      renderCell: ({ floorPrice, floorPriceChange24, floorPriceChange24Percentage }) => (
        <div>
          {toLocaleString(floorPrice as number) || 'N/A'}
          {
            <Trend
              previousValue={
                { change: floorPriceChange24, percentage: floorPriceChange24Percentage } as PreviousValueTypes
              }
              inline={true}
            />
          }
        </div>
      ),
    },
    {
      label: 'Max Supply',
      renderCell: ({ maxSupply }) => <div>{toLocaleString(maxSupply) || 'N/A'}</div>,
    },
    {
      label: 'Total Holdings',
      renderCell: ({ totalHoldings, totalHoldingsChange24, totalHoldingsChange24Percentage }) => (
        <div>
          {toLocaleString(totalHoldings as number) || 'N/A'}
          {
            <Trend
              previousValue={
                { change: totalHoldingsChange24, percentage: totalHoldingsChange24Percentage } as PreviousValueTypes
              }
              inline={true}
            />
          }
        </div>
      ),
    },
    {
      label: 'Twitter Members',
      renderCell: ({ twitter, twitterChange24, twitterChange24Percentage }) => (
        <div>
          {toLocaleString(twitter as number) || 'N/A'}
          {
            <Trend
              previousValue={{ change: twitterChange24, percentage: twitterChange24Percentage } as PreviousValueTypes}
              inline={true}
            />
          }
        </div>
      ),
    },
    {
      label: 'Discord Members',
      renderCell: ({ discord, discordChange24, discordChange24Percentage }) => (
        <div>
          {toLocaleString(discord as number) || 'N/A'}
          {
            <Trend
              previousValue={{ change: discordChange24, percentage: discordChange24Percentage } as PreviousValueTypes}
              inline={true}
            />
          }
        </div>
      ),
    },
    {
      label: 'Network',
      renderCell: ({ network }) => <NetworkBadge network={network as Network} showName={false} />,
    },
  ];

  return (
    <Container className="py-10" size="xl">
      <Paper>
        <div className="mb-6">
          <div className="flex items-center gap-2">
            🐵 
            <GradientTitle order={2}>NFT Projects</GradientTitle>
          </div>
          <Text size="xs" color="dimmed">
            Discover different types of NFT projects and their collections!
          </Text>
          <Text size="xs" color="dimmed">
            Do conduct your own due diligence and consult your financial advisor before making any investment decisions.
          </Text>
        </div>
        <div>
          <div>
            <Table data={(projects || []) as unknown as TableNode[]} columns={columns} customTheme={theme} />
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default NFTProjectsTable;
