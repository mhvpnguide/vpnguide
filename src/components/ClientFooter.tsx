// src/components/ClientFooter.tsx
'use client';  // This ensures it's a client-side component

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import DeFooter from './DeFooter';

const ClientFooter = () => {
  const pathname = usePathname();

  return pathname?.includes("/de/") ? <DeFooter /> : <Footer />;
};

export default ClientFooter;
