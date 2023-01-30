import { Badge, Container, Text } from '@mantine/core';
import { Column } from '@table-library/react-table-library/types/compact';
import { TableNode } from '@table-library/react-table-library/types/table';
import GrayBox from 'components/GrayBox';
import { NetworkBadge } from 'components/NetworkBadge';
import Paper from 'components/Paper';
import { ProjectTitle } from 'components/ProjectTitle';
import Table from 'components/Table';
import GradientTitle from 'components/Text/GradientTitle';
import { Trend } from 'components/Trend';
import { DataForUpcomingProjectsTable } from 'data/api/utils/transformDataForCharts';
import { FC } from 'react';
import { Network } from 'types';
import { PreviousValueTypes } from 'types/MarketData';
import { getStartsIn } from 'utils/events';
import { formateDateWithHours } from 'utils/formatters';
import toLocaleString from 'utils/toLocaleString';
import { getLogoLink } from 'utils/utils';

type UpcomingProjectsTableType = {
  projects: DataForUpcomingProjectsTable[];
};

const UpcomingProjectsTable: FC<UpcomingProjectsTableType> = ({ projects }) => {
  if (!projects) {
    return (
      <Container className="py-10" size="xl">
        <GrayBox>There are no upcoming projects 🤔</GrayBox>
      </Container>
    );
  }

  const theme = {
    Table: `--data-table-library_grid-template-columns: 50px 160px 1fr 120px repeat(7, 1fr)`,
    BaseCell: `
    > div {
      white-space: normal;
    }
    &:nth-of-type(2) {
      left: 0px;
      box-shadow: 2px 0px 2px rgba(0,0,0,0.1);
    }`,
  };

  const columns: Column[] = [
    {
      label: '#',
      renderCell: ({ order }) => order,
    },
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
      label: 'Type',
      renderCell: ({ isNft }) => {
        if (isNft) {
          return <Badge leftSection="🐵">NFT</Badge>;
        }

        return <Badge leftSection="💰">Token</Badge>;
      },
    },
    {
      label: 'Launch Date',
      renderCell: ({ launchDate }) => (
        <div>
          {formateDateWithHours(launchDate) || 'N/A'}
          <Text color="green">{launchDate ? getStartsIn({ startDate: launchDate, checkEnd: false }) : null}</Text>
        </div>
      ),
    },
    {
      label: 'Launch Info',
      renderCell: ({ preLaunchInformation }) => (
        <div>
          <Text size="xs" color="green" className="whitespace-pre">
            {preLaunchInformation || 'N/A'}
          </Text>
        </div>
      ),
    },
    {
      label: 'Network',
      renderCell: ({ network }) => <NetworkBadge network={network as Network} showName={false} />,
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
      label: 'Telegram Members',
      renderCell: ({ telegram, telegramChange24, telegramChange24Percentage }) => (
        <div>
          {toLocaleString(telegram as number) || 'N/A'}
          {
            <Trend
              previousValue={{ change: telegramChange24, percentage: telegramChange24Percentage } as PreviousValueTypes}
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
      label: 'Total Votes',
      renderCell: ({ total }) => <div>{toLocaleString(total as number)}</div>,
    },
    {
      label: 'Sentiment',
      renderCell: ({ positivePercentage, negativePercentage }) => (
        <div className="flex items-center gap-2">
          <Text color="green">{toLocaleString(positivePercentage as number)}%</Text>
          <div>/</div>
          <Text color="red">{toLocaleString(negativePercentage as number)}%</Text>
        </div>
      ),
    },
  ];

  return (
    <Container className="py-10" size="xl">
      <Paper>
        <div className="mb-6">
          <div className="flex items-center gap-2">
            🍋
            <GradientTitle order={2}>Upcoming Projects</GradientTitle>
          </div>
          <Text size="xs" color="dimmed">
            Discover upcoming projects that are about to hit the markets!
          </Text>
          <Text size="xs" color="dimmed">
            Projects listed here may not have valid audits and/or KYCs.
          </Text>
          <Text size="xs" color="dimmed">
            Disclaimer: The Coin Logic is not responsible for the success of any of the projects listed in this table.
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

export default UpcomingProjectsTable;
