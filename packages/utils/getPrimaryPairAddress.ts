import { Project } from 'tcl-packages/types';

const getPrimaryPairAddress = (project: Project) =>
  project?.liquidityPair?.filter((pair) => pair.isPrimary && pair.order === 1 && pair.address === project.pairAddress);

export default getPrimaryPairAddress;
