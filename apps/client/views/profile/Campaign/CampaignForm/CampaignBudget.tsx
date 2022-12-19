import { Button, NumberInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { Campaign } from 'schemas/campaign';

const CampaignBudget = ({ form }: { form: UseFormReturnType<Campaign> }) => {
  const parser = (value: string) => value?.replace(/\$\s?|(,*)/g, '');
  const formatter = (value: string) =>
    !Number.isNaN(parseFloat(value as string)) ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '$ ';

  const splitBudget = () => {
    if (!form.values.budget) {
      return;
    }
    form.setValues({ marketBudget: form.values.budget / 2, socialBudget: form.values.budget / 2 });
  };

  const resetBudget = () => {
    form.setValues({ marketBudget: 0, socialBudget: 0, budget: 0 });
  };

  return (
    <div>
      <div className="flex justify-end gap-2 flex-col md:flex-row mb-4">
        {form.values.trackMarket && form.values.trackSocial && (
          <Button variant="outline" color="violet" onClick={splitBudget}>
            Split Budget Equally
          </Button>
        )}
        <Button variant="outline" color="violet" onClick={resetBudget}>
          Reset Budget
        </Button>
      </div>
      <div className="mb-8">
        <NumberInput
          {...form.getInputProps('budget')}
          placeholder="Total Budget"
          label="Total Campaign Budget"
          hideControls
          parser={parser}
          formatter={formatter}
          size="md"
        />
      </div>

      <div className="flex items-center justify-between gap-2 flex-col md:flex-row">
        {form.values.trackMarket && (
          <NumberInput
            {...form.getInputProps('marketBudget')}
            placeholder="Market Budget"
            label="Budget for Market Metrics"
            description="Your budget expenses on increasing market metrics like Price, Volume, Market Cap, Holders, etc."
            hideControls
            parser={parser}
            formatter={formatter}
            size="md"
            className="flex-1"
          />
        )}
        {form.values.trackSocial && (
          <NumberInput
            {...form.getInputProps('socialBudget')}
            placeholder="Social Budget"
            label="Budget for Social Metrics"
            description="Your budget on increasing social metrics like Twitter, Discord, Telegram members, and CPC."
            hideControls
            parser={parser}
            formatter={formatter}
            size="md"
            className="flex-1"
          />
        )}
      </div>
    </div>
  );
};

export default CampaignBudget;
