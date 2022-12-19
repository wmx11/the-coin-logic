import { NumberInput, Text, Title } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { AverageMarketChangeForPeriodOfTime } from 'data/getters';
import { FC } from 'react';
import { Campaign } from 'schemas/campaign';
import toCurrency from 'utils/toCurrency';
import toLocaleString from 'utils/toLocaleString';
import { resolvePercentage } from 'utils/utils';

type MarketMetricsProps = {
  form: UseFormReturnType<Campaign>;
  projectData: AverageMarketChangeForPeriodOfTime | undefined;
};

const MarketMetrics: FC<MarketMetricsProps> = ({ form, projectData }) => {
  return (
    <div>
      <Title className="mb-4" order={4}>
        Market Metrics
      </Title>
      <div className="flex justify-between gap-2 gap-y-8 flex-wrap">
        <div className="md:max-w-[49%] w-full">
          <NumberInput
            {...form.getInputProps('priceGoal')}
            placeholder="Price Goal %"
            label="Price Goal"
            description="Expected Price increase during the marketing campaign. The number represents a percentage change."
            size="md"
          />
          <Text color="violet" size="sm">
            Current Price: {toCurrency(projectData?.price || 0)}
          </Text>
          <Text color="violet" size="sm">
            Expected Price After Campaign:{' '}
            {toCurrency(resolvePercentage(form.getInputProps('priceGoal').value, projectData?.price || 0)) || '-'}
          </Text>
        </div>
        <div className="md:max-w-[49%] w-full">
          <NumberInput
            {...form.getInputProps('marketCapGoal')}
            placeholder="Market Cap Goal %"
            label="Market Cap Goal"
            description="Expected Market Cap increase during the marketing campaign. The number represents a percentage change."
            size="md"
          />
          <Text color="violet" size="sm">
            Current Market Cap: {toCurrency(projectData?.marketCap || 0)}
          </Text>
          <Text color="violet" size="sm">
            Expected Market Cap After Campaign:{' '}
            {toCurrency(resolvePercentage(form.getInputProps('marketCapGoal').value, projectData?.marketCap || 0)) ||
              '-'}
          </Text>
        </div>

        <div className="md:max-w-[49%] w-full">
          <NumberInput
            {...form.getInputProps('volumeGoal')}
            placeholder="Volume Goal %"
            label="Volume Goal"
            description="Expected Daily Volume increase during the marketing campaign. The number represents a percentage change."
            size="md"
          />
          <Text color="violet" size="sm">
            Current Daily Volume: {toCurrency(projectData?.volume)}
          </Text>
          <Text color="violet" size="sm">
            Expected Daily Volume After Campaign:{' '}
            {toCurrency(resolvePercentage(form.getInputProps('volumeGoal').value, projectData?.volume as number)) ||
              '-'}
          </Text>
        </div>

        <div className="md:max-w-[49%] w-full">
          <NumberInput
            {...form.getInputProps('holdersGoal')}
            placeholder="Holders Goal %"
            label="Holders Goal"
            description="Expected Holders increase during the marketing campaign. The number represents a percentage change."
            size="md"
          />
          <Text color="violet" size="sm">
            Current Holders: {toLocaleString(projectData?.holders || 0)}
          </Text>
          <Text color="violet" size="sm">
            Expected Holders Number After Campaign:{' '}
            {toLocaleString(resolvePercentage(form.getInputProps('holdersGoal').value, projectData?.holders || 0)) ||
              '-'}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default MarketMetrics;
