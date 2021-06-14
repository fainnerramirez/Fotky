import React from 'react';
import NavbarApp from './Navbar';
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
