import dotenv from 'dotenv';
import axios from 'axios';
import { Project } from 'tcl-packages/types';
import { cache, setCache } from '../../cache';

dotenv.config();

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN || '';

const request = async (username: string) => {
  if (!username) {
    return null;
  }

  if (cache.has(username)) {
    return cache.get(username).members;
  }

  const url = `https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics`;

  try {
    const { data } = await axios({
      url,
      headers: {
        Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
      },
    });

    if (!data) {
      return null;
    }

    const { public_metrics } = data.data;

    setCache(username, {
      members: public_metrics.followers_count,
    });

    return public_metrics.followers_count;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getTwitterFollowersCount = async (project: Project): Promise<number | null> => {
  if (!project.twitter) {
    return null;
  }

  const username = project.twitter.split('/').pop();

  if (!username) {
    return null;
  }

  const followersCount = await request(username);
  return followersCount;
};

export default getTwitterFollowersCount;
