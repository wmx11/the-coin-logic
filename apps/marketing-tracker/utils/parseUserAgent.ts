import uaParser from 'ua-parser-js';

const parseUserAgent = (userAgent: string) => {
  try {
    const result = uaParser(userAgent);

    if (!result) {
      return null;
    }

    return {
      userAgent,
      device: result.device.type || 'desktop',
      os: result.os.name,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default parseUserAgent;
