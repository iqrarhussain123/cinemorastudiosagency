'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export default function SiteFrame({ children }) {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </SmoothScrollProvider>
  );
}
