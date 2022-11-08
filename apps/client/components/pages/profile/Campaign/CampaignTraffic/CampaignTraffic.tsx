import { Paper, Title } from '@mantine/core';
import BarChart from 'components/Charts/BarChart';
import WorldHeatMap from 'components/Charts/WorldHeatMap';
import TitleWithIcon from 'components/TitleWithIcon';
import { FC, useEffect, useState } from 'react';
import { MarketingTrackerResult } from 'types';

type CampaignTrafficProps = {
  campaignResults: MarketingTrackerResult;
};

interface Count {
  _count: {
    _all: number;
  };
}

interface Devices extends Count {
  device: string;
  os: string;
}

interface Referrers extends Count {
  referer: string;
}

interface Countries extends Count {
  countryCode: string;
  country: string;
}

const CampaignTraffic: FC<CampaignTrafficProps> = ({ campaignResults }) => {
  if (!campaignResults) {
    return null;
  }

  const [devices, setDevices] = useState<Devices[]>();
  const [referrers, setReferrers] = useState<Referrers[]>();
  const [countries, setCountries] = useState<Countries[]>();

  const { countryResults, deviceResults, refererResults } = campaignResults;

  useEffect(() => {
    if (!devices) {
      setDevices(deviceResults);
    }
    if (!referrers) {
      setReferrers(refererResults);
    }
    if (!countries) {
      setCountries(countryResults);
    }
  }, [countryResults, deviceResults, refererResults]);

  return (
    <>
      <TitleWithIcon title="Traffic Sources" />
      <div className="flex gap-4 my-4 flex-wrap">
        <Paper p="md" shadow="sm" withBorder className="flex-1">
          <Title order={3}>Devices</Title>
          {devices && (
            <BarChart
              title="Devices by type and OS"
              subtitle="See the most popular devices by their type and OS"
              yTitle="Number of clicks"
              tooltip="{point.y} clicks"
              data={[
                {
                  name: 'Devices',
                  dataSorting: {
                    enabled: true,
                  },
                  data: devices.map((device) => [
                    `${device.device ? device.device : 'unknown'} (${device.os})`,
                    device._count._all,
                  ]),
                },
              ]}
            />
          )}
        </Paper>
        <Paper p="md" shadow="sm" withBorder className="flex-1">
          <Title order={3}>Referring Websites</Title>
          {referrers && (
            <BarChart
              title="Referring Websites"
              subtitle="See the most popular referring websites"
              yTitle="Number of clicks"
              tooltip="{point.y} clicks"
              data={[
                {
                  name: 'Websites',
                  dataSorting: {
                    enabled: true,
                  },
                  data: referrers.map((referer) => [referer.referer, referer._count._all]),
                },
              ]}
            />
          )}
        </Paper>
      </div>
      {countries && (
        <WorldHeatMap
          title="Countries by number of clicks"
          subtitle="Campaign's click distribution by the number of clicks"
          tooltip="{point.country}: {point.z} Clicks"
          data={countries.map((item) => ({
            code: item.countryCode,
            z: item._count._all,
            country: item.country,
          }))}
        />
      )}
    </>
  );
};

export default CampaignTraffic;
