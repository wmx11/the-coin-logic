import { ApolloClient, InMemoryCache } from '@apollo/client';

export const initializeApollo = () =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

const client = initializeApollo();

export default client;
