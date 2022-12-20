import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';
const cache = new Map();

const request = async (query: string) => {
  try {
    const data = await axios.get(`${BASE_URL}/${query}`);

    if (!data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getTopCoins = async () => {
  const key = 'topCoins';

  const getData = () =>
    request('coins/markets?per_page=25&vs_currency=usd&price_change_percentage=true&sparkline=true');

  if (cache.has(key)) {
    return cache.get(key);
  }

  const data = await getData();

  cache.set(key, data);

  setTimeout(() => cache.delete(key), 5 * 60 * 1000);

  return data;
};
