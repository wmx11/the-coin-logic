import dotenv from 'dotenv';
import root from 'find-yarn-workspace-root';
import axios from 'axios';

dotenv.config({ path: `${root()}/.env` });

const request = async <T>(query: string, variables?: T) => {
  try {
    const data = await axios({
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
