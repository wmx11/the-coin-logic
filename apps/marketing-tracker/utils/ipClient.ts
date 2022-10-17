import { IpregistryClient } from '@ipregistry/client';

const ipClient = new IpregistryClient('z647m7389zw0sd3e');

export const ipLookup = async (req) => {
  try {
    const { data } = await ipClient.lookup(req.ip);
    const referer = req.headers.referer;

    if (!data) {
      return null;
    }

    return {
      data: {
        referer,
        ipAddress: data.ip,
        timezone: data.time_zone.id,
        city: data.location.city,
        country: data.location.country.name,
        countryCode: data.location.country.code,
      },
      security: data.security,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
