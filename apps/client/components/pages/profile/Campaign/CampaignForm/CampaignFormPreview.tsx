import { Text } from '@mantine/core';
import React from 'react';
import { formatDate } from 'utils/formatters';

const CampaignFormPreview = ({ form }) => {
  return (
    <div>
      <div>
        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Campaign Name:</Text>
          <Text>{form.getInputProps('name').value}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Project:</Text>
          <Text>{form.getInputProps('projectName').value}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Start Date:</Text>
          <Text>{formatDate(form.getInputProps('startDate').value)}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>End Date:</Text>
          <Text>{formatDate(form.getInputProps('endDate').value)}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>The Campaing is Enabled:</Text>
          <Text>{form.getInputProps('isEnabled').value.toString()}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Campaign Type:</Text>
          {form.getInputProps('isInternal').value && <Text>Internal</Text>}
          {form.getInputProps('isAgency').value && <Text>Agency ({form.getInputProps('agency').value})</Text>}
          {form.getInputProps('isCreator').value && <Text>Creator</Text>}
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Campaign Description:</Text>
          <Text>{form.getInputProps('description').value || '-'}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Campaign Notes:</Text>
          <Text>{form.getInputProps('notes').value || '-'}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Total Budget:</Text>
          <Text>${form.getInputProps('budget').value}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Market Metrics Budget:</Text>
          <Text>${form.getInputProps('marketBudget').value}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Social Metrics Budget:</Text>
          <Text>${form.getInputProps('socialsBudget').value}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Price Goal:</Text>
          <Text>{form.getInputProps('priceGoal').value}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Market Cap Goal:</Text>
          <Text>{form.getInputProps('marketCapGoal').value}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Daily Volume Goal:</Text>
          <Text>{form.getInputProps('volumeGoal').value}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Holders Goal:</Text>
          <Text>{form.getInputProps('holdersGoal').value}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Twitter Followers Goal:</Text>
          <Text>{form.getInputProps('twitterGoal').value}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Discord Members Goal:</Text>
          <Text>{form.getInputProps('discordGoal').value}</Text>
        </Text>

        <Text className="flex gap-2 mb-4">
          <Text weight={700}>Telegram Members Goal:</Text>
          <Text>{form.getInputProps('telegramGoal').value}</Text>
        </Text>
      </div>
    </div>
  );
};

export default CampaignFormPreview;
