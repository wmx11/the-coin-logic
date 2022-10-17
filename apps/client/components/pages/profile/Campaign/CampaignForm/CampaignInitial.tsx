import { Select, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import React from 'react';
import useUserStore from 'store/useUserStore';

const CampaignInitial = ({ form }) => {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      <div className="flex justify-between gap-2 mb-8">
        <TextInput
          {...form.getInputProps('name')}
          placeholder="Campaign Name"
          label="Campaign Name"
          description="Name of the marketing campaign. Used to identifity different campaigns."
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
          data={user && user?.projects?.map((item) => ({ value: item.id, label: item.name })) || []}
          required
          className="flex-1"
        />
      </div>
      <div className="flex justify-between gap-2">
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
