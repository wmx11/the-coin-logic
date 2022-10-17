import { Paper, Title } from '@mantine/core';
import BarChart from 'components/Charts/BarChart';
import WorldMapBubbleChart from 'components/Charts/WorldMapBubbleChart';
import { StatsTabGroup } from 'components/StatsTabGroup';
import TitleWithIcon from 'components/TitleWithIcon';
import React, { FC } from 'react';
import { MarketingTrackerResult } from 'types';

type CampaignTrafficProps = {
  campaignResults: MarketingTrackerResult;
};

const CampaignTraffic: FC<CampaignTrafficProps> = ({ campaignResults }) => {
  if (!campaignResults || !campaignResults.countryResults || !campaignResults.deviceResults) {
    return null;
  }

  const { countryResults, deviceResults, refererResults } = campaignResults;

  if (deviceResults && refererResults) {
    deviceResults.sort((a, b) => b._count._all - a._count._all);
    refererResults.sort((a, b) => b._count._all - a._count._all);
  }  

  return (
    <>
      <TitleWithIcon title="Traffic Sources" />
      <div className="flex gap-4 my-4 flex-wrap">
        <Paper p="md" shadow="sm" withBorder className="flex-1">
          <Title order={3}>Devices</Title>
          <BarChart
            title="Devices by type and OS"
            subtitle="See the most popular devices by their type and OS"
            yTitle="Number of clicks"
            tooltip="{point.y} clicks"
            data={{
              name: 'Devices',
              data: deviceResults.map((device) => [
                `${device.device ? device.device : 'unknown'} (${device.os})`,
                device._count._all,
              ]),
            }}
          />
        </Paper>
        <Paper p="md" shadow="sm" withBorder className="flex-1">
          <Title order={3}>Referring Websites</Title>
          <BarChart
            title="Referring Websites"
            subtitle="See the most popular referring websites"
            yTitle="Number of clicks"
            tooltip="{point.y} clicks"
            data={{
              name: 'Devices',
              data: refererResults.map((referer) => [referer.referer, referer._count._all]),
            }}
          />
        </Paper>
      </div>
      <WorldMapBubbleChart
        data={countryResults.map((item) => ({
          code: item.countryCode,
          z: item._count._all,
          country: item.country,
        }))}
      />
    </>
  );
};

export default CampaignTraffic;
