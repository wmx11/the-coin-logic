import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import ProvidersWrapper from './_providers';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return <ProvidersWrapper>{getLayout(<Component {...pageProps} />)}</ProvidersWrapper>;
}

export default MyApp;
