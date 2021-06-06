import React, { Children } from 'react';
import NavbarApp from '../components/NavbarApp';
import Footer from '../components/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavbarApp />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
