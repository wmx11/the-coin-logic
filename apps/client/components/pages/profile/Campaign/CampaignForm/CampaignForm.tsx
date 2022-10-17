import React, { useCallback, useEffect, useState } from 'react';
import { Button, Checkbox, Container, Select, Stack, TextInput, Title, Stepper, Group } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { DatePicker } from '@mantine/dates';
import CampaignInitial from './CampaignInitial';
import CampaignDetails from './CampaignDetails';
import CampaignBudget from './CampaignBudget';
import MarketMetrics from './MarketMetrics';
import SocialsMetrics from './SocialsMetrics';
import { formatDate } from 'utils/formatters';
import { addDays } from 'date-fns';
import CampaignFormPreview from './CampaignFormPreview';
import { getProjectAndMarketStatsBySlug } from 'data/getters';
import useUserStore from 'store/useUserStore';

const CampaignForm = () => {
  const [active, setActive] = useState(0);
  const [projectData, setProjectData] = useState();
  const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  const user = useUserStore((state) => state.user);

  const form = useForm({
    // validate: zodResolver(userProfileSchema),
    initialValues: {
      name: '',
      project: '',
      projectName: '',
      isEnabled: true,
      isPercentage: false,
      isInternal: false,
      isAgency: false,
      isCreator: false,
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      budget: 0,
      description: '',
      notes: '',
      agency: '',
      agencyUrl: '',
      marketBudget: 0,
      socialsBudget: 0,
      priceGoal: 0,
      marketCapGoal: 0,
      volumeGoal: 0,
      holdersGoal: 0,
      twitterGoal: 0,
      discordGoal: 0,
      telegramGoal: 0,
    },
  });

  const getProject = () => user?.projects?.find((project) => project?.id === form.getInputProps('project').value);

  const getSelectedProjectStats = useCallback(async () => {
    const projectData = await getProjectAndMarketStatsBySlug(getProject()?.slug as string);

    if (projectData) {
      setProjectData(projectData);
    }
  }, [form.getInputProps('project').value]);

  useEffect(() => {
    getSelectedProjectStats();
    form.setFieldValue('budget', form.getInputProps('marketBudget').value + form.getInputProps('socialsBudget').value);
    form.setFieldValue('projectName', getProject()?.name || '');
  }, [
    form.getInputProps('marketBudget').value,
    form.getInputProps('socialsBudget').value,
    form.getInputProps('project').value,
  ]);

  return (
    <form action="">
      <Stepper active={active} onStepClick={setActive} breakpoint="sm" color="violet">
        <Stepper.Step label="Start" description="What is your campaign">
          <CampaignInitial form={form} />
        </Stepper.Step>
        <Stepper.Step label="Campaign Details" description="Describe your campaign">
          <CampaignDetails form={form} />
        </Stepper.Step>
        <Stepper.Step label="Budget" description="What is your budget?">
          <CampaignBudget form={form} />
        </Stepper.Step>
        <Stepper.Step label="Market Goals" description="What are your market goals?">
          <MarketMetrics form={form} projectData={projectData} />
        </Stepper.Step>
        <Stepper.Step label="Social Goals" description="What are your socials goals?">
          <SocialsMetrics form={form} projectData={projectData} />
        </Stepper.Step>
        <Stepper.Completed>
          <CampaignFormPreview form={form} />
          <Button type="submit" color="violet" size="md" variant="outline">
            Create Campaign
          </Button>
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep} variant="outline">
          Next step
        </Button>
      </Group>
    </form>
  );
};

export default CampaignForm;
