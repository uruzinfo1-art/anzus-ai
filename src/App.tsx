/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustedBySection } from '@/components/home/TrustedBySection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { NosotrosSection } from '@/components/home/NosotrosSection';
import { ContactSection } from '@/components/home/ContactSection';
import { Footer } from '@/components/layout/Footer';
import { PersonasPage } from '@/pages/PersonasPage';
import { NegociosPage } from '@/pages/NegociosPage';
import { EmpresasPage } from '@/pages/EmpresasPage';
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ANSUZ Technology',
    url: 'https://ansuzstudio.com',
    logo: 'https://ansuzstudio.com/logo.png',
    description:
      'Agencia de arquitectura de software enterprise, desarrollo full-stack con Next.js 15, React 19 e Inteligencia Artificial.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bogota',
      addressCountry: 'CO',
    },
    sameAs: [
      'https://linkedin.com/company/ansuz-tech',
      'https://twitter.com/ansuztech',
      'https://github.com/ansuz-tech',
    ],
  };
  

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/10 selection:text-primary">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPath === '/personas' ? (
          <PersonasPage />
        ) : currentPath === '/negocios' ? (
          <NegociosPage />
        ) : currentPath === '/empresas' ? (
          <EmpresasPage />
        ) : (
          <>
            <HeroSection />
            <TrustedBySection />
            <ServicesSection />
            <NosotrosSection />
            <ContactSection />
          </>
        )}
      </main>

           {/* Global Footer */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />

    </div>
  );
}
