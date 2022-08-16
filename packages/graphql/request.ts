import axios from 'axios';

const request = async <T>(query: string, variables?: T) => {
  try {
    const data = await axios({
      // url: 'http://localhost:3500/api/graphql',
      url: process.env.GRAPHQL_ENDPOINT,
      method: 'POST',
      data: {
        query,
        variables,
      },
    });

    if (data) {
      return data?.data?.data;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default request;
