import { MarketingCampaign } from 'types';
import { StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import getChangesPartial from 'utils/getChangesPartial';
import { cloneDeep } from 'lodash';

type GetDataProps = {
  campaign: MarketingCampaign;
  projectData: ProjectWithMarketStatsAndChanges;
};

const getData = ({ campaign, projectData }: GetDataProps): StatsData[] => {
  if (!campaign || !projectData) {
    return [];
  }

  const cloneProjectData = cloneDeep(projectData);

  Object.assign(cloneProjectData, { volume: cloneProjectData.volume['h24'] });

  const { priceGoal, marketCapGoal, volumeGoal, holdersGoal, twitterGoal, discordGoal, telegramGoal } = campaign;

  const mapping = {
    price: priceGoal,
    marketCap: marketCapGoal,
    volume: volumeGoal,
    holders: holdersGoal,
    twitter: twitterGoal,
    discord: discordGoal,
    telegram: telegramGoal,
  };

  const getChanges = getChangesPartial(cloneProjectData, mapping);

  const results = [
    {
      title: 'Buys in last 24 hours',
      value: cloneProjectData.txns.h24.buys,
      isCurrency: false,
      previousValue: getChanges('default').defaultChange,
    },
    {
      title: 'Sells in last 24 hours',
      value: cloneProjectData.txns.h24.sells,
      isCurrency: false,
      previousValue: getChanges('default').defaultChange,
    },
  ];

  if (mapping.price) {
    results.push(
      {
        title: 'Price',
        value: [priceGoal as number, projectData.price as number],
        isCurrency: true,
        previousValue: getChanges('price').priceChange,
      },
      {
        title: 'Cost per Price Tick',
        value: (campaign?.budget || 1) / getChanges('price').priceChange.percentage,
        isCurrency: true,
        previousValue: getChanges('default').defaultChange,
      },
    );
  }

  if (mapping.marketCap) {
    results.push(
      {
        title: 'Market Cap',
        value: [marketCapGoal as number, projectData.marketCap as number],
        isCurrency: true,
        previousValue: getChanges('marketCap').marketCapChange,
      },
      {
        title: 'Cost per Market Cap Tick',
        value: (campaign?.budget || 1) / getChanges('marketCap').marketCapChange.percentage,
        isCurrency: true,
        previousValue: getChanges('default').defaultChange,
      },
    );
  }

  if (mapping.volume) {
    results.push(
      {
        title: 'Volume',
        value: [volumeGoal as number, cloneProjectData.volume as number],
        isCurrency: true,
        previousValue: getChanges('volume').volumeChange,
      },
      {
        title: 'Cost per Volume Tick',
        value: (campaign?.budget || 1) / getChanges('volume').volumeChange.percentage,
        isCurrency: true,
        previousValue: getChanges('default').defaultChange,
      },
    );
  }

  if (mapping.holders) {
    results.push(
      {
        title: 'Holders',
        value: [holdersGoal as number, projectData.holders as number],
        isCurrency: false,
        previousValue: getChanges('holders').holdersChange,
      },
      {
        title: 'Cost per Holder',
        value: (campaign?.budget || 1) / getChanges('holders').holdersChange.change,
        isCurrency: true,
        previousValue: getChanges('default').defaultChange,
      },
    );
  }

  return results;
};

export default getData;
