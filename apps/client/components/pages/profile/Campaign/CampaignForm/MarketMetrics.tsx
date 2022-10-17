import { Text, TextInput, Title } from '@mantine/core';
import React from 'react';
import toCurrency from 'utils/toCurrency';
import toLocaleString from 'utils/toLocaleString';
import { resolveStringInputToResult } from 'utils/utils';

const MarketMetrics = ({ form, projectData }) => {
  return (
    <div>
      <Title className="mb-4" order={2}>
        Market Metrics
      </Title>
      <div className="flex justify-between gap-2 gap-y-8 flex-wrap">
        <div className="md:max-w-[49%] w-full">
          <TextInput
            {...form.getInputProps('priceGoal')}
            placeholder="Price Goal"
            label="Price Goal"
            description="Expected Price increase during the marketing campaign. You can use whole numbers (100, 200, 300) or percentages (4%, 5%)"
            size="md"
          />
          <Text color="violet" size="sm">
            Current Price: {toCurrency(projectData.price)}
          </Text>
          <Text color="violet" size="sm">
            Expected Price After Campaign:{' '}
            {toCurrency(resolveStringInputToResult(form.getInputProps('priceGoal').value, projectData.price)) || 0}
          </Text>
        </div>
        <div className="md:max-w-[49%] w-full">
          <TextInput
            {...form.getInputProps('marketCapGoal')}
            placeholder="Market Cap Goal"
            label="Market Cap Goal"
            description="Expected Market Cap increase during the marketing campaign. You can use whole numbers (100, 200, 300) or percentages (4%, 5%)"
            size="md"
          />
          <Text color="violet" size="sm">
            Current Market Cap: {toCurrency(projectData.marketCap)}
          </Text>
          <Text color="violet" size="sm">
            Expected Market Cap After Campaign:{' '}
            {toCurrency(resolveStringInputToResult(form.getInputProps('marketCapGoal').value, projectData.marketCap)) ||
              0}
          </Text>
        </div>

        <div className="md:max-w-[49%] w-full">
          <TextInput
            {...form.getInputProps('volumeGoal')}
            placeholder="Volume Goal"
            label="Volume Goal"
            description="Expected Daily Volume increase during the marketing campaign. You can use whole numbers (100, 200, 300) or percentages (4%, 5%)"
            size="md"
          />
          <Text color="violet" size="sm">
            Current Daily Volume: {toCurrency(projectData.volume.h24)}
          </Text>
          <Text color="violet" size="sm">
            Expected Daily Volume After Campaign:{' '}
            {toCurrency(resolveStringInputToResult(form.getInputProps('volumeGoal').value, projectData.volume.h24)) ||
              0}
          </Text>
        </div>

        <div className="md:max-w-[49%] w-full">
          <TextInput
            {...form.getInputProps('holdersGoal')}
            placeholder="Holders Goal"
            label="Holders Goal"
            description="Expected Holders increase during the marketing campaign. You can use whole numbers (100, 200, 300) or percentages (4%, 5%)"
            size="md"
          />
          <Text color="violet" size="sm">
            Current Holders: {toLocaleString(projectData.holders)}
          </Text>
          <Text color="violet" size="sm">
            Expected Daily Volume After Campaign:{' '}
            {toLocaleString(resolveStringInputToResult(form.getInputProps('holdersGoal').value, projectData.holders)) ||
              0}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default MarketMetrics;
