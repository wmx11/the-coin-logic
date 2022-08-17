import { GET_ENABLED_AND_NOT_INITIALIZED_PROJECTS_FOR_HOLDERS_TRACKING, GET_ENABLED_PROJECTS, GET_ENABLED_PROJECTS_FOR_HOLDERS_TRACKING } from './constants';

import type { Project } from '../../types';
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
