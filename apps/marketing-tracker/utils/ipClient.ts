import dotenv from 'dotenv';
import { InMemoryCache, IpregistryClient } from '@ipregistry/client';
import { Request } from 'express';

dotenv.config();

const IP_REGISTRY_KEY = process.env.IP_REGISTRY_KEY || '';

const ipClient = new IpregistryClient(IP_REGISTRY_KEY, new InMemoryCache(16384, 3600 * 6 * 1000));

export const ipLookup = async (req: Request) => {
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
