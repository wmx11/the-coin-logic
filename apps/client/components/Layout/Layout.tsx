import React, { FC } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { ToastContainer, Slide } from 'react-toastify';
import LoginFlowModal from 'components/Modals/LoginFlowModal';
import Head from 'next/head';
import useThemeStore from 'store/useThemeStore';

type LayoutProps = {
  children: JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div>
      <Head>
        <title key="title">Cryptocurrency & DeFi Analytics, Prices, and Charts | Coin Logic</title>
        <meta
          key="og:title"
          property="og:title"
          content="Cryptocurrency & DeFi Analytics, Prices, and Charts | Coin Logic"
        />

        <meta
          name="description"
          key="description"
          content="See cryptocurrency & DeFi prices live. Explore analytics, market cap, trading volume charts, and more. Discover trending projects and their communities."
        />
        <meta
          property="og:description"
          key="og:description"
          content="See cryptocurrency & DeFi prices live. Explore analytics, market cap, trading volume charts, and more. Discover trending projects and their communities."
        />
        <meta key="og:url" property="og:url" content="https://thecoinlogic.com/" />
        <link key="canonical" rel="canonical" href="https://thecoinlogic.com/" />
        <meta key="og:image" property="og:image" content="https://thecoinlogic.com/images/meta_image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta property="og:site_name" content="TheCoinLogic" />
        <meta key="og:type" property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header></Header>
      <main>{children}</main>
      <ToastContainer position="top-center" autoClose={5000} transition={Slide} theme={theme} />
      <LoginFlowModal />
      <Footer></Footer>
    </div>
  );
};

export default Layout;
