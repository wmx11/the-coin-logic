import { GET_ENABLED_PROJECTS, GET_ENABLED_PROJECTS_FOR_HOLDERS_TRACKING } from './constants';
import request from '../request';
import type { Project } from '../../types';

export const getEnabledProjects = async (): Promise<Project[] | null> => {
  const { projects } = await request(GET_ENABLED_PROJECTS);
  return projects || null;
};

export const getEnabledProjectsForHoldersTracking = async (): Promise<Project[] | null> => {
  const { projects } = await request(GET_ENABLED_PROJECTS_FOR_HOLDERS_TRACKING);
  return projects || null;
};
