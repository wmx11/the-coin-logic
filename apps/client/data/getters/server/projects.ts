import axios from 'axios';
import routes from 'routes';

export const getTrendingProjects = async () => {
  const {
    data: { data },
  } = await axios.post(routes.api.data.trending);

  if (!data?.data) {
    return [];
  }

  return data?.data;
};

export const getProjectsForTable = async () => {
  const {
    data: { data },
  } = await axios.post(routes.api.data.table);
  if (!data) {
    return null;
  }

  return data?.data;
};

export const getUpcomingProjectsForTable = async (take?: number) => {
  const {
    data: { data },
  } = await axios.post(routes.api.data.upcoming, { take });
  if (!data) {
    return null;
  }

  return data?.data;
};

export const getNftProjectsForTable = async (take?: number) => {
  const {
    data: { data },
  } = await axios.post(routes.api.data.nft, { take });
  if (!data) {
    return null;
  }

  return data?.data;
};
