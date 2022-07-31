import { Divider, Text, Title } from '@mantine/core';
import React, { FC } from 'react';
import { IconType } from 'react-icons';
import StatTab from '../StatTab/StatTab';

type StatsData = {
  title?: string;
  value?: number;
  previousValue?: number;
  isCurrency?: boolean;
  subGroup?: SubGroupData;
};

type SubGroupData = {
  title?: string;
  Icon?: IconType;
  data?: StatsData[];
};

interface StatsTabGroupProps {
  Icon?: IconType;
  title?: string;
  subtitle?: string;
  data?: StatsData[];
}

const StatsTabGroup: FC<StatsTabGroupProps> = ({ Icon, title, subtitle, data }) => {
  const StatTabsComponent = () => {
    const Stats = ({ data }: StatsTabGroupProps) => {
      return (
        <div>
          <div className="flex items-stretch flex-wrap gap-4">
            {data &&
              data.map(({ value, title, previousValue, isCurrency }, index: number) => {
                return (
                  <StatTab
                    key={`${title}_${index}`}
                    title={title}
                    value={value}
                    previousValue={previousValue}
                    isCurrency={isCurrency}
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
            const { title, Icon, data } = subGroupData.subGroup as SubGroupData;

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
          <Title order={2} className=" text-lightBlue">
            {title}
          </Title>
        </div>
      )}

      {subtitle && (
        <Text className="text-slate-500 mb-4" size="sm">
          {subtitle}
        </Text>
      )}

      <Divider my="sm" />

      <StatTabsComponent />
    </>
  );
};

export default StatsTabGroup;
