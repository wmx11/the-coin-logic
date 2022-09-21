import { Button, Container, Paper, Text, Title } from '@mantine/core';
import { Column } from '@table-library/react-table-library/types/compact';
import { TableNode } from '@table-library/react-table-library/types/table';
import { Badges } from 'components/Badges';
import { NetworkBadge } from 'components/NetworkBadge';
import { ProjectTitle } from 'components/ProjectTitle';
import Table from 'components/Table';
import { Trend } from 'components/Trend';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { Network, Tag } from 'types';
import { PreviousValueTypes } from 'types/MarketData';
import toCurrency from 'utils/toCurrency';
import toLocaleString from 'utils/toLocaleString';

type ProjectsTableProps = {
  data: TableNode[];
  projectsCount: number;
};

const ProjectsTable: FC<ProjectsTableProps> = ({ data, projectsCount }) => {
  const theme = {
    Table: `--data-table-library_grid-template-columns: 40px 180px repeat(7, 1fr);`,
    BaseCell: `
    &:nth-of-type(2) {
      left: 0px;
      box-shadow: 2px 0px 2px rgba(0,0,0,0.1);
    }`,
  };

  const columns: Column[] = [
    {
      label: '#',
      renderCell: ({ order }) => (
        <Text size="xs" color="dimmed">
          {order}
        </Text>
      ),
    },
    {
      label: 'Name',
      pinLeft: true,
      renderCell: ({ project }) => (
        <>
          <ProjectTitle
            component="a"
            href={`/project/${project.slug}`}
            title={project.name as string}
            size="sm"
            avatar={project.logo ? project.logo.url : ''}
            notifications={project.notifications}
          />
        </>
      ),
    },
    {
      label: 'Price',
      renderCell: ({ price, priceChange }) => (
        <>
          {toCurrency(price as number)}
          {<Trend previousValue={priceChange as PreviousValueTypes} inline={true} />}
        </>
      ),
    },
    {
      label: 'Market Cap',
      renderCell: ({ marketCap, marketCapChange }) => (
        <>
          {toCurrency(marketCap as number)}
          {<Trend previousValue={marketCapChange as PreviousValueTypes} inline={true} />}
        </>
      ),
    },
    {
      label: 'Holders',
      renderCell: ({ holders, holdersChange }) => (
        <>
          {toLocaleString(holders as number) || <AiOutlineEllipsis />}
          {<Trend previousValue={holdersChange as PreviousValueTypes} inline={true} />}
        </>
      ),
    },
    {
      label: 'Avg. Holdings',
      renderCell: ({ avgHoldings, avgHoldingsChange }) => (
        <>
          {toLocaleString(avgHoldings as number) || <AiOutlineEllipsis />}
          {<Trend previousValue={avgHoldingsChange as PreviousValueTypes} inline={true} />}
        </>
      ),
    },
    {
      label: 'Avg. Holdings (USD)',
      renderCell: ({ avgHoldings, price }) => <>{toCurrency(avgHoldings * price) || <AiOutlineEllipsis />}</>,
    },
    { label: 'Tags', renderCell: ({ project }) => <Badges badges={project.tags as Tag[]} /> },
    {
      label: 'Network',
      renderCell: ({ project }) => <NetworkBadge network={project.network as Network} showName={false} />,
    },
  ];
  return (
    <div className="my-10">
      <Container>
        <Title order={2} className="mb-6">
          Projects by Market Cap
        </Title>
        <Paper p="md" shadow="sm">
          <div>
            <Table data={data} columns={columns} customTheme={theme} />
          </div>

          {projectsCount > 0 && (
            <div className="my-8 flex justify-between items-center">
              <Text size="xs" color="dimmed">
                Showing {projectsCount} out of {projectsCount} projects
              </Text>
            </div>
          )}

          <div className="my-8 text-center">
            <Text weight={700} className="mb-4">
              Can't find your favorite project?
            </Text>
            <Link href="/referrals" passHref>
              <Button color="violet" component="a">
                Refer a project and earn rewards!
              </Button>
            </Link>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default ProjectsTable;
