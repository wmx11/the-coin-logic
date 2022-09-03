import { DocumentNode, gql, FetchPolicy } from '@apollo/client';
import client from '../apollo-client';

export const getData = async <T>(query: string, variables?: T, fetchPolicy?: FetchPolicy) => {
  const { data } = await client.query({
    query: gql(query) as DocumentNode,
    variables,
    fetchPolicy: fetchPolicy || 'cache-first',
  });

  return data || null;
};
