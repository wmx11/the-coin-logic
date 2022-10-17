import { NumberInput } from '@mantine/core';
import React from 'react';

const CampaignBudget = ({ form }) => {
  // form.setFieldValue('budget', form.getInputProps('marketBudget').value)
  return (
    <div>
      <div className="mb-8">
        <NumberInput
          {...form.getInputProps('budget')}
          placeholder="Total Budget"
          label="Total Campaign Budget"
          hideControls
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          formatter={(value) =>
            !Number.isNaN(parseFloat(value)) ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '$ '
          }
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <NumberInput
          {...form.getInputProps('marketBudget')}
          placeholder="Market Budget"
          label="Budget for Market Metrics"
          description="Your budget expenses on increasing market metrics like Price, Volume, Market Cap, Holders, etc."
          hideControls
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          formatter={(value) =>
            !Number.isNaN(parseFloat(value)) ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '$ '
          }
          className="flex-1"
        />
        <NumberInput
          {...form.getInputProps('socialsBudget')}
          placeholder="Socials Budget"
          label="Budget for Social Metrics"
          description="Your budget on increasing social metrics like Twitter followers, Discord, Telegram members, and clicks. This budget will be used to calculate CPC."
          hideControls
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          formatter={(value) =>
            !Number.isNaN(parseFloat(value)) ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '$ '
          }
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default CampaignBudget;
