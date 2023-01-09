import axios from 'axios';
import jwt from 'jsonwebtoken';

type SignedRequest<T> = {
  data: Object | T[];
  url: string;
  type: 'get' | 'post' | 'delete' | 'put';
  headers?: Record<string, string>;
};

export const signedRequest = <T>(
  { type, data, url, headers }: SignedRequest<T>,
  userId: string,
  additionalData?: T,
) => {
  const secret = process.env.NEXT_PUBLIC_SIGNED_SECRET || '';

  if (!secret) {
    throw new Error('SIGNED_SECRET env. is not set');
  }

  const authToken = userId ? jwt.sign({ id: userId, ...additionalData }, secret) : '';

  return axios({
    url,
    method: type,
    data: data,
    headers: { Authorization: `Bearer ${authToken}`, ...headers },
    maxBodyLength: 209715200,
    maxContentLength: 209715200
  });
};
