import { Divider, Paper, Text } from '@mantine/core';
import { ClipboardButton } from 'components/ClipboardButton';
import React, { FC } from 'react';
import routes from 'routes';
import { MarketingCampaign } from 'types';
import config from './config';

type CampaignUniqueLinksProps = {
  campaign: MarketingCampaign;
};

const CampaignUniqueLinks: FC<CampaignUniqueLinksProps> = ({ campaign }) => {
  const { campaignId, project } = campaign;

  const UniqueLink = ({ target }: { target: string }) => {
    const uniqueLink = routes.marketingTrackerExternalLink
      .replace('${target}', target)
      .replace('${campaignId}', campaignId as string);

    return (
      <div className="flex items-center">
        <a className="hover:text-violet transition-colors text-sm" href={uniqueLink} target="__blank">
          {uniqueLink}
        </a>
        <ClipboardButton copy={uniqueLink} />
      </div>
    );
  };

  const getTargets = () => {
    const targets: string[] = [];
    const possibleTargets = config.links;
    const currentProject: { [key: string]: any } = project!;

    possibleTargets.forEach((target: string) => {
      if (!currentProject) {
        return;
      }

      if (currentProject[target] || target === 'exchange') {
        targets.push(target);
      }
    });

    return targets;
  };

  return (
    <Paper p="md" shadow="sm" withBorder className="mb-4">
      <Text size="lg" weight={600}>
        My unique tracking links
      </Text>
      <Text size="sm">
        Please use these unique links when running the campaign. Ask promoters, community, marketers to use these links
        in order to track clicks and traffic going to these websites. This way we can calculate how well the marketing
        campaign is performing.
      </Text>

      <Divider my="md" />

      <div>
        {getTargets().map((target, index) => (
          <div className="flex items-center gap-2 my-2">
            <Text size="xs" color="dimmed">
              {index + 1}.
            </Text>
            <UniqueLink target={target} />
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default CampaignUniqueLinks;
