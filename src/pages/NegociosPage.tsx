import React, { useEffect } from 'react';
import { NegociosHero } from '@/components/negocios/NegociosHero';
import { NegociosChallenges } from '@/components/negocios/NegociosChallenges';
import { NegociosSolutions } from '@/components/negocios/NegociosSolutions';
import { NegociosProcess } from '@/components/negocios/NegociosProcess';
import { NegociosWhyUs } from '@/components/negocios/NegociosWhyUs';
import { NegociosSectors } from '@/components/negocios/NegociosSectors';
import { NegociosCta } from '@/components/negocios/NegociosCta';
import { ContactSection } from '@/components/home/ContactSection';

export const NegociosPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NegociosHero />
      <NegociosChallenges />
      <NegociosSolutions />
      <NegociosProcess />
      <NegociosWhyUs />
      <NegociosSectors />
      <NegociosCta />
      <ContactSection />
    </div>
  );
};
