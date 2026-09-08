import React from 'react';
import { motion } from 'motion/react';
import {
  Rocket,
  ArrowRight,
  MessageSquare,
  Bot,
  Users,
  TrendingUp,
  MessageCircle,
  BarChart3,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export const NegociosHero: React.FC = () => {
  const scrollToSolutions = () => {
    const el = document.querySelector('#soluciones');
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

  const businessNodes = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      badgeEmoji: '💬',
      subtext: 'Atención 24/7',
      position: 'top-2 left-4 sm:top-4 sm:left-8',
      delay: 0.1,
    },
    {
      id: 'ventas',
      label: 'Ventas CRM',
      badgeEmoji: '📈',
      subtext: 'Seguimiento',
      position: 'top-2 right-4 sm:top-4 sm:right-8',
      delay: 0.2,
    },
    {
      id: 'automatizacion',
      label: 'Automatización',
      badgeEmoji: '🤖',
      subtext: 'Tareas & Flujos',
      position: 'top-1/2 -left-4 sm:-left-8 -translate-y-1/2',
      delay: 0.3,
    },
    {
      id: 'paneles',
      label: 'Paneles & IA',
      badgeEmoji: '📊',
      subtext: 'Métricas Reales',
      position: 'top-1/2 -right-4 sm:-right-8 -translate-y-1/2',
      delay: 0.4,
    },
    {
      id: 'clientes',
      label: 'Clientes',
      badgeEmoji: '👥',
      subtext: 'Fidelización',
      position: 'bottom-2 left-4 sm:bottom-4 sm:left-8',
      delay: 0.5,
    },
    {
      id: 'integraciones',
      label: 'Integraciones',
      badgeEmoji: '⚙️',
      subtext: 'Todo Conectado',
      position: 'bottom-2 right-4 sm:bottom-4 sm:right-8',
      delay: 0.6,
    },
  ];

  return (
    <Section spacing="hero" className="relative overflow-hidden bg-[#F7F8FA] pt-32 sm:pt-36 pb-20 md:pb-28">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10" />

      {/* Bottom Transition Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#FFFFFF] pointer-events-none z-10" />

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-white/[0.08] text-[#35507A] shadow-sm">
              <span className="text-sm">🚀</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F172A]">
                ANSUZ NEGOCIOS Y EMPRENDEDORES
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight leading-[1.12]">
              Haz crecer tu negocio con <span className="bg-gradient-to-r from-white via-[#5B6472] to-[#5B6472] bg-clip-text text-transparent">soluciones inteligentes.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5B6472] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Desde automatizar tareas repetitivas hasta mejorar la atención al cliente y optimizar procesos. En ANSUZ desarrollamos soluciones tecnológicas que ayudan a emprendedores y pequeños negocios a trabajar mejor, ahorrar tiempo y crecer.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={scrollToSolutions}
                className="w-full sm:w-auto text-xs tracking-wider font-semibold"
              >
                DESCUBRIR SOLUCIONES
              </Button>

              <Button
                variant="outline"
                size="lg"
                leftIcon={<MessageSquare className="w-4 h-4" />}
                onClick={scrollToContact}
                className="w-full sm:w-auto text-xs tracking-wider border-white/[0.12] text-[#5B6472] hover:bg-white/[0.05]"
              >
                HABLAR CON UN ESPECIALISTA
              </Button>
            </div>
          </motion.div>

          {/* Right Hero Connected Business Ecosystem Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] p-4"
          >
            {/* Outer Subtle Radial Pulse Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-white/[0.05] bg-white/[0.01] animate-pulse" />
              <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-white/[0.08]" />
            </div>

            {/* Central Node: TU NEGOCIO */}
            <div className="relative z-20 flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#F7F8FA] border border-white/[0.2] shadow-[0_0_50px_rgba(72,113,184,0.35)] text-center p-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFFFFF] border border-white/[0.15] flex items-center justify-center text-white mb-1 shadow-inner">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-[#35507A]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider font-display">
                TU NEGOCIO
              </span>
              <span className="text-[8px] sm:text-[9px] text-[#5B6472] font-mono tracking-tight">
                Ecosistema ANSUZ
              </span>
            </div>

            {/* Floating Connected Nodes */}
            {businessNodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: node.delay },
                  scale: { duration: 0.5, delay: node.delay },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: node.delay },
                }}
                className={`absolute ${node.position} z-20 flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-[#F7F8FA]/90 border border-white/[0.12] backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.5)] hover:border-white/[0.3] transition-all`}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#FFFFFF] border border-white/[0.1] flex items-center justify-center text-white shrink-0">
                  <span className="text-xs">{node.badgeEmoji}</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight font-display">
                    {node.label}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#5B6472] font-mono">
                    {node.subtext}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
