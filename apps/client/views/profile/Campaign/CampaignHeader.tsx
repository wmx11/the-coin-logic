import { DocumentNode, useMutation } from '@apollo/client';
import { Button, Text, Title } from '@mantine/core';
import ButtonWithConfirmation from 'components/ButtonWithConfirmation';
import Paper from 'components/Paper';
import { ProjectTitle } from 'components/ProjectTitle';
import GradientTitle from 'components/Text/GradientTitle';
import { AverageMarketChangeForPeriodOfTime } from 'data/getters';
import { DELETE_CAMPAIGN, SET_FINAL_CAMPAIGN_SNAPSHOT, UPDATE_CAMPAIGN_STATUS } from 'data/mutations/campaign';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import routes from 'routes';
import { MarketingCampaign, MarketingTrackerResult } from 'types';
import { Icons } from 'utils/icons';
import toCurrency from 'utils/toCurrency';
import { getStatusByDate } from 'utils/utils';
import CampaignStatus from '../MarketingTracker/CampaignStatus';
import MarketerType from '../MarketingTracker/MarketerType';
import { exportToCsv } from './utils';

type CampaignHeaderProps = {
  campaign: MarketingCampaign;
  campaignResults: MarketingTrackerResult;
  projectAverages: AverageMarketChangeForPeriodOfTime;
};

const CampaignHeader: FC<CampaignHeaderProps> = ({ campaign, projectAverages, campaignResults }) => {
  const { id, name, campaignId, startDate, endDate, project, budget, status } = campaign;

  const [deleteCampaign] = useMutation(DELETE_CAMPAIGN as DocumentNode);
  const [updateCampaignStatus] = useMutation(UPDATE_CAMPAIGN_STATUS as DocumentNode);
  const [setFinalCampaignSnapshot] = useMutation(SET_FINAL_CAMPAIGN_SNAPSHOT as DocumentNode);

  const router = useRouter();

  const campaignStatus = getStatusByDate({ startDate, endDate, status: status as string });

  const handleDelete = async () => {
    await deleteCampaign({ variables: { id } });
    router.push(routes.marketingTracker);
  };

  const handleCampaignStatus = async () => {
    try {
      await updateCampaignStatus({ variables: { id, status: 'ended' } });
      await setFinalCampaignSnapshot({ variables: { id, finalSnapshot: projectAverages } });
      router.reload();
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <>
      <div className="flex justify-end gap-2 flex-col mt-2 md:flex-row md:flex-wrap">
        {campaignStatus !== 'ended' && (
          <Link
            href={`${routes.marketingTrackerCampaignUpdate.replace('${campaignId}', campaignId as string)}`}
            passHref
          >
            <Button component="a" variant="outline" color="violet" leftIcon={<Icons.Edit />}>
              Update Campaign
            </Button>
          </Link>
        )}

        <Button
          component="a"
          color="grape"
          leftIcon={<Icons.ExportFile />}
          onClick={() => exportToCsv({ campaign, campaignResults }, name as string)}
        >
          Export to .CSV
        </Button>

        {campaignStatus !== 'ended' && (
          <ButtonWithConfirmation
            action={handleCampaignStatus}
            color="orange"
            variant="outline"
            leftIcon={<Icons.Stop />}
          >
            End Campaign
          </ButtonWithConfirmation>
        )}

        <ButtonWithConfirmation action={handleDelete} color="red" variant="outline" leftIcon={<Icons.Delete />}>
          Delete Campaign
        </ButtonWithConfirmation>
      </div>

      <div className="my-4 ">
        <div className="mb-4">
          <GradientTitle>{name}</GradientTitle>
          <Text size="xs" color="dimmed" className="mb-4">
            {campaignId}
          </Text>
          <Text size="sm" className="mb-2">
            Related Project
          </Text>
          <ProjectTitle
            size="sm"
            avatar={project?.logo?.url || ''}
            title={project?.name as string}
            component="a"
            href={`/project/${project?.slug}`}
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          <Paper className="flex-1">
            <div>
              <Title order={6}>Time Period</Title>
              <Text size="xs" color="dimmed">
                {startDate}
              </Text>
              <Text size="xs" color="dimmed">
                {endDate}
              </Text>
            </div>
          </Paper>

          <Paper className="flex-1">
            <div>
              <Title order={6}>Status</Title>
              <CampaignStatus startDate={startDate} endDate={endDate} status={status as string} />
            </div>
          </Paper>

          <Paper className="flex-1">
            <div>
              <Title order={6}>Budget</Title>
              <Text size="lg" weight={700}>
                {toCurrency(budget as number)}
              </Text>
            </div>
          </Paper>

          <Paper className="flex-1">
            <div>
              <Title order={6}>Marketer</Title>
              <MarketerType campaign={campaign} />
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default CampaignHeader;
