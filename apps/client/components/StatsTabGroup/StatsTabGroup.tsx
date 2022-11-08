import { Text } from '@mantine/core';
import GrayBox from 'components/GrayBox';
import TitleWithIcon from 'components/TitleWithIcon';
import { FC } from 'react';
import { StatsData } from 'types/MarketData';
import StatTab from '../StatTab';
import { StatsTabGroupProps, SubGroup } from './types';

const StatsTabGroup: FC<StatsTabGroupProps> = ({ Icon, title, subtitle, untrackedMessage, data, slug, section }) => {
  const StatTabsComponent = () => {
    if (!data || !data.length) {
      return (
        <GrayBox className="my-4 flex-col">
          <Text weight={700} className="text-3xl text-slate-500">
            {untrackedMessage}
          </Text>
          <Text className="text-sm text-slate-500">
            We currently have no data available for the following stats. If you think this is a mistake, please contact
            us.
          </Text>
        </GrayBox>
      );
    }

    const Stats = ({ data }: StatsTabGroupProps) => {
      return (
        <div>
          <div className="flex items-stretch justify-center md:justify-start flex-wrap gap-4">
            {data &&
              data.map(({ value, title, previousValue, isCurrency, tooltip, chartEntry, id }, index: number) => {
                return (
                  <StatTab
                    key={`${title}_${index}_${subtitle}`}
                    title={title}
                    value={value}
                    previousValue={previousValue}
                    isCurrency={isCurrency}
                    tooltip={tooltip}
                    chartEntry={chartEntry}
                    slug={slug}
                    section={section}
                    id={id}
                  />
                );
              })}
          </div>
        </div>
      );
    };

    const subGroups = data && data.filter((item) => item.subGroup);

    if (subGroups && subGroups.length) {
      return (
        <>
          {subGroups.map((subGroupData: StatsData, index: number) => {
            const { title, Icon, data } = subGroupData.subGroup as SubGroup;

            return (
              <div key={`subGroup_${index}`} className="mb-8">
                <div className="flex gap-2 items-center mb-4">
                  {Icon && <Icon className="text-xl" />}
                  <Text weight={700} size="xl">
                    {title}
                  </Text>
                </div>
                <Stats data={data} />
              </div>
            );
          })}
        </>
      );
    }

    return <Stats data={data} />;
  };

  return (
    <>
      <TitleWithIcon title={title} Icon={Icon} subtitle={subtitle} />
      <StatTabsComponent />
    </>
  );
};

export default StatsTabGroup;
