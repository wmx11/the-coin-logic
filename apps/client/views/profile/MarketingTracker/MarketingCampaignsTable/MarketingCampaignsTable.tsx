import { DocumentNode, useMutation } from '@apollo/client';
import { Button, Text } from '@mantine/core';
import { Column } from '@table-library/react-table-library/types/compact';
import ButtonWithConfirmation from 'components/ButtonWithConfirmation';
import GrayBox from 'components/GrayBox';
import Table from 'components/Table';
import { responsiveStylesForLayoutWithSideMenu } from 'components/Table/mainTheme';
import { DELETE_CAMPAIGN } from 'data/mutations/campaign';
import Link from 'next/link';
import { FC, useState } from 'react';
import routes from 'routes';
import { MarketingCampaign } from 'types';
import { Icons } from 'utils/icons';
import toCurrency from 'utils/toCurrency';
import { getStatusByDate } from 'utils/utils';
import CampaignStatus from '../CampaignStatus';
import MarketerType from '../MarketerType';

type MarketingCampaignsTableProps = {
  marketingCampaigns: MarketingCampaign[];
};

const MarketingCampaignsTable: FC<MarketingCampaignsTableProps> = ({ marketingCampaigns }) => {
  const [data, setData] = useState(marketingCampaigns);
  const [deleteCampaign] = useMutation(DELETE_CAMPAIGN as DocumentNode);

  const handleDelete = async (id: string, campaignId: string) => {
    const itemIndex = data.findIndex((item) => item.campaignId === campaignId);

    if (itemIndex < 0) {
      return null;
    }

    await deleteCampaign({ variables: { id } });

    setData((prevState) => {
      const newState = [...prevState];
      newState.splice(itemIndex, 1);
      return newState;
    });
  };

  const theme = {
    Table: `--data-table-library_grid-template-columns: 100px repeat(7, 1fr); ${responsiveStylesForLayoutWithSideMenu}`,
    BaseCell: `
    &:nth-of-type(1) {
      left: 0px;
      box-shadow: 2px 0px 2px rgba(0,0,0,0.1);
    }`,
  };

  const columns: Column[] = [
    {
      label: 'Title',
      pinLeft: true,
      renderCell: ({ name, campaignId }) => {
        return (
          <Link href={routes.marketingTrackerCampaign.replace('${campaignId}', campaignId)}>
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
      renderCell: ({ startDate, endDate, status }) => {
        return <CampaignStatus startDate={startDate} endDate={endDate} status={status} />;
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
      renderCell: (campaign) => <MarketerType campaign={campaign} />,
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
      label: 'Actions',
      renderCell: ({ id, campaignId, startDate, endDate, status }) => {
        const campaignStatus = getStatusByDate({ startDate, endDate, status });
        return (
          <div className="flex gap-2 items-center justify-end">
            {campaignStatus !== 'ended' && (
              <Link href={`${routes.marketingTrackerCampaignUpdate.replace('${campaignId}', campaignId)}`} passHref>
                <Button size="xs" component="a" color="violet" leftIcon={<Icons.Edit />}>
                  Edit
                </Button>
              </Link>
            )}
            <ButtonWithConfirmation
              size="xs"
              color="red"
              leftIcon={<Icons.Delete />}
              action={() => handleDelete(id, campaignId)}
            >
              Delete
            </ButtonWithConfirmation>
          </div>
        );
      },
    },
  ];

  return data.length > 0 ? (
    <div>
      <Table data={data} columns={columns} customTheme={theme} />
    </div>
  ) : (
    <GrayBox>
      <Text>You currently have no active campaigns.</Text>
    </GrayBox>
  );
};

export default MarketingCampaignsTable;
