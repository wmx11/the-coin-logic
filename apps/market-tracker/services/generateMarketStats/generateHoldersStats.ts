import { getHoldersDataByProjectId } from 'tcl-packages/graphql/queries';
import {
  getAverageHoldingsByProjectId,
  getHoldersCountByProjectIdFrom,
  getLeavingHoldersCountByProjectId,
  getNewHoldersCountByProjectId,
  getRecurringHoldersCountByProjectId,
} from 'tcl-packages/holders-tracker/services/holders';
import { Project } from 'tcl-packages/types';
import { HoldersStats } from './types';

const generateHoldersStats = async (project: Project): Promise<HoldersStats> => {
  const prevHoldersData = await getHoldersDataByProjectId({ id: project.id });
  const holders = await getHoldersCountByProjectIdFrom(project.id, project.trackHoldersFromTokenAmount || 0);
  const avgHoldings = await getAverageHoldingsByProjectId(project.id);
  const newHolders = await getNewHoldersCountByProjectId(project.id, project.trackHoldersFromTokenAmount as number);
  const leavingHolders = await getLeavingHoldersCountByProjectId(
    project.id,
    project.trackHoldersFromTokenAmount as number,
  );
  const recurringHolders = await getRecurringHoldersCountByProjectId(
    project.id,
    project.trackHoldersFromTokenAmount as number,
  );

  return {
    holders: holders ? holders : prevHoldersData?.holders || 0,
    avgHoldings: avgHoldings ? avgHoldings : prevHoldersData?.avgHoldings || 0,
    newHolders: newHolders ? newHolders : 0,
    recurringHolders: recurringHolders ? recurringHolders : 0,
    leavingHolders: leavingHolders ? leavingHolders : 0,
  };
};

export default generateHoldersStats;
