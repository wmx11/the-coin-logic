import { DocumentNode, gql } from '@apollo/client';
import client from '../apollo-client';
import { formatISO, setHours } from 'date-fns';
import getChangesPartial from '../../utils/getChangesPartial';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import {
  GET_ENABLED_AND_LISTED_PROJECTS_ID_AND_SLUG,
  GET_MARKET_STATS_BY_PROJECT_ID_FOR_HOMEPAGE,
  GET_PREVIOUS_DAY_MARKET_STATS,
  GET_PROJECTS_COUNT,
  GET_PROJECTS_LIST,
} from './constatnts/project';

export const getData = async <T>(query: string, variables?: T) => {
  const { data } = await client.query({
    query: gql(query) as DocumentNode,
    variables,
  });

  return data || null;
};
