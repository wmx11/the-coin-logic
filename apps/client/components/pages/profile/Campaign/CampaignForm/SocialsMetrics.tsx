import { TextInput, Title } from '@mantine/core';
import React from 'react';
import toCurrency from 'utils/toCurrency';

const SocialsMetrics = ({ form, projectData }) => {
  return (
    <div>
      <Title className="mb-4" order={2}>
        Social Metrics
      </Title>
      <div className="flex justify-between gap-2 gap-y-8 flex-wrap">
        <TextInput
          {...form.getInputProps('twitterGoal')}
          placeholder="Twitter Followers Goal"
          label="Twitter Followers Goal"
          description="Expected Twitter Followers increase during the marketing campaign. You can use whole numbers (100, 200, 300) or percentages (4%, 5%)"
          size="md"
          className="md:max-w-[49%] w-full"
        />
        <TextInput
          {...form.getInputProps('discordGoal')}
          placeholder="Discord Members Goal"
          label="Discord Members Goal"
          description="Expected Discord Members increase during the marketing campaign. You can use whole numbers (100, 200, 300) or percentages (4%, 5%)"
          size="md"
          className="md:max-w-[49%] w-full"
        />
        <TextInput
          {...form.getInputProps('telegramGoal')}
          placeholder="Telegram Members Goal"
          label="Telegram Members Goal"
          description="Expected Telegram Members increase during the marketing campaign. You can use whole numbers (100, 200, 300) or percentages (4%, 5%)"
          size="md"
          className="md:max-w-[49%] w-full"
        />
      </div>
    </div>
  );
};

export default SocialsMetrics;
