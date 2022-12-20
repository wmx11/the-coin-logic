import { FC } from 'react';
import { BsBarChartLineFill } from 'react-icons/bs';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { formateDateWithHours } from '../../../utils/formatters';
import { StatsTabGroup } from '../../../components/StatsTabGroup';
import { getData } from './getData';

type MarketDataTypes = { data: ProjectWithMarketStatsAndChanges };

const MarketData: FC<MarketDataTypes> = ({ data }) => {
  const { dateAdded } = data;
  const { slug, id } = data.project;

  const marketData = getData(data);

  return (
    <>
      <StatsTabGroup
        title="Market Data"
        section="marketData"
        untrackedMessage="Market Data is untracked."
        Icon={BsBarChartLineFill}
        subtitle={`Last updated ${formateDateWithHours(dateAdded as string)}`}
        data={marketData}
        slug={slug as string}
        projectId={id}
      />
    </>
  );
};

export default MarketData;
