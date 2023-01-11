import { Container, Text } from '@mantine/core';
import { useSort } from '@table-library/react-table-library/sort';
import { Column } from '@table-library/react-table-library/types/compact';
import { Data, TableNode } from '@table-library/react-table-library/types/table';
import { Badges } from 'components/Badges';
import GradientButton from 'components/Buttons/GradientButton';
import { NetworkBadge } from 'components/NetworkBadge';
import PaymentPlanBadge from 'components/PaymentPlans/PaymentPlanBadge';
import { ProjectTitle } from 'components/ProjectTitle';
import Table from 'components/Table';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { Trend } from 'components/Trend';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Network, Tag } from 'types';
import { PreviousValueTypes } from 'types/MarketData';
import toCurrency from 'utils/toCurrency';
import toLocaleString from 'utils/toLocaleString';

type ProjectsTableProps = {
  data: TableNode[] | Data;
  projectsCount: number;
};

const ProjectsTable: FC<ProjectsTableProps> = ({ data, projectsCount }) => {
  const theme = {
    Table: `--data-table-library_grid-template-columns: 40px 160px repeat(8, 1fr);`,
    BaseCell: `
    > div {
      white-space: normal;
    }
    &:nth-of-type(2) {
      left: 0px;
      box-shadow: 2px 0px 2px rgba(0,0,0,0.1);
    }`,
  };

  const sorter = useSort(
    data as Data,
    {
      onChange: () => {},
    },
    {
      sortIcon: {
        iconDefault: null,
        iconUp: <FaChevronUp />,
        iconDown: <FaChevronDown />,
      },
      sortFns: {
        PRICE: (array) => array.sort((a, b) => a.price - b.price),
        MARKET_CAP: (array) => array.sort((a, b) => a.marketCap - b.marketCap),
        HOLDERS: (array) => array.sort((a, b) => a.holders - b.holders),
        AVG_HOLDINGS: (array) => array.sort((a, b) => a.avgHoldings - b.avgHoldings),
      },
    },
  );

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
            href={`/project/${project?.slug || ''}`}
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
          {<Text>{toCurrency(price as number)}</Text>}
          {<Trend previousValue={priceChange as PreviousValueTypes} inline={true} />}
        </>
      ),
      sort: {
        sortKey: 'PRICE',
      },
    },
    {
      label: 'Market Cap',
      renderCell: ({ marketCap, marketCapChange }) => (
        <>
          {toCurrency(marketCap as number)}
          {<Trend previousValue={marketCapChange as PreviousValueTypes} inline={true} />}
        </>
      ),
      sort: {
        sortKey: 'MARKET_CAP',
      },
    },
    {
      label: 'Holders',
      renderCell: ({ holders, holdersChange }) => (
        <>
          {toLocaleString(holders as number) || <AiOutlineEllipsis />}
          {<Trend previousValue={holdersChange as PreviousValueTypes} inline={true} />}
        </>
      ),
      sort: {
        sortKey: 'HOLDERS',
      },
    },
    {
      label: 'Avg. Holdings',
      renderCell: ({ avgHoldings, avgHoldingsChange }) => (
        <>
          {toLocaleString(avgHoldings as number) || <AiOutlineEllipsis />}
          {<Trend previousValue={avgHoldingsChange as PreviousValueTypes} inline={true} />}
        </>
      ),
      sort: {
        sortKey: 'AVG_HOLDINGS',
      },
    },
    {
      label: 'Avg. Holdings (USD)',
      renderCell: ({ avgHoldings, price }) => <>{toCurrency(avgHoldings * price) || <AiOutlineEllipsis />}</>,
    },
    { label: 'Tags', renderCell: ({ project }) => <Badges badges={project.tags as Tag[]} /> },
    {
      label: 'TCL Plan',
      renderCell: ({ project }) => <PaymentPlanBadge paymentPlan={project?.paymentPlan} badgeProps={{ size: 'xs' }} />,
    },
    {
      label: 'Network',
      renderCell: ({ project }) => <NetworkBadge network={project.network as Network} showName={false} />,
    },
  ];
  return (
    <div className="my-10">
      <Container>
        <div className="mb-6">
          <GradientTitle order={2}>Projects by Market Cap</GradientTitle>
          <Text size="xs" color="dimmed">
            Displaying projects listed on The Coin Logic. Please make sure you do your own research before investing in
            any of the projects.
          </Text>
        </div>
        <div>
          <div>
            <Table data={data as TableNode[]} columns={columns} sort={sorter} customTheme={theme} />
          </div>

          {projectsCount > 0 && (
            <div className="my-8 flex justify-between items-center">
              <Text size="xs" color="dimmed">
                Showing {projectsCount} out of {projectsCount} projects
              </Text>
            </div>
          )}

          <div className="my-8 text-center">
            <GradientText weight={700} className="mb-4">
              Can't find your favorite project?
            </GradientText>
            <Link href="/referrals" passHref>
              <GradientButton component="a">Refer a project and earn rewards!</GradientButton>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsTable;
