import { Project } from '../types';
import getPrimaryPairAddress from './getPrimaryPairAddress';

const pairTokenAddressResolver =
  (project: Project) =>
  (key: number): string | null => {
    const pair = getPrimaryPairAddress(project);

    if (!pair || !pair.length) {
      return null;
    }

    const pairTokens = pair[0].stablePair?.pairToken;

    if (!pairTokens || !pairTokens.length) {
      return null;
    }

    pairTokens.sort((a, b) => a.order - b.order);

    return pairTokens[key].address || null;
  };

export default pairTokenAddressResolver;
