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
    <Section id="inicio" spacing="hero" className="relative overflow-hidden bg-[#090C11] pt-32 pb-24">
      {/* Directional Silver / Slate Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#BFC5CC]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0F172A]/30 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Smooth Bottom Gradient Transition to Tecnologías */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#121B28] pointer-events-none z-10" />

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11161D] border border-[#BFC5CC]/30 text-[#BFC5CC]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BFC5CC] animate-ping" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] font-sans">
                TECNOLOGÍA CON PROPÓSITO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold tracking-tight leading-tight">
  <span className="block text-3xl sm:text-4xl lg:text-5xl text-[#E6E8EB]">
    Hay algo que ninguna empresa puede comprar.
  </span>

  <span className="block mt-4 text-5xl sm:text-6xl lg:text-6xl text-white">
    Tiempo.
  </span>

  <span className="block mt-3 text-3xl sm:text-4xl lg:text-5xl text-[#8FA9C8]">
    Pero sí puede recuperarlo.
  </span>
</h1>

            {/* Subtitle Body */}
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
  Con software, inteligencia artificial y automatización transformamos horas de trabajo repetitivo en tiempo para innovar, liderar, compartir con tu familia y hacer crecer tu negocio.
</p>
<div className="rounded-xl border border-[#2A3442] bg-[#11161D]/70 p-4 max-w-xl">
  <p className="text-sm font-semibold text-[#E6E8EB]">
    ¿Crees que podrías recuperar más tiempo?
  </p>

  <p className="mt-1 text-sm text-[#9CA3AF]">
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
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#BFC5CC]/25 via-transparent to-[#BFC5CC]/15 blur-xl opacity-70 -z-10" />

              {/* Cinematic Monolith Scene */}
              <div className="rounded-2xl border border-[#1A1F27] bg-[#11161D] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
                {/* Cinematic Monolith Scene */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0D11] flex items-center justify-center">
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
brightness-110
contrast-110
saturate-110
"
                  />

                  {/* Dark Vignette Overlay for Depth */}
                  <div className="absolute inset-0 bg-radial from-transparent via-[#0B0F14]/40 to-[#0B0F14]/90 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
