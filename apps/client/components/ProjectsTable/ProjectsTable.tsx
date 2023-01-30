import { Container, RingProgress, Text, Tooltip } from '@mantine/core';
import { useSort } from '@table-library/react-table-library/sort';
import { Column } from '@table-library/react-table-library/types/compact';
import { Data, TableNode } from '@table-library/react-table-library/types/table';
import GradientButton from 'components/Buttons/GradientButton';
import { NetworkBadge } from 'components/NetworkBadge';
import Paper from 'components/Paper';
import { ProjectTitle } from 'components/ProjectTitle';
import Table from 'components/Table';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { Trend } from 'components/Trend';
import { DataForProjectsTable } from 'data/api/utils/transformDataForCharts';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Sparklines, SparklinesCurve, SparklinesSpots } from 'react-sparklines';
import { Network } from 'types';
import { PreviousValueTypes } from 'types/MarketData';
import { Icons } from 'utils/icons';
import toCurrency from 'utils/toCurrency';
import toLocaleString from 'utils/toLocaleString';
import { getLogoLink, getImageLink } from 'utils/utils';

type ProjectsTableProps = {
  data: TableNode[] | Data | DataForProjectsTable;
};

const ProjectsTable: FC<ProjectsTableProps> = ({ data }) => {
  const tableData = data as DataForProjectsTable;
  const projectData = tableData?.data;
  const projectCount = tableData?.count;

  const theme = {
    Table: `--data-table-library_grid-template-columns: 210px repeat(9, 1fr);`,
    BaseCell: `
    > div {
      white-space: normal;
    }
    &:nth-of-type(1) {
      left: 0px;
      box-shadow: 2px 0px 2px rgba(0,0,0,0.1);
    }`,
  };

  const sorter = useSort(
    projectData as unknown as Data,
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
      label: 'Price',
      renderCell: ({ price, priceChange24, priceChange24Percentage }) => (
        <div>
          {<Text>{toCurrency(price as number)}</Text>}
          {
            <Trend
              previousValue={{ change: priceChange24, percentage: priceChange24Percentage } as PreviousValueTypes}
              inline={true}
            />
          }
        </div>
      ),
      sort: {
        sortKey: 'PRICE',
      },
    },
    {
      label: 'Market Cap',
      renderCell: ({ marketCap, marketCapChange24, marketCapChange24Percentage }) => (
        <div>
          {toCurrency(marketCap as number)}
          {
            <Trend
              previousValue={
                { change: marketCapChange24, percentage: marketCapChange24Percentage } as PreviousValueTypes
              }
              inline={true}
            />
          }
        </div>
      ),
      sort: {
        sortKey: 'MARKET_CAP',
      },
    },
    {
      label: 'Holders',
      renderCell: ({ holders, holdersChange24, holdersChange24Percentage }) => (
        <div>
          {toLocaleString(holders as number) || <AiOutlineEllipsis />}
          {
            <Trend
              previousValue={{ change: holdersChange24, percentage: holdersChange24Percentage } as PreviousValueTypes}
              inline={true}
            />
          }
        </div>
      ),
      sort: {
        sortKey: 'HOLDERS',
      },
    },
    {
      label: 'Avg. Token Holdings',
      renderCell: ({ avgHoldings, avgHoldingsChange24, avgHoldingsChange24Percentage }) => (
        <div>
          {toLocaleString(avgHoldings as number) || <AiOutlineEllipsis />}
          {
            <Trend
              previousValue={
                { change: avgHoldingsChange24, percentage: avgHoldingsChange24Percentage } as PreviousValueTypes
              }
              inline={true}
            />
          }
        </div>
      ),
      sort: {
        sortKey: 'AVG_HOLDINGS',
      },
    },
    {
      label: 'Last 7 Days',
      renderCell: ({ sparkline }) => (
        <Sparklines data={sparkline} width={100} style={{ minWidth: 100 }} height={35} margin={2}>
          <SparklinesCurve color="#7950f2" />
          <SparklinesSpots style={{ fill: '#7950f2' }} />
        </Sparklines>
      ),
    },
    {
      label: 'Transparency Score',
      renderCell: ({ transparencyScore }) => (
        <div>
          <Tooltip label="Raw transparency score without including community votes.">
            <RingProgress
              size={48}
              thickness={4}
              roundCaps
              label={
                <div className="flex items-center justify-center">
                  <GradientText weight={700}>{transparencyScore || 0}</GradientText>
                </div>
              }
              sections={[{ value: transparencyScore || 0, color: 'violet' }]}
            />
          </Tooltip>
        </div>
      ),
    },

    {
      label: 'Audit',
      renderCell: ({ auditBy }) => {
        if (!auditBy || auditBy?.length < 1) {
          return (
            <Tooltip label="The project has not provided any Audit information.">
              <div>
                <Icons.Cross />
              </div>
            </Tooltip>
          );
        }

        return auditBy?.map(
          (item: { url: string; auditor: { image_id: string; image_extension: string } }, index: number) => (
            <Link href={(item?.url as string) || '#'}>
              <a target="_blank">
                <ProjectTitle
                  size="sm"
                  avatar={getImageLink(item?.auditor?.image_id, item?.auditor?.image_extension)}
                  key={`project_audit_${index}`}
                />
              </a>
            </Link>
          ),
        );
      },
    },
    {
      label: 'KYC',
      renderCell: ({ kycBy }) => {
        if (!kycBy || kycBy?.length < 1) {
          return (
            <Tooltip label="The project has not provided any Audit information.">
              <div>
                <Icons.Cross />
              </div>
            </Tooltip>
          );
        }

        return kycBy?.map(
          (item: { url: string; kycGroup: { image_id: string; image_extension: string } }, index: number) => (
            <Link href={(item?.url as string) || '#'}>
              <a target="_blank">
                <ProjectTitle
                  size="sm"
                  avatar={getImageLink(item?.kycGroup?.image_id, item?.kycGroup?.image_extension)}
                  key={`project_kyc_${index}`}
                />
              </a>
            </Link>
          ),
        );
      },
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
          <GradientTitle order={2}>Token Projects by Market Cap</GradientTitle>
          <Text size="xs" color="dimmed">
            Displaying token projects sorted by market cap listed on The Coin Logic.
          </Text>
          <Text size="xs" color="dimmed">
            Do conduct your own due diligence and consult your financial advisor before making any investment decisions.
          </Text>
        </div>
        <div>
          <div>
            <Table data={projectData as TableNode[]} columns={columns} sort={sorter} customTheme={theme} />
          </div>

          {projectCount && projectCount > 0 && (
            <div className="my-8 flex justify-between items-center">
              <Text size="xs" color="dimmed">
                Showing {projectCount} out of {projectCount} projects
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
      </Paper>
    </Container>
  );
};

export default ProjectsTable;
