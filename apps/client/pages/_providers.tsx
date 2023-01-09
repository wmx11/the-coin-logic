import { ApolloProvider } from '@apollo/client';
import { Affix, MantineProvider, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { chains, providers } from '@web3modal/ethereum';
// import { Web3Modal } from '@web3modal/react';
import GradientButton from 'components/Buttons/GradientButton';
import { mantineCache } from 'mantine-cache';
import { SessionProvider } from 'next-auth/react';
import dynamic from 'next/dynamic';
import React, { FC, useEffect } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { FaArrowUp } from 'react-icons/fa';
import Layout from '../components/Layout';
import client from '../data/apollo-client';
import useLoginFlowStore from 'store/useLoginFlowStore';

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
  // const isModalOpen = useLoginFlowStore((state) => state.isOpen);
  // const [scroll, scrollTo] = !isModalOpen ? useWindowScroll() : [null, null];

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
              colorScheme: 'light',
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
              {/* <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={win?.scrollY > 0}>
                  {(transitionStyles) => (
                    <GradientButton style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
                      <FaArrowUp size={16} />
                    </GradientButton>
                  )}
                </Transition>
              </Affix> */}
            </Layout>
          </MantineProvider>
        </ApolloProvider>
      </SessionProvider>
    </GoogleReCaptchaProvider>
  );
};

export default ProvidersWrapper;
