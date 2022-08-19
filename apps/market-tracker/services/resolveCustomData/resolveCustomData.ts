import { getNetworkBySlug } from 'tcl-packages/graphql/queries';
import resolveBalanceOf from './resolveBalanceOf';
import resolveGetBalance from './resolveGetBalance';
import setCache from './setCache';
import { Cache, Context, CustomData, CustomDataResults } from './types';

const resolveCustomData = async (customData: CustomData[], context?: Context) => {
  if (!customData || !customData.length) {
    return [];
  }

  const cache: Map<string, Cache> = new Map();

  const results: CustomDataResults[] = [];

  for (const data of customData) {
    const network = await getNetworkBySlug({ slug: data.network });

    if (!network) {
      return [];
    }

    await setCache({ cache, data, network });

    const fromCache = cache.get(network.slug as string);

    const baseObject: CustomDataResults = {
      label: data.label,
      address: data.address,
      customDataAddress: data.arguments.balanceOf || data.arguments.getBalance || '',
      value: undefined,
      description: data.description,
      ticker: data.ticker,
    };

    const baseArgs = { cache: fromCache as Cache, base: baseObject, data, context, results };

    switch (data.method) {
      case 'getBalance':
        await resolveGetBalance(baseArgs);
        break;
      case 'balanceOf':
        await resolveBalanceOf(baseArgs);
        break;
      default:
        break;
    }
  }

  return results;
};

export default resolveCustomData;

const test: CustomData[] = [
  {
    label: 'Treasury',
    description: 'This is a treasury description',
    ticker: 'BNB',
    address: '0x4e3cABD3AD77420FF9031d19899594041C420aeE',
    network: 'bsc',
    method: 'getBalance',
    applyPairPrice: true,
    arguments: {
      getBalance: '0x6560eD767D6003D779F60BCCD2d7B168Cd4a1583',
    },
  },
  {
    label: 'RFV',
    description: 'This is a RFV description',
    ticker: 'BNB',
    address: '0x4e3cABD3AD77420FF9031d19899594041C420aeE',
    network: 'bsc',
    method: 'getBalance',
    applyPairPrice: true,
    arguments: {
      getBalance: '0x00dE99c90E8971D3E1c9cBA724381B537F6e88C1',
    },
  },
];
