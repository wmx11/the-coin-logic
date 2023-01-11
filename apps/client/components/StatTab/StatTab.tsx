import { Loader, Popover, Text, Tooltip } from '@mantine/core';
import Paper from 'components/Paper';
import { WithGetDataReturn } from 'data/getters';
import { FC, forwardRef, useEffect, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { HiChartSquareBar } from 'react-icons/hi';
import { MdCompare } from 'react-icons/md';
import useChartStore, { ChartData } from 'store/useChartStore';
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
  isChartDefaultOpen?: boolean;
  slug?: string;
  section?: '' | 'marketData' | 'holdersData' | 'socialMediaData';
  id?: string;
  projectId?: string;
  previousValue?: PreviousValueTypes;
};

const StatTab: FC<StatTabProps> = ({
  title,
  value,
  previousValue,
  isCurrency,
  tooltip,
  chartEntry,
  isChartDefaultOpen,
  section,
  id,
  projectId,
}) => {
  const [opened, setOpened] = useState(false);
  const chartStore = useChartStore((state) => state);

  const getChartEntryData = async (entry: string) => {
    const methods = await import('data/getters/charts');
    const data = await methods[entry as keyof typeof methods](projectId as string, id || (title as string));
    return data as WithGetDataReturn;
  };

  const handleChartEntry = async (entry: string) => {
    if (!isChartDefaultOpen) {
      chartStore.setIsInitial(false);
    }
    chartStore.setLoading(true);
    const data = await getChartEntryData(entry);
    chartStore.setLoading(false);
    chartStore.setChartSection(section as string);
    chartStore.setChartTitle(title as string);
    chartStore.setChartData(
      section === 'socialMediaData' ? (data.socialStats as ChartData[]) : (data.marketStats as ChartData[]),
    );
    chartStore.setNetwork(section === 'socialMediaData' ? '' : (data?.project?.network?.slug as string));
    chartStore.setPairAddress(section === 'socialMediaData' ? '' : (data?.project?.pairAddress as string));
  };

  const handleCompareChartEntry = async (entry: string) => {
    if (!isChartDefaultOpen) {
      chartStore.setIsInitial(false);
    }
    chartStore.setLoading(true);
    const data = await getChartEntryData(entry);
    chartStore.setLoading(false);
    chartStore.setCompareChartTitle(title as string);
    chartStore.setCompareChartData(
      section === 'socialMediaData' ? (data.socialStats as ChartData[]) : (data.marketStats as ChartData[]),
    );
  };

  useEffect(() => {
    if (isChartDefaultOpen && !chartStore.loading && chartStore.chartData.length < 1) {
      handleChartEntry(chartEntry as string);
      chartStore.setIsInitial(true);
    }
  }, []);

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

  const TooltipIcon = forwardRef<HTMLDivElement>((props, ref) => {
    return (
      <div {...props} ref={ref}>
        <FaInfoCircle onClick={() => setOpened((o) => !o)} className="text-violet" />
      </div>
    );
  });

  return (
    <Paper withBorder className="w-full min-h-[120px] md:w-[265px] text-center relative">
      <Text className="text-slate-500 font-semibold text-sm">{title}</Text>
      <Text weight={700} className="text-2xl mb-1">
        {getTabValue()}
      </Text>
      {previousValue && <Trend previousValue={previousValue} />}
      <div className="absolute bottom-1 left-0 right-0 px-2 flex justify-between items-center w-full">
        {tooltip && (
          <div className="cursor-pointer">
            <Popover
              opened={opened}
              onChange={() => setOpened((o) => !o)}
              width={150}
              withArrow
              position="bottom"
              shadow="md"
            >
              <Popover.Target>
                <TooltipIcon />
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
            {chartStore?.chartData?.length === 0 && chartStore?.loading ? (
              <Loader color="violet" size={15} />
            ) : (
              <Tooltip label={`View ${title} chart`} withArrow transition="pop" color="violet" multiline>
                <div>
                  <HiChartSquareBar className="text-violet" onClick={() => handleChartEntry(chartEntry)} size={20} />
                </div>
              </Tooltip>
            )}
            {chartStore?.chartData?.length > 0 && chartStore?.chartTitle !== title && (
              <Tooltip
                label={`Compare ${chartStore.chartTitle} with ${title} chart`}
                withArrow
                transition="pop"
                color="violet"
                multiline
              >
                <div>
                  <MdCompare className="text-violet" onClick={() => handleCompareChartEntry(chartEntry)} size={18} />
                </div>
              </Tooltip>
            )}
          </div>
        )}
      </div>
    </Paper>
  );
};

export default StatTab;
