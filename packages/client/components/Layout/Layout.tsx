import { Container } from '@mantine/core';
import React from 'react';
import BarChartSvg from '../BarChartSvg/BarChartSvg';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

interface LayoutProps<Tprops> {
  children: JSX.Element;
}

const Layout = <Tprops,>({ children }: LayoutProps<Tprops>) => {
  return (
    <div>
      <Header></Header>
      <main className="">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
