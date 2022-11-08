import { Checkbox, Textarea, TextInput, Title } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { Campaign } from 'schemas/campaign';

const CampaignDetails = ({ form }: { form: UseFormReturnType<Campaign> }) => {
  return (
    <div>
      <div className="mb-8">
        <Title className="mb-4" order={4}>
          Campaign Details
        </Title>
        <div className="flex flex-col gap-4">
          <Checkbox
            {...form.getInputProps('enabled', { type: 'checkbox' })}
            color="violet"
            label="This marketing campaign is enabled."
            description="If the marketing campaign is enabled it will be 'live' and ready to track clicks."
            size="sm"
          />
          <Checkbox
            {...form.getInputProps('trackMarket', { type: 'checkbox' })}
            color="violet"
            label="Track market metrics and goals."
            description="Is this marketing campaign is used to track market metrics and goals."
            size="sm"
          />
          <Checkbox
            {...form.getInputProps('trackSocial', { type: 'checkbox' })}
            color="violet"
            label="Track social metrics and goals."
            description="Is this marketing campaign is used to track social metrics and goals."
            size="sm"
          />
        </div>
      </div>

      <div className="mb-8">
        <Title className="mb-4" order={4}>
          Campaign Type
        </Title>

        {/* When the campaign is internal */}
        <div className="flex flex-col gap-4">
          {!form.getInputProps('isAgency').value && !form.getInputProps('isCreator').value && (
            <Checkbox
              {...form.getInputProps('isInternal', { type: 'checkbox' })}
              color="violet"
              label="This marketing campaign is internal."
              description="The marketing campaign is not run by an agency or a creator/influencer. The project is responsible for the campaign."
              size="sm"
            />
          )}

          {/* When the campaign is run by agency */}
          {!form.getInputProps('isInternal').value && !form.getInputProps('isCreator').value && (
            <div>
              <Checkbox
                {...form.getInputProps('isAgency', { type: 'checkbox' })}
                color="violet"
                label="This marketing campaign is run by an agency."
                description="The marketing campaign is run by an agency. If you hired an agency to run this campaign, check this box."
                size="sm"
              />
              {form.getInputProps('isAgency').value && (
                <div className="flex justify-between gap-2 my-4 flex-col md:flex-row">
                  <TextInput
                    {...form.getInputProps('agency')}
                    placeholder="Marketing Campaign Agency Name"
                    label="Marketing Campaign Agency Name"
                    description="Provide the name of the agency this campaign is run by."
                    size="md"
                    autosize
                    minRows={10}
                    className="flex-1"
                  />
                  <TextInput
                    {...form.getInputProps('agencyUrl')}
                    placeholder="Agency Website URL"
                    label="Agency Website URL"
                    description="Provide the website URL to the agency you are working with."
                    size="md"
                    autosize
                    minRows={10}
                    className="flex-1"
                  />
                </div>
              )}
            </div>
          )}

          {/* When the campaign is run by influencer or creator */}
          {!form.getInputProps('isInternal').value && !form.getInputProps('isAgency').value && (
            <Checkbox
              {...form.getInputProps('isCreator', { type: 'checkbox' })}
              color="violet"
              label="This marketing campaign is run by a creator or influencer (YouTuber, TikTok, etc.)."
              description="The marketing campaign is run a by a creator or influencer on any social media platform."
              size="sm"
            />
          )}
        </div>
      </div>

      <Title className="mb-4" order={4}>
        Campaign Description and Notes
      </Title>
      <div className="flex justify-between items-stretch gap-2 flex-col md:flex-row">
        <Textarea
          {...form.getInputProps('description')}
          placeholder="Campaign Description"
          label="Campaign Description"
          description="Give a description to your campaign."
          size="md"
          autosize
          minRows={10}
          maxRows={10}
          className="flex-1"
        />
        <Textarea
          {...form.getInputProps('notes')}
          placeholder="Campaign Notes"
          label="Campaign Notes"
          description="Leave any campaign notes that you will use in the future."
          size="md"
          autosize
          minRows={10}
          maxRows={10}
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default CampaignDetails;
