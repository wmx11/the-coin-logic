import { Checkbox, Select, Textarea, TextInput, Title } from '@mantine/core';
import { useState } from 'react';

const CampaignDetails = ({ form }) => {
  return (
    <div>
      <div className="mb-16">
        <Title className="mb-8" order={2}>
          Campaign Details
        </Title>
        <Checkbox
          {...form.getInputProps('isEnabled', { type: 'checkbox' })}
          color="violet"
          label="This marketing campaign is enabled."
          size="md"
        />
      </div>

      <div className="mb-16">
        <Title className="mb-8" order={2}>
          Campaign Type
        </Title>

        <div className="flex flex-col gap-4">
          {!form.getInputProps('isAgency').value && !form.getInputProps('isCreator').value && (
            <Checkbox
              {...form.getInputProps('isInternal', { type: 'checkbox' })}
              color="violet"
              label="This marketing campaign is internal."
              size="md"
            />
          )}

          {!form.getInputProps('isInternal').value && !form.getInputProps('isCreator').value && (
            <div>
              <Checkbox
                {...form.getInputProps('isAgency', { type: 'checkbox' })}
                color="violet"
                label="This marketing campaign is run by an agency."
                size="md"
              />
              {form.getInputProps('isAgency').value && (
                <div className="flex justify-between gap-2 my-4">
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

          {!form.getInputProps('isInternal').value && !form.getInputProps('isAgency').value && (
            <Checkbox
            {...form.getInputProps('isCreator', { type: 'checkbox' })}
              color="violet"
              label="This marketing campaign is run by a creator or influencer (YouTuber, TikTok, etc.)."
              size="md"
            />
          )}
        </div>
      </div>

      <Title className="mb-4" order={2}>
        Campaign Description and Notes
      </Title>
      <div className="flex justify-between gap-2">
        <Textarea
          {...form.getInputProps('description')}
          placeholder="Campaign Description"
          label="Campaign Description"
          description="Give a description to your campaign. Specify what the campaign is about."
          size="md"
          autosize
          minRows={10}
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
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default CampaignDetails;
