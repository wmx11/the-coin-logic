import axios from 'axios';
import { Pair } from './types';

const API_ENDPOINT = 'https://api.dexscreener.com/latest/dex';

// https://docs.dexscreener.com/

export const getPairInformationByChainId = async (chainId: string, pairAddresses: string): Promise<Pair[] | null> => {
  try {
    const { data } = await axios(`${API_ENDPOINT}/pairs/${chainId}/${pairAddresses}`);

    if (!data) {
      return null;
    }

    return data.pairs;
  } catch (error) {
    return null;
  }
};

export const getTokenInformationByTokenAddress = async (tokenAddresses: string): Promise<Pair[] | null> => {
  try {
    const { data } = await axios(`${API_ENDPOINT}/tokens/${tokenAddresses}`);

    if (!data) {
      return null;
    }

    return data.pairs;
  } catch (error) {
    return null;
  }
};

export const getPairsMatchingQuery = async (query: string): Promise<Pair[] | null> => {
  try {
    const { data } = await axios(`${API_ENDPOINT}/search/?q=${query}`);

    if (!data) {
      return null;
    }

    return data.pairs;
  } catch (error) {
    return null;
  }
};
