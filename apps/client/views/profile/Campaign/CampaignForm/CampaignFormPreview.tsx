import { Paper, Text } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import GradientTitle from 'components/Text/GradientTitle';
import { Campaign } from 'schemas/campaign';
import { formatDate } from 'utils/formatters';

const CampaignFormPreview = ({ form }: { form: UseFormReturnType<Campaign> }) => {
  return (
    <div>
      <div>
        <GradientTitle order={4} weight={700} className="mb-4">
          Review
        </GradientTitle>

        <Paper p="md" shadow="sm" withBorder className="mb-4">
          <GradientTitle order={2} className="mb-2">
            Initial Data
          </GradientTitle>
          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Campaign Name:</Text>
            <Text>{form.getInputProps('name').value}</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Project:</Text>
            <Text>{form.getInputProps('projectName').value}</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Start Date:</Text>
            <Text>{formatDate(form.getInputProps('startDate').value)}</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>End Date:</Text>
            <Text>{formatDate(form.getInputProps('endDate').value)}</Text>
          </Text>
        </Paper>

        <Paper p="md" shadow="sm" withBorder className="mb-4">
          <GradientTitle order={2} className="mb-2">
            Campaign Details
          </GradientTitle>
          <Text className="flex gap-2 mb-2">
            <Text weight={700}>The Campaing is Enabled:</Text>
            <Text>{form.getInputProps('enabled').value.toString()}</Text>
          </Text>
          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Track Market Metrics:</Text>
            <Text>{form.getInputProps('trackMarket').value.toString()}</Text>
          </Text>
          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Track Social Metrics</Text>
            <Text>{form.getInputProps('trackSocial').value.toString()}</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Campaign Type:</Text>
            {form.getInputProps('isInternal').value && <Text>Internal</Text>}
            {form.getInputProps('isAgency').value && <Text>Agency ({form.getInputProps('agency').value})</Text>}
            {form.getInputProps('isCreator').value && <Text>Creator</Text>}
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Campaign Description:</Text>
            <Text>{form.getInputProps('description').value || '-'}</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Campaign Notes:</Text>
            <Text>{form.getInputProps('notes').value || '-'}</Text>
          </Text>
        </Paper>

        <Paper p="md" shadow="sm" withBorder className="mb-4">
          <GradientTitle order={2} className="mb-2">
            Budget
          </GradientTitle>
          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Total Budget:</Text>
            <Text>${form.getInputProps('budget').value}</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Market Metrics Budget:</Text>
            <Text>${form.getInputProps('marketBudget').value || 0}</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Social Metrics Budget:</Text>
            <Text>${form.getInputProps('socialBudget').value || 0}</Text>
          </Text>
        </Paper>

        <Paper p="md" shadow="sm" withBorder className="mb-4">
          <GradientTitle order={2} className="mb-2">
            Market Metrics Goals
          </GradientTitle>
          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Price Goal:</Text>
            <Text>{form.getInputProps('priceGoal').value || 0}%</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Market Cap Goal:</Text>
            <Text>{form.getInputProps('marketCapGoal').value || 0}%</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Daily Volume Goal:</Text>
            <Text>{form.getInputProps('volumeGoal').value || 0}%</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Holders Goal:</Text>
            <Text>{form.getInputProps('holdersGoal').value || 0}%</Text>
          </Text>
        </Paper>

        <Paper p="md" shadow="sm" withBorder className="mb-4">
          <GradientTitle order={2} className="mb-2">
            Social Metrics Goals
          </GradientTitle>
          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Twitter Followers Goal:</Text>
            <Text>{form.getInputProps('twitterGoal').value || 0}%</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Discord Members Goal:</Text>
            <Text>{form.getInputProps('discordGoal').value || 0}%</Text>
          </Text>

          <Text className="flex gap-2 mb-2">
            <Text weight={700}>Telegram Members Goal:</Text>
            <Text>{form.getInputProps('telegramGoal').value || 0}%</Text>
          </Text>
        </Paper>
      </div>
    </div>
  );
};

export default CampaignFormPreview;
