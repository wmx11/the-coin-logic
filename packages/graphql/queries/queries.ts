import {
  GET_ENABLED_AND_NOT_INITIALIZED_PROJECTS_FOR_HOLDERS_TRACKING,
  GET_HOLDERS_DATA_BY_PROJECT_ID,
  GET_ENABLED_PROJECTS,
  GET_ENABLED_PROJECTS_FOR_HOLDERS_TRACKING,
  GET_NETWORK_BY_SLUG,
} from './constants';

import type { MarketStat, Network, Project } from '../../types';
import request from '../request';

export const getEnabledProjects = async (): Promise<Project[] | null> => {
  try {
    const { projects } = await request(GET_ENABLED_PROJECTS);
    return projects || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getHoldersDataByProjectId = async (id: { id: string }): Promise<MarketStat | null> => {
  try {
    const { marketStats } = await request(GET_HOLDERS_DATA_BY_PROJECT_ID, id);
    return marketStats[0] || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getEnabledProjectsForHoldersTracking = async (): Promise<Project[] | null> => {
  try {
    const { projects } = await request(GET_ENABLED_PROJECTS_FOR_HOLDERS_TRACKING);
    return projects || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getEnabledAndNotInitializedProjectsForHoldersTracking = async (): Promise<Project[] | null> => {
  try {
    const { projects } = await request(GET_ENABLED_AND_NOT_INITIALIZED_PROJECTS_FOR_HOLDERS_TRACKING);
    return projects || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getNetworkBySlug = async (slug: { slug: string }): Promise<Network | null> => {
  try {
    const { networks } = await request(GET_NETWORK_BY_SLUG, slug);
    return networks[0] || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
