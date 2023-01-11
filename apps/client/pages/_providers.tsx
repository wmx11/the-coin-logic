import { ApolloProvider } from '@apollo/client';
import { MantineProvider } from '@mantine/core';
import { chains, providers } from '@web3modal/ethereum';
import { mantineCache } from 'mantine-cache';
import { SessionProvider } from 'next-auth/react';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Layout from '../components/Layout';
import client from '../data/apollo-client';
import useThemeStore from 'store/useThemeStore';

type ProvidersWrapperTypes = {
  children: React.ReactElement;
};

if (!process.env.NEXT_PUBLIC_WEB3_PROJECT_ID) {
  throw new Error('You need to provide NEXT_PUBLIC_WEB3_PROJECT_ID env variable');
}

const web3Config = {
  projectId: process.env.NEXT_PUBLIC_WEB3_PROJECT_ID as string,
  theme: 'dark' as const,
  accentColor: 'default' as const,
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true,
    chains: [chains.mainnet, chains.avalanche, chains.polygon, chains.binanceSmartChain, chains.fantom],
    providers: [providers.walletConnectProvider({ projectId: process.env.NEXT_PUBLIC_WEB3_PROJECT_ID as string })],
  },
};

const ProvidersWrapper: FC<ProvidersWrapperTypes> = ({ children }): React.ReactElement => {
  const theme = useThemeStore((state) => state.theme);
  const ConfirmationModal = dynamic<any>(() => import('components/Modals/ConfirmationModal'), { ssr: false });
  const Web3Modal = dynamic<any>(() => import('@web3modal/react').then((mod) => mod.Web3Modal), { ssr: false });

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTHA_KEY as string}
      scriptProps={{
        async: true, // optional, default to false,
        defer: true, // optional, default to false
        appendTo: 'body', // optional, default to "head", can be "head" or "body",
        nonce: undefined,
      }}
    >
      <SessionProvider>
        <ApolloProvider client={client}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            withCSSVariables
            emotionCache={mantineCache}
            theme={{
              colorScheme: theme,
              components: {
                Container: {
                  defaultProps: {
                    size: 'lg',
                  },
                },
              },
            }}
          >
            <Layout>
              {children}
              <ConfirmationModal />
              <Web3Modal config={web3Config} />
            </Layout>
          </MantineProvider>
        </ApolloProvider>
      </SessionProvider>
    </GoogleReCaptchaProvider>
  );
};

export default ProvidersWrapper;
