import { NumberInput, Text, Title } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { AverageMarketChangeForPeriodOfTime } from 'data/getters';
import { FC } from 'react';
import { Campaign } from 'schemas/campaign';
import toLocaleString from 'utils/toLocaleString';
import { resolvePercentage } from 'utils/utils';

type SocialsMetricsProps = {
  form: UseFormReturnType<Campaign>;
  projectData: AverageMarketChangeForPeriodOfTime | undefined;
};

const SocialsMetrics: FC<SocialsMetricsProps> = ({ form, projectData }) => {
  return (
    <div>
      <Title className="mb-4" order={4}>
        Social Metrics
      </Title>
      <div className="flex justify-between gap-2 gap-y-8 flex-wrap">
        <div className="md:max-w-[49%] w-full">
          <NumberInput
            {...form.getInputProps('twitterGoal')}
            placeholder="Twitter Followers Goal %"
            label="Twitter Followers Goal"
            description="Expected Twitter Followers increase during the marketing campaign. The number represents a percentage change."
            size="md"
          />
          <Text color="violet" size="sm">
            Current Avg. Twitter Followers: {toLocaleString(projectData?.twitter || 0)}
          </Text>
          <Text color="violet" size="sm">
            Expected Avg. Twitter Followers After Campaign:{' '}
            {toLocaleString(resolvePercentage(form.getInputProps('twitterGoal').value, projectData?.twitter || 0)) ||
              '-'}
          </Text>
        </div>
        <div className="md:max-w-[49%] w-full">
          <NumberInput
            {...form.getInputProps('discordGoal')}
            placeholder="Discord Members Goal %"
            label="Discord Members Goal"
            description="Expected Discord Members increase during the marketing campaign. The number represents a percentage change."
            size="md"
          />
          <Text color="violet" size="sm">
            Current Avg. Discord Members: {toLocaleString(projectData?.discord || 0)}
          </Text>
          <Text color="violet" size="sm">
            Expected Avg. Discord Members After Campaign:{' '}
            {toLocaleString(resolvePercentage(form.getInputProps('discordGoal').value, projectData?.discord || 0)) ||
              '-'}
          </Text>
        </div>
        <div className="md:max-w-[49%] w-full">
          <NumberInput
            {...form.getInputProps('telegramGoal')}
            placeholder="Telegram Members Goal %"
            label="Telegram Members Goal"
            description="Expected Telegram Members increase during the marketing campaign. The number represents a percentage change."
            size="md"
          />
          <Text color="violet" size="sm">
            Current Avg. Telegram Members: {toLocaleString(projectData?.telegram || 0)}
          </Text>
          <Text color="violet" size="sm">
            Expected Avg. Telegram Members After Campaign:{' '}
            {toLocaleString(resolvePercentage(form.getInputProps('telegramGoal').value, projectData?.telegram || 0)) ||
              '-'}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SocialsMetrics;
