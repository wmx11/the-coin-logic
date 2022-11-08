import { DocumentNode, useMutation } from '@apollo/client';
import { Button, Group, Paper, Stepper } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { MARKET_STATS_SNAPSHOT_AVERAGE_DAYS } from 'constants/campaigns';
import { AverageMarketChangeForPeriodOfTime, getProjectAverageMarketChangeForPeriodOfTime } from 'data/getters';
import { CREATE_CAMPAIGN, UPDATE_CAMPAIGN } from 'data/mutations/campaign';
import { addDays, sub } from 'date-fns';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/router';
import { FC, useCallback, useEffect, useState } from 'react';
import routes from 'routes';
import { Campaign, campaignSchema } from 'schemas/campaign';
import { MarketingCampaign } from 'types';
import { formatDate } from 'utils/formatters';
import CampaignBudget from './CampaignBudget';
import CampaignDetails from './CampaignDetails';
import CampaignFormPreview from './CampaignFormPreview';
import CampaignInitial from './CampaignInitial';
import MarketMetrics from './MarketMetrics';
import SocialsMetrics from './SocialsMetrics';

type CampaignFormProps = {
  campaignData?: Campaign & MarketingCampaign;
  type: 'create' | 'update';
};

const CampaignForm: FC<CampaignFormProps> = ({ campaignData, type }) => {
  const { user } = useUser();
  const [active, setActive] = useState(0);
  const [projectData, setProjectData] = useState<AverageMarketChangeForPeriodOfTime>();
  const [createOrUpdateCampaign, { data, loading, error }] = useMutation(
    type === 'create' ? (CREATE_CAMPAIGN as DocumentNode) : (UPDATE_CAMPAIGN as DocumentNode),
  );

  const router = useRouter();

  const form = useForm<Campaign>({
    validateInputOnBlur: true,
    validate: zodResolver(campaignSchema),
    initialValues: {
      name: campaignData?.name || '',
      project: campaignData?.project?.id || '',
      user: user?.email || '',
      projectName: '',
      enabled: campaignData ? !!campaignData?.enabled : true,
      isPercentage: campaignData?.isPercentage || false,
      isInternal: campaignData?.isInternal || false,
      isAgency: campaignData?.isAgency || false,
      isCreator: campaignData?.isCreator || false,
      trackMarket: campaignData ? !!campaignData?.trackMarket : true,
      trackSocial: campaignData ? !!campaignData?.trackSocial : true,
      startDate: (campaignData?.startDate && new Date(campaignData?.startDate)) || new Date(),
      endDate: (campaignData?.endDate && new Date(campaignData?.endDate)) || addDays(new Date(), 1),
      budget: campaignData?.budget || null,
      description: campaignData?.description || '',
      notes: campaignData?.notes || '',
      agency: campaignData?.agency || '',
      agencyUrl: campaignData?.agencyUrl || '',
      marketBudget: campaignData?.marketBudget || null,
      socialBudget: campaignData?.socialBudget || null,
      marketStatSnapshot: campaignData?.marketStatSnapshot || null,
      priceGoal: campaignData?.priceGoal || null,
      marketCapGoal: campaignData?.marketCapGoal || null,
      volumeGoal: campaignData?.volumeGoal || null,
      holdersGoal: campaignData?.holdersGoal || null,
      twitterGoal: campaignData?.twitterGoal || null,
      discordGoal: campaignData?.discordGoal || null,
      telegramGoal: campaignData?.telegramGoal || null,
    },
  });

  const STEPS = (() => {
    if (!form.values.trackMarket && !form.values.trackSocial) {
      return 3;
    }

    if (!form.values.trackMarket || !form.values.trackSocial) {
      return 4;
    }

    return 5;
  })();

  const nextStep = () => {
    setActive((current) => (current < STEPS && form.isValid() ? current + 1 : current));
  };

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const getProject = () => user?.projects?.find((project) => project?.id === form.getInputProps('project').value);

  const getSelectedProjectAveragesSnapshot = useCallback(async () => {
    if (form.values.marketStatSnapshot) {
      return setProjectData(form.values.marketStatSnapshot);
    }

    const projectData = await getProjectAverageMarketChangeForPeriodOfTime(
      form.values.project,
      sub(new Date(), { days: MARKET_STATS_SNAPSHOT_AVERAGE_DAYS }),
      new Date(),
    );

    if (projectData) {
      setProjectData(projectData);
    }
  }, [form.values.project]);

  useEffect(() => {
    getSelectedProjectAveragesSnapshot();

    if (!form.values.trackMarket) {
      form.setFieldValue('marketBudget', 0);
    }

    if (!form.values.trackSocial) {
      form.setFieldValue('socialBudget', 0);
    }

    form.setFieldValue('projectName', getProject()?.name || '');

    form.setFieldValue('user', user?.email as string);
  }, [form.values.project, form.values.trackMarket, form.values.trackSocial, user]);

  const handleSubmit = async ({
    name,
    project,
    user,
    enabled,
    isInternal,
    trackMarket,
    trackSocial,
    startDate,
    endDate,
    budget,
    description,
    notes,
    agency,
    agencyUrl,
    marketBudget,
    socialBudget,
    priceGoal,
    marketCapGoal,
    volumeGoal,
    holdersGoal,
    twitterGoal,
    discordGoal,
    telegramGoal,
  }: Campaign) => {
    const { data } = await createOrUpdateCampaign({
      variables: {
        id: campaignData?.id,
        name,
        project,
        enabled,
        budget,
        user,
        isInternal,
        trackMarket,
        trackSocial,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
        description,
        notes,
        agency,
        agencyUrl,
        marketBudget,
        socialBudget,
        marketStatSnapshot: type === 'create' ? projectData : campaignData?.marketStatSnapshot || null,
        priceGoal,
        marketCapGoal,
        volumeGoal,
        holdersGoal,
        twitterGoal,
        discordGoal,
        telegramGoal,
      },
    });

    if (data) {
      const returnedCampaignId =
        type === 'create' ? data.createMarketingCampaign.campaignId : data.updateMarketingCampaign.campaignId;
      return router.push(routes.marketingTrackerCampaign.replace('${campaignId}', returnedCampaignId));
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm" color="violet">
        <Stepper.Step label="Start" description="What is your campaign">
          <Paper p="md" shadow="sm" withBorder>
            <CampaignInitial form={form} />
          </Paper>
        </Stepper.Step>
        <Stepper.Step label="Campaign Details" description="Describe your campaign">
          <Paper p="md" shadow="sm" withBorder>
            <CampaignDetails form={form} />
          </Paper>
        </Stepper.Step>
        <Stepper.Step label="Budget" description="What is your budget?">
          <Paper p="md" shadow="sm" withBorder>
            <CampaignBudget form={form} />
          </Paper>
        </Stepper.Step>
        {form.values.trackMarket && (
          <Stepper.Step label="Market Goals" description="What are your market goals?">
            <Paper p="md" shadow="sm" withBorder>
              <MarketMetrics form={form} projectData={projectData} />
            </Paper>
          </Stepper.Step>
        )}
        {form.values.trackSocial && (
          <Stepper.Step label="Social Goals" description="What are your socials goals?">
            <Paper p="md" shadow="sm" withBorder>
              <SocialsMetrics form={form} projectData={projectData} />
            </Paper>
          </Stepper.Step>
        )}
        <Stepper.Completed>
          <Paper p="md" shadow="sm" withBorder className="mb-4">
            <CampaignFormPreview form={form} />
          </Paper>
          <Button type="submit" color="violet" size="md" variant="outline" disabled={loading || data} fullWidth>
            {type === 'create' ? 'Create Campaign' : 'Update Campaign'}
          </Button>
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        {active > 0 && (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        {active < STEPS && (
          <Button onClick={nextStep} variant="outline" color="violet">
            {active === STEPS - 1 ? 'Review' : 'Next Step'}
          </Button>
        )}
      </Group>
    </form>
  );
};

export default CampaignForm;
