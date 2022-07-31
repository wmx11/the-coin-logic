import React, { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface LayoutProps {
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
