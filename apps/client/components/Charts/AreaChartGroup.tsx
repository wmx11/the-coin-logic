import { Button, Divider, LoadingOverlay, Tooltip } from '@mantine/core';
import { useState } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import useChartStore from 'store/useChartStore';
import AreaChart from './AreaChart';
import Paper from 'components/Paper';

const AreaChartGroup = () => {
  const [showDexscreener, setShowDexscreener] = useState(false);

  const {
    chartData,
    compareChartData,
    chartTitle,
    compareChartTitle,
    loading,
    clearChartData,
    clearCompareChartData,
    clearAll,
    pairAddress,
    network,
  } = useChartStore((state) => state);

  const Loader = () => {
    if (loading) {
      setShowDexscreener(false);
      return <LoadingOverlay visible={loading} overlayOpacity={0.5} loaderProps={{ color: 'violet' }} />;
    }
    return null;
  };

  const CloseChart = ({ onClick }: { onClick: () => void }) => {
    return (
      <div className="flex flex-1 gap-4 justify-end cursor-pointer text-violet items-center">
        <Tooltip label="Close this chart" withArrow transition="pop" color="violet" multiline={true}>
          <IoClose size={25} onClick={onClick} />
        </Tooltip>
        <Tooltip label="Close all charts" withArrow transition="pop" color="violet" multiline={true}>
          <AiOutlineClear size={20} onClick={clearAll} />
        </Tooltip>
      </div>
    );
  };

  const ShowDexScreener = () => {
    if (chartTitle.toLowerCase() !== 'price') {
      return null;
    }

    return (
      <div className="flex gap-4 flex-wrap">
        <Tooltip label="View TCL price chart" withArrow transition="pop" color="violet" multiline={true}>
          <Button variant="outline" color="violet" size="xs" onClick={() => setShowDexscreener(false)}>
            Show {chartTitle}
          </Button>
        </Tooltip>
        <Tooltip label="View Dex Screener live price chart" withArrow transition="pop" color="violet" multiline={true}>
          <Button variant="outline" color="violet" size="xs" onClick={() => setShowDexscreener(true)}>
            Show Dex Screener
          </Button>
        </Tooltip>
      </div>
    );
  };

  const MainChart = () => {
    if (chartData?.length === 0) {
      return null;
    }

    return (
      <>
        <div className="flex gap-4 justify-between cursor-pointer text-violet items-center">
          <ShowDexScreener />
          <CloseChart onClick={clearChartData} />
        </div>

        {showDexscreener ? (
          <div id="dexscreener-embed" className="my-4">
            <iframe src={`https://dexscreener.com/${network}/${pairAddress}?embed=1`}></iframe>
          </div>
        ) : (
          <AreaChart data={chartData} title={chartTitle} />
        )}
      </>
    );
  };

  const ComparisonChart = () => {
    if (compareChartData?.length === 0) {
      return null;
    }

    return (
      <>
        {compareChartTitle && chartTitle && (
          <Divider
            my="xl"
            label={`Comparing ${chartTitle} with ${compareChartTitle}`}
            labelPosition="center"
            color="violet"
          />
        )}
        <CloseChart onClick={clearCompareChartData} />
        <AreaChart data={compareChartData} title={compareChartTitle} />
      </>
    );
  };

  return (
    <Paper className="relative">
      <Loader />
      <MainChart />
      <ComparisonChart />
    </Paper>
  );
};

export default AreaChartGroup;
