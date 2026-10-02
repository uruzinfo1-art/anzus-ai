import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '@/components/ui/Button';
import { HeroChatDemo } from './HeroChatDemo';

export const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.querySelector('#servicios');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="inicio" spacing="hero" className="relative overflow-hidden bg-[#F7F8FA] pt-32 pb-20 md:pt-36 lg:pt-40 lg:pb-24">
      {/* Soft Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_85%_20%,rgba(53,80,122,0.08),transparent_70%)] pointer-events-none" />

      <Container maxWidth="xl" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Eyebrow Label */}
            <p className="text-sm font-semibold text-[#35507A]">
              Tecnología con propósito
            </p>

            {/* Main Headline */}
            <h1 className="tracking-tight text-[#0F172A]">
              <span className="block text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15]">
                Hay algo que ninguna empresa puede comprar.
              </span>
              <span className="block mt-3 text-7xl sm:text-8xl lg:text-9xl font-extrabold leading-none tracking-tighter">
                Tiempo.
              </span>
              <span className="block mt-4 text-2xl sm:text-3xl font-semibold leading-tight text-[#35507A]">
                Pero sí puede recuperarlo.
              </span>
            </h1>

            {/* Subtitle Body */}
            <p className="text-base sm:text-lg text-[#5B6472] max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Con software, inteligencia artificial y automatización transformamos horas de trabajo repetitivo en tiempo para innovar, liderar, compartir con tu familia y hacer crecer tu negocio.
            </p>

            <p className="text-sm text-[#5B6472] max-w-xl mx-auto lg:mx-0">
              <span className="font-semibold text-[#0F172A]">¿Crees que podrías recuperar más tiempo?</span>{' '}
              Conversemos y descubramos juntos cómo hacerlo.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={scrollToContact}
                className="w-full sm:w-auto text-sm normal-case tracking-normal"
              >
                Agendar una reunión
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToServices}
                className="w-full sm:w-auto text-sm normal-case tracking-normal"
              >
                Descubrir soluciones
              </Button>
            </div>
          </motion.div>

          {/* Right Hero Column: AMARA chat demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <HeroChatDemo />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
