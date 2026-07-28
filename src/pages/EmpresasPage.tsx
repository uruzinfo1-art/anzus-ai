import React, { useEffect } from 'react';
import { EmpresasHero } from '@/components/empresas/EmpresasHero';
import { EmpresasCapabilities } from '@/components/empresas/EmpresasCapabilities';
import { EmpresasSolutions } from '@/components/empresas/EmpresasSolutions';
import { EmpresasWhyUs } from '@/components/empresas/EmpresasWhyUs';
import { EmpresasApproach } from '@/components/empresas/EmpresasApproach';
import { EmpresasCta } from '@/components/empresas/EmpresasCta';
import { ContactSection } from '@/components/home/ContactSection';

export const EmpresasPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <EmpresasHero />
      <EmpresasCapabilities />
      <EmpresasSolutions />
      <EmpresasWhyUs />
      <EmpresasApproach />
      <EmpresasCta />
      <ContactSection />
    </div>
  );
};
