import { Loader, Paper, Popover, Text, Tooltip } from '@mantine/core';
import { FC, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { HiChartSquareBar } from 'react-icons/hi';
import { MdCompare } from 'react-icons/md';
import useChartStore from 'store/useChartStore';
import { PreviousValueTypes } from '../../types/MarketData';
import toCurrency from '../../utils/toCurrency';
import toLocaleString from '../../utils/toLocaleString';
import { Trend } from '../Trend';

type StatTabProps = {
  title?: string;
  value?: number | number[];
  isCurrency?: boolean;
  tooltip?: string;
  chartEntry?: string;
  slug?: string;
  section?: '' | 'marketData' | 'holdersData' | 'socialMediaData';
  id?: string;
  previousValue?: PreviousValueTypes;
};

const StatTab: FC<StatTabProps> = ({
  title,
  value,
  previousValue,
  isCurrency,
  tooltip,
  chartEntry,
  slug,
  section,
  id,
}) => {
  const [opened, setOpened] = useState(false);
  const chartStore = useChartStore((state) => state);

  const getChartEntryData = async (entry: string) => {
    const methods = await import('data/getters/charts');
    const data = await methods[entry as keyof typeof methods](slug as string, id || (title as string));
    return data;
  };

  const handleChartEntry = async (entry: string) => {
    chartStore.setLoading(true);
    const data = await getChartEntryData(entry);
    chartStore.setLoading(false);
    chartStore.setChartSection(section as string);
    chartStore.setChartTitle(title as string);
    chartStore.setChartData(data.marketStats);
    chartStore.setNetwork(data.project.network.slug);
    chartStore.setPairAddress(data.project.pairAddress);
  };

  const handleCompareChartEntry = async (entry: string) => {
    chartStore.setLoading(true);
    const data = await getChartEntryData(entry);
    chartStore.setLoading(false);
    chartStore.setCompareChartTitle(title as string);
    chartStore.setCompareChartData(data.marketStats);
  };

  const getTabValue = () => {
    if (Array.isArray(value)) {
      return value.map((item, index) => {
        const color = index > 0 && item > value[0] ? 'text-green-500' : 'text-red-500';
        return (
          <div className={index === 0 ? 'text-violet' : color}>
            {isCurrency ? toCurrency(item) : toLocaleString(item)}
          </div>
        );
      });
    }

    return isCurrency ? toCurrency(value) : toLocaleString(value);
  };

  return (
    <Paper
      p="md"
      shadow="sm"
      withBorder
      className="w-full min-h-[120px] md:w-[265px] text-center relative hover:shadow-lg transition-shadow"
    >
      <Text className="text-slate-500 font-semibold text-sm">{title}</Text>
      <Text weight={700} className="text-2xl mb-1">
        {getTabValue()}
      </Text>
      {previousValue && <Trend previousValue={previousValue} />}
      <div className="absolute bottom-1 left-0 right-0 px-2 flex justify-between items-center w-full">
        {tooltip && (
          <div className="cursor-pointer">
            <Popover opened={opened} onClose={() => setOpened(false)} width={150} withArrow position="top" shadow="md">
              <Popover.Target>
                <FaInfoCircle onClick={() => setOpened(true)} className="text-violet" />
              </Popover.Target>
              <Popover.Dropdown>
                <Text size="sm" pt="xs">
                  {tooltip}
                </Text>
              </Popover.Dropdown>
            </Popover>
          </div>
        )}

        {chartEntry && (
          <div className="cursor-pointer flex gap-4 md:gap-2 items-center">
            {chartStore.chartData.length === 0 && chartStore.loading ? (
              <Loader color="violet" size={15} />
            ) : (
                null
              // <Tooltip label={`View ${title} chart`} withArrow transition="pop" color="violet" multiline>
              //   <div>
              //     <HiChartSquareBar className="text-violet" onClick={() => handleChartEntry(chartEntry)} size={20} />
              //   </div>
              // </Tooltip>
            )}
            {chartStore.chartData.length > 0 && chartStore.chartTitle !== title && (
              null
              // <Tooltip
              //   label={`Compare ${chartStore.chartTitle} with ${title} chart`}
              //   withArrow
              //   transition="pop"
              //   color="violet"
              //   multiline
              // >
              //   <div>
              //     <MdCompare className="text-violet" onClick={() => handleCompareChartEntry(chartEntry)} size={18} />
              //   </div>
              // </Tooltip>
            )}
          </div>
        )}
      </div>
    </Paper>
  );
};

export default StatTab;
