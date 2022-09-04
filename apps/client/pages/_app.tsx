import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ReactElement, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import * as gtag from '../utils/googleTags';
import ProvidersWrapper from './_providers';

const isProduction = process.env.NODE_ENV === 'production';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();

  const handleRouteChange = (url: string) => {
    if (isProduction) {
      gtag.pageview(url);
    }
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const getLayout = Component.getLayout || ((page) => page);
  return <ProvidersWrapper>{getLayout(<Component {...pageProps} />)}</ProvidersWrapper>;
}

export default MyApp;
