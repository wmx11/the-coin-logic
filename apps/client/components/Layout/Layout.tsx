import React, { FC } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { ToastContainer, Slide } from 'react-toastify';
import LoginFlowModal from 'components/Modals/LoginFlowModal';
import Head from 'next/head';

type LayoutProps = {
  children: JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title key="title">Trusted and Transparent data for Cryptocurrency and DeFi Projects | Coin Logic</title>

        <meta
          key="og:title"
          property="og:title"
          content="Trusted and Transparent data for Cryptocurrency and DeFi Projects | Coin Logic"
        />

        <meta
          name="description"
          key="description"
          content="Transparent analytics, historical data for Audited, and KYC DeFi, and Cryptocurrency projects. Free access to data, tools, services, and a global community."
        />

        <meta
          property="og:description"
          key="og:description"
          content="Transparent analytics, historical data for Audited, and KYC DeFi, and Cryptocurrency projects. Free access to data, tools, services, and a global community."
        />

        <meta key="og:url" property="og:url" content="https://thecoinlogic.com/" />
        <link key="canonical" rel="canonical" href="https://thecoinlogic.com/" />

        <meta key="og:image" property="og:image" content="" />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta property="og:site_name" content="TheCoinLogic" />
        <meta key="og:type" property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header></Header>
      <main>{children}</main>
      <ToastContainer position="top-center" autoClose={5000} transition={Slide} />
      <LoginFlowModal />
      <Footer></Footer>
    </div>
  );
};

export default Layout;
