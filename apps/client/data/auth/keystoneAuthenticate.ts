import client from 'data/apollo-client';
import { AUTHENTICATE_USER, CREATE_USER } from 'data/mutations';
import { DocumentNode } from 'graphql';

type KeystoneAuthenticateProps = {
  email: string;
  password: string;
};

export const keystoneAuthenticate = async ({ email, password }: KeystoneAuthenticateProps) => {
  const {
    data: { authenticateUserWithPassword },
  } = await client.mutate({
    mutation: AUTHENTICATE_USER as DocumentNode,
    variables: {
      email,
      password,
    },
  });

  const { item: user, sessionToken } = authenticateUserWithPassword;

  return { user, sessionToken };
};

type KeystoneCreateUserProps = {
  name: string;
  email: string;
  password: string;
  referrer: string;
  isSubscribedToEmail: boolean;
  ip: string;
};

export const keystoneCreateUser = async ({
  name,
  email,
  password,
  referrer,
  isSubscribedToEmail,
  ip,
}: KeystoneCreateUserProps) => {
  const {
    data: { createUser },
  } = await client.mutate({
    mutation: CREATE_USER as DocumentNode,
    variables: {
      name,
      email,
      password,
      referrer,
      isSubscribedToEmail,
      ip,
    },
  });

  return createUser;
};
