import { GET_PROVIDERS, GET_PROVIDER_BY_ID_FOR_USER, GET_PROVIDER_BY_SLUG } from './constatnts/providers';
import { getData } from './getters';

export const getProviders = async () => {
  const { providers } = await getData({
    query: GET_PROVIDERS,
    fetchPolicy: 'network-only',
  });
  return providers || null;
};

export const getProviderBySlug = async (slug: string) => {
  const { providers } = await getData({
    query: GET_PROVIDER_BY_SLUG,
    variables: { slug },
    fetchPolicy: 'network-only',
  });
  return providers[0] || null;
};

export const getProviderByIdForUser = async (id: string) => {
  const { provider } = await getData({
    query: GET_PROVIDER_BY_ID_FOR_USER,
    variables: { id },
    fetchPolicy: 'network-only',
  });
  return provider || null;
};
