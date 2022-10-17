import { Column } from '@table-library/react-table-library/types/compact';
import Table from 'components/Table';
import Link from 'next/link';
import { FC } from 'react';
import routes from 'routes';
import { MarketingCampaign } from 'types';
import { formatDate } from 'utils/formatters';
import toCurrency from 'utils/toCurrency';
import CampaignStatus from '../CampaignStatus';
import MarketerType from '../MarketerType';

type MarketingCampaignsTableProps = {
  marketingCampaigns: MarketingCampaign[];
};

const MarketingCampaignsTable: FC<MarketingCampaignsTableProps> = ({ marketingCampaigns }) => {
  const theme = {
    Table: `--data-table-library_grid-template-columns: repeat(9, 1fr);`,
    BaseCell: `
    &:nth-of-type(2) {
      left: 0px;
      box-shadow: 2px 0px 2px rgba(0,0,0,0.1);
    }`,
  };

  const data = marketingCampaigns;

  const columns: Column[] = [
    {
      label: 'Title',
      renderCell: ({ name, campaignId }) => {
        return (
          <Link href={`/profile/marketing-tracker/campaign/${campaignId}`}>
            <a className="hover:text-violet transition-colors font-semibold">{name}</a>
          </Link>
        );
      },
    },
    {
      label: 'Project',
      renderCell: ({ project }) => {
        return (
          <Link href={`${routes.project}/${project.slug}`}>
            <a className="hover:text-violet transition-colors font-semibold">{project.name}</a>
          </Link>
        );
      },
    },
    {
      label: 'Status',
      renderCell: ({ startDate, endDate }) => {
        return <CampaignStatus startDate={startDate} endDate={endDate} />;
      },
    },
    {
      label: 'Budget',
      renderCell: ({ budget }) => {
        return toCurrency(budget);
      },
    },
    {
      label: 'Marketer',
      renderCell: (campaign) => <MarketerType campaign={campaign}/>,
    },
    {
      label: 'Start Date',
      renderCell: ({ startDate }) => startDate,
    },
    {
      label: 'End Date',
      renderCell: ({ endDate }) => endDate,
    },
    {
      label: 'Added',
      renderCell: ({ dateAdded }) => formatDate(dateAdded),
    },
    {
      label: 'Last Updated',
      renderCell: ({ updatedAt }) => formatDate(updatedAt),
    },
  ];

  return <Table data={data} columns={columns} customTheme={theme} />;
};

export default MarketingCampaignsTable;
