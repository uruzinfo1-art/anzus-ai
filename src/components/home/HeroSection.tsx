import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '@/components/ui/Button';
import heroHumanAiImg from '@/assets/images/hero-human-ai.png';

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
    <Section id="inicio" spacing="hero" className="relative overflow-hidden bg-[#F7F8FA] pt-32 pb-24">
      {/* Directional Silver / Slate Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#35507A]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0F172A]/30 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Smooth Bottom Gradient Transition to Tecnologías */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#FFFFFF] pointer-events-none z-10" />

      <Container maxWidth="2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-7 text-center lg:text-left"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#35507A]/30 text-[#35507A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35507A] animate-ping" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] font-sans">
                TECNOLOGÍA CON PROPÓSITO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-bold leading-[1.05] tracking-tight">
  <span className="block text-4xl lg:text-5xl text-[#0F172A] uppercase">
    Hay algo que
  </span>

  <span className="block text-4xl lg:text-5xl text-[#0F172A] uppercase">
    ninguna empresa
  </span>

  <span className="block text-4xl lg:text-5xl text-[#0F172A] uppercase">
    puede comprar.
  </span>

  <span className="block mt-5 text-7xl lg:text-8xl font-black text-[#0F172A] uppercase">
    Tiempo.
  </span>

  <span className="block mt-3 text-3xl lg:text-4xl font-semibold text-[#5B6472] uppercase">
    Pero sí puede recuperarlo.
  </span>
</h1>

            {/* Subtitle Body */}
            <p className="text-base sm:text-lg text-[#5B6472] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
  Con software, inteligencia artificial y automatización transformamos horas de trabajo repetitivo en tiempo para innovar, liderar, compartir con tu familia y hacer crecer tu negocio.
</p>
<div className="rounded-xl border border-[#FFFFFF] bg-[#FFFFFF]/70 p-4 max-w-xl">
  <p className="text-sm font-semibold text-[#0F172A]">
    ¿Crees que podrías recuperar más tiempo?
  </p>

  <p className="mt-1 text-sm text-[#5B6472]">
    Conversemos y descubramos juntos cómo hacerlo.
  </p>
</div>
            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={scrollToContact}
                className="w-full sm:w-auto px-8 py-3 text-xs tracking-wider font-semibold"
              >
                AGENDAR UNA REUNIÓN
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToServices}
                className="w-full sm:w-auto text-xs tracking-wider"
              >
                DESCUBRIR SOLUCIONES
              </Button>
            </div>
          </motion.div>

          {/* Right Hero Image Column - Monolith & Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Metallic Silver Glow Frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#35507A]/25 via-transparent to-[#35507A]/15 blur-xl opacity-70 -z-10" />

              {/* Cinematic Monolith Scene */}
              <div className="rounded-2xl border border-[#E2E5EA] bg-[#FFFFFF] shadow-[0_20px_50px_rgba(15,23,42,0.12)] overflow-hidden">
                {/* Cinematic Monolith Scene */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F8FA] flex items-center justify-center">
                  {/* High-Impact Dark Monolith Image Background */}
                  <img
                    src={heroHumanAiImg}
                    alt="Colaboración entre el ser humano y la inteligencia artificial"
                    referrerPolicy="no-referrer"
                    className="
w-full
h-full
object-cover
object-center
hover:scale-105
transition-transform
duration-700
"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
