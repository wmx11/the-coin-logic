import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { SESSION_TOKEN } from 'constants/general';

const getToken = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem(SESSION_TOKEN) as string || '');
  }
  return null;
};

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const initializeApollo = () =>
  new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

const client = initializeApollo();

export default client;
