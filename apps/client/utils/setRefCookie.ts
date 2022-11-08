import { REF_COOKIE_NAME } from 'constants/general';
import { ServerResponse } from 'http';

type SetRefCookie = {
  query: {
    ref?: string;
  };
  res: ServerResponse;
};

// Max age of the cookie
const DAYS = 15;

const setRefCookie = ({ query, res }: SetRefCookie) => {
  if (!query || !query.ref) {
    return null;
  }

  const maxAge = DAYS * 24 * 60 * 60;

  res.setHeader('set-cookie', `${REF_COOKIE_NAME}=${query.ref}; max-age=${maxAge}; path=/;`);
};

export default setRefCookie;
