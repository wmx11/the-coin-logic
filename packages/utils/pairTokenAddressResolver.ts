import { Project } from '../types';

const pairTokenAddressResolver =
  (project: Project) =>
  (key: number): string => {
    const pair = project?.liquidityPair;

    if (!pair || !pair.length) {
      return '';
    }

    const pairTokens = pair[0].stablePair?.pairToken;

    if (!pairTokens || !pairTokens.length) {
      return '';
    }

    return pairTokens[key].address || '';
  };

export default pairTokenAddressResolver;
