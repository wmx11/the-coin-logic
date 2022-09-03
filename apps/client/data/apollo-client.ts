import { ApolloClient } from '@apollo/client';
import { InvalidationPolicyCache } from '@nerdwallet/apollo-cache-policies';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InvalidationPolicyCache({
    invalidationPolicies: {
      timeToLive: 1000 * 60 * 5,
    },
  }),
  defaultOptions: {
    watchQuery: {
      nextFetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
