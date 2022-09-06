import { Center, Divider, Text, Title } from '@mantine/core';
import React, { FC } from 'react';
import { StatsData } from 'types/MarketData';
import StatTab from '../StatTab';
import { StatsTabGroupProps, SubGroup } from './types';

const StatsTabGroup: FC<StatsTabGroupProps> = ({ Icon, title, subtitle, untrackedMessage, data }) => {
  const StatTabsComponent = () => {
    if (!data || !data.length) {
      return (
        <Center className="my-16 flex-col">
          <Text weight={700} className="text-3xl text-slate-500">
            {untrackedMessage}
          </Text>
          <Text className="text-sm text-slate-500">
            We currently have no data available for the following stats. If you think this is a mistake, please contact
            us.
          </Text>
        </Center>
      );
    }

    const Stats = ({ data }: StatsTabGroupProps) => {
      return (
        <div>
          <div className="flex items-stretch justify-center md:justify-start flex-wrap gap-4">
            {data &&
              data.map(({ value, title, previousValue, isCurrency, tooltip }, index: number) => {
                return (
                  <StatTab
                    key={`${title}_${index}`}
                    title={title}
                    value={value}
                    previousValue={previousValue}
                    isCurrency={isCurrency}
                    tooltip={tooltip}
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
      {title && (
        <div className={`flex gap-2 items-center ${!subtitle && 'mb-4'}`}>
          {Icon && <Icon className="text-xl" />}
          <Title order={2}>{title}</Title>
        </div>
      )}

      {subtitle && (
        <Text className="text-slate-500 mb-4 font-semibold" size="xs">
          {subtitle}
        </Text>
      )}

      <Divider my="sm" />
      <StatTabsComponent />
    </>
  );
};

export default StatsTabGroup;
