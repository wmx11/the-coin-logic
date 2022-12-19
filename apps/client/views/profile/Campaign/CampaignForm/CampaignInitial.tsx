import { Select, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { UseFormReturnType } from '@mantine/form';
import useUser from 'hooks/useUser';
import { Campaign } from 'schemas/campaign';

const CampaignInitial = ({ form }: { form: UseFormReturnType<Campaign> }) => {
  const { user } = useUser();

  return (
    <div>
      <div className="flex justify-between gap-2 mb-8 flex-col md:flex-row">
        <TextInput
          {...form.getInputProps('name')}
          placeholder="Campaign Name"
          label="Campaign Name"
          description="Name of the marketing campaign."
          size="md"
          required
          className="flex-1"
        />
        <Select
          {...form.getInputProps('project')}
          label="Project"
          placeholder="Project"
          description="Select the project for which the campaign will be used."
          size="md"
          searchable
          nothingFound="No options"
          data={(user && user?.projects?.map((item) => ({ value: item.id, label: item.name }))) || []}
          required
          className="flex-1"
        />
      </div>
      <div className="flex justify-between gap-2 flex-col md:flex-row">
        <DatePicker
          {...form.getInputProps('startDate')}
          placeholder="Pick date"
          description="Select the date when the marketing campaign is going to start."
          label="Campaign Start Date"
          className="flex-1"
          size="md"
          required
        />
        <DatePicker
          {...form.getInputProps('endDate')}
          placeholder="Pick date"
          description="Select the date when the marketing campaign is going to end."
          label="Campaign End Date"
          className="flex-1"
          size="md"
          required
        />
      </div>
    </div>
  );
};

export default CampaignInitial;
