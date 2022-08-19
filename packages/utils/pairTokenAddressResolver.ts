import { Project } from '../types';

const pairTokenAddressResolver =
  (project: Project) =>
  (key: number): string | null => {
    const pair = project?.liquidityPair;

    if (!pair || !pair.length) {
      return null;
    }

    const pairTokens = pair[0].stablePair?.pairToken;

    if (!pairTokens || !pairTokens.length) {
      return null;
    }

    return pairTokens[key].address || null;
  };

export default pairTokenAddressResolver;
