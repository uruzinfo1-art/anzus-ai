import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Heart,
  Utensils,
  Calendar,
  BookOpen,
  PenTool,
  Home,
  Cpu,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export const PersonasHero: React.FC = () => {
  const scrollToEcosystem = () => {
    const el = document.querySelector('#ecosistema');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contacto';
    }
  };

  const ecosystemNodes = [
    {
      id: 'finanzas',
      icon: Heart,
      label: 'Finanzas',
      badge: '❤️',
      subtext: 'AMARA',
      position: 'top-2 left-6 sm:top-4 sm:left-10',
      delay: 0.1,
    },
    {
      id: 'alimentacion',
      icon: Utensils,
      label: 'Alimentación',
      badge: '🥗',
      subtext: 'Nutrición IA',
      position: 'top-2 right-6 sm:top-4 sm:right-10',
      delay: 0.2,
    },
    {
      id: 'organizacion',
      icon: Calendar,
      label: 'Organización',
      badge: '📅',
      subtext: 'Asistente',
      position: 'top-1/2 -left-3 sm:-left-6 -translate-y-1/2',
      delay: 0.3,
    },
    {
      id: 'aprendizaje',
      icon: BookOpen,
      label: 'Aprendizaje',
      badge: '📚',
      subtext: 'Tutor IA',
      position: 'top-1/2 -right-3 sm:-right-6 -translate-y-1/2',
      delay: 0.4,
    },
    {
      id: 'creatividad',
      icon: PenTool,
      label: 'Creatividad',
      badge: '✍️',
      subtext: 'Creador IA',
      position: 'bottom-2 left-6 sm:bottom-4 sm:left-10',
      delay: 0.5,
    },
    {
      id: 'hogar',
      icon: Home,
      label: 'Hogar',
      badge: '🏠',
      subtext: 'Hogar Inteligente',
      position: 'bottom-2 right-6 sm:bottom-4 sm:right-10',
      delay: 0.6,
    },
  ];

  return (
    <Section spacing="hero" className="relative overflow-hidden bg-[#090C11] pt-32 sm:pt-36 pb-20 md:pb-28">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10" />
      
      {/* Bottom Transition Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#121B28] pointer-events-none z-10" />

      <Container maxWidth="2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121824] border border-white/[0.08] text-[#BFC5CC] shadow-sm">
              <span className="text-sm">👤</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E6E8EB]">
                ANSUZ PERSONAS
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#E6E8EB] font-display tracking-tight leading-[1.12]">
              Tecnología diseñada para <span className="bg-gradient-to-r from-white via-[#CBD5E1] to-[#94A3B8] bg-clip-text text-transparent">simplificar tu vida.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#8892B0] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              La tecnología debería ayudarte a vivir mejor, ahorrar tiempo y tomar mejores decisiones. En ANSUZ desarrollamos un ecosistema de soluciones inteligentes que te acompañan en diferentes aspectos de tu vida cotidiana.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={scrollToEcosystem}
                className="w-full sm:w-auto text-xs tracking-wider font-semibold"
              >
                EXPLORAR SOLUCIONES
              </Button>

              <Button
                variant="outline"
                size="lg"
                leftIcon={<MessageSquare className="w-4 h-4" />}
                onClick={scrollToContact}
                className="w-full sm:w-auto text-xs tracking-wider border-white/[0.12] text-[#CBD5E1] hover:bg-white/[0.05]"
              >
                HABLAR CON UN ASESOR
              </Button>
            </div>
          </motion.div>

          {/* Right Hero Connected Digital Ecosystem Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] p-4"
          >
            {/* Outer Subtle Radial Pulse Grid */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-white/[0.05] bg-white/[0.01] animate-pulse" />
              <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-white/[0.08]" />
            </div>

            {/* Central Node: TÚ / ECOSISTEMA */}
            <div className="relative z-20 flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#182333] to-[#0D131D] border border-white/[0.2] shadow-[0_0_50px_rgba(72,113,184,0.35)] text-center p-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#202C40] border border-white/[0.15] flex items-center justify-center text-white mb-1 shadow-inner">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#93C5FD]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider font-display">
                TÚ Y TU DÍA
              </span>
              <span className="text-[8px] sm:text-[9px] text-[#94A3B8] font-mono tracking-tight">
                Ecosistema ANSUZ
              </span>
            </div>

            {/* Floating Connected Nodes */}
            {ecosystemNodes.map((node) => {
              const NodeIcon = node.icon;
              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: node.delay },
                    scale: { duration: 0.5, delay: node.delay },
                    y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: node.delay },
                  }}
                  className={`absolute ${node.position} z-20 flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-[#0D131E]/90 border border-white/[0.12] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-white/[0.3] transition-all`}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#162030] border border-white/[0.1] flex items-center justify-center text-white shrink-0">
                    <span className="text-xs">{node.badge}</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-bold text-[#E6E8EB] leading-tight font-display">
                      {node.label}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#8892B0] font-mono">
                      {node.subtext}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
