import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  ArrowRight,
  MessageSquare,
  Bot,
  Cpu,
  Database,
  Cloud,
  ShieldCheck,
  BarChart3,
  Network,
  Sparkles,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export const EmpresasHero: React.FC = () => {
  const scrollToCapabilities = () => {
    const el = document.querySelector('#capacidades');
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

  const enterpriseNodes = [
    {
      id: 'ia-core',
      label: 'Inteligencia Artificial',
      badgeEmoji: '🤖',
      subtext: 'Asistentes & Automatización',
      position: 'top-2 left-4 sm:top-4 sm:left-8',
      delay: 0.1,
    },
    {
      id: 'web-moderna',
      label: 'Soluciones Web Modernas',
      badgeEmoji: '☁️',
      subtext: 'Plataformas Escalables',
      position: 'top-2 right-4 sm:top-4 sm:right-8',
      delay: 0.2,
    },
    {
      id: 'integracion',
      label: 'Integración de APIs',
      badgeEmoji: '🔗',
      subtext: 'Conexión de Servicios',
      position: 'top-1/2 -left-4 sm:-left-8 -translate-y-1/2',
      delay: 0.3,
    },
    {
      id: 'analytics',
      label: 'Paneles de Datos',
      badgeEmoji: '📊',
      subtext: 'Dashboards e Indicadores',
      position: 'top-1/2 -right-4 sm:-right-8 -translate-y-1/2',
      delay: 0.4,
    },
    {
      id: 'automatizacion',
      label: 'Automatización de Procesos',
      badgeEmoji: '🔄',
      subtext: 'Ahorro de Tiempo',
      position: 'bottom-2 left-4 sm:bottom-4 sm:left-8',
      delay: 0.5,
    },
    {
      id: 'plataformas',
      label: 'Software a Medida',
      badgeEmoji: '💻',
      subtext: 'Sistemas Internos',
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#0F172A]/[0.08] text-[#35507A] shadow-sm">
              <span className="text-sm">🏢</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F172A]">
                ANSUZ EMPRESAS
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight leading-[1.12]">
              Transformamos organizaciones mediante <span className="bg-gradient-to-r from-white via-[#5B6472] to-[#5B6472] bg-clip-text text-transparent">tecnología e inteligencia artificial.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5B6472] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Desarrollamos soluciones tecnológicas modernas, personalizadas y escalables utilizando inteligencia artificial para optimizar procesos, conectar plataformas y resolver problemas reales.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={scrollToContact}
                className="w-full sm:w-auto text-xs tracking-wider font-semibold"
              >
                SOLICITAR UNA REUNIÓN
              </Button>

              <Button
                variant="outline"
                size="lg"
                leftIcon={<MessageSquare className="w-4 h-4" />}
                onClick={scrollToCapabilities}
                className="w-full sm:w-auto text-xs tracking-wider border-[#0F172A]/[0.12] text-[#5B6472] hover:bg-white/[0.05]"
              >
                CONOCER NUESTRAS CAPACIDADES
              </Button>
            </div>
          </motion.div>

          {/* Right Hero Futuristic Connected Enterprise Architecture Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] p-4"
          >
            {/* Outer Subtle Radial Pulse Grid */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#0F172A]/[0.05] bg-[#0F172A]/[0.01] animate-pulse" />
              <div className="absolute w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] rounded-full border border-[#0F172A]/[0.08]" />
            </div>

            {/* Central Core: ORGANIZACIÓN CONECTADA */}
            <div className="relative z-20 flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#F7F8FA] border border-[#0F172A]/[0.22] shadow-[0_0_60px_rgba(72,113,184,0.4)] text-center p-3">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FFFFFF] border border-[#0F172A]/[0.15] flex items-center justify-center text-[#0F172A] mb-1 shadow-inner">
                <Network className="w-6 h-6 text-[#35507A]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-extrabold text-[#0F172A] uppercase tracking-wider font-display">
                ORGANIZACIÓN
              </span>
              <span className="text-[8px] sm:text-[9px] text-[#5B6472] font-mono tracking-tight">
                Plataforma Unificada
              </span>
            </div>

            {/* Floating Connected Enterprise Nodes */}
            {enterpriseNodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: node.delay },
                  scale: { duration: 0.5, delay: node.delay },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: node.delay },
                }}
                className={`absolute ${node.position} z-20 flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-[#F7F8FA]/90 border border-[#0F172A]/[0.12] backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.5)] hover:border-white/[0.3] transition-all`}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#FFFFFF] border border-[#0F172A]/[0.1] flex items-center justify-center text-[#0F172A] shrink-0">
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
