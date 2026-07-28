import React, { useEffect } from 'react';
import { PersonasHero } from '@/components/personas/PersonasHero';
import { PersonasVision } from '@/components/personas/PersonasVision';
import { PersonasEcosystem } from '@/components/personas/PersonasEcosystem';
import { PersonasRoadmap } from '@/components/personas/PersonasRoadmap';
import { PersonasWhyUs } from '@/components/personas/PersonasWhyUs';
import { PersonasCta } from '@/components/personas/PersonasCta';
import { ContactSection } from '@/components/home/ContactSection';

export const PersonasPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <PersonasHero />
      <PersonasVision />
      <PersonasEcosystem />
      <PersonasRoadmap />
      <PersonasWhyUs />
      <PersonasCta />
      <ContactSection />
    </div>
  );
};
