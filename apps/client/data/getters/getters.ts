import { DocumentNode, FetchPolicy, gql } from '@apollo/client';
import { default as apolloClient } from '../apollo-client';

type GetDataTypes<T> = {
  query: string;
  variables?: T;
  fetchPolicy?: FetchPolicy;
};

export const getData = async <T>({ query, variables, fetchPolicy }: GetDataTypes<T>) => {
  const { data } = await apolloClient.query({
    query: gql(query) as DocumentNode,
    variables,
    fetchPolicy: fetchPolicy || 'cache-first',
  });
  return data || null;
};
