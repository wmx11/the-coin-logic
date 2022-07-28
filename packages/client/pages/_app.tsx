import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';

import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
