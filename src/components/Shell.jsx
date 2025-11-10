import React from 'react';
import { Navbar, PromoBar, Footer } from './NavbarFooter';

const Shell = ({ children }) => {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <PromoBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Shell;
