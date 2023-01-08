import { SignJWT, jwtVerify, type JWTPayload } from 'jose';

export const tokens = {
  sign: async <T>(payload: T, secret: string): Promise<string> => {
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60 * 60; // one hour

    return new SignJWT({ ...(payload as unknown as JWTPayload) })
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .setExpirationTime(exp)
      .setIssuedAt(iat)
      .setNotBefore(iat)
      .sign(new TextEncoder().encode(secret));
  },
  verify: async <T>(token: string, secret: string): Promise<T> => {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    return payload as unknown as T;
  },
};
