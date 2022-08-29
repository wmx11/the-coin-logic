import { ApolloProvider } from '@apollo/client';
import { MantineProvider } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import React, { FC } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Layout from '../components/Layout';
import client from '../data/apollo-client';

type ProvidersWrapperTypes = {
  children: React.ReactElement;
};

const ProvidersWrapper: FC<ProvidersWrapperTypes> = ({ children }): React.ReactElement => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTHA_KEY as string}
      scriptProps={{
        async: false, // optional, default to false,
        defer: true, // optional, default to false
        appendTo: 'head', // optional, default to "head", can be "head" or "body",
        nonce: undefined,
      }}
    >
      <SessionProvider>
        <ApolloProvider client={client}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            emotionOptions={{ key: 'mantine', prepend: false }}
            defaultProps={{
              Container: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 1140,
                  lg: 1140,
                  xl: 1320,
                },
              },
            }}
            theme={{
              colorScheme: 'light',
            }}
          >
            <Layout>{children}</Layout>
          </MantineProvider>
        </ApolloProvider>
      </SessionProvider>
    </GoogleReCaptchaProvider>
  );
};

export default ProvidersWrapper;
