import React from 'react';
import { motion } from 'motion/react';
import { User, Rocket, Building2, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

interface SolutionProfile {
  id: string;
  badge: string;
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  highlight: string;
  ctaText: string;
  href: string;
  accentGlow: string;
}

const profiles: SolutionProfile[] = [
  {
    id: 'personas',
    badge: '👤 Personas',
    icon: User,
    title: 'Tu vida puede ser mucho más sencilla',
    description:
      'La inteligencia artificial puede convertirse en un asistente que te acompaña todos los días. Desde organizar tus finanzas y planificar tus actividades hasta ayudarte a estudiar, trabajar o crear contenido, diseñamos soluciones pensadas para hacer tu vida más fácil y ayudarte a recuperar tiempo para lo que realmente importa.',
    highlight: '¿Qué harías si tuvieras un asistente disponible las 24 horas?',
    ctaText: 'Descubrir soluciones',
    href: '/personas',
    accentGlow: 'from-[#3B82F6]/20 via-transparent to-transparent',
  },
  {
    id: 'negocios',
    badge: '🚀 Negocios y Emprendedores',
    icon: Rocket,
    title: 'Dedícate a crecer. Nosotros automatizamos el resto.',
    description:
      'Responder mensajes, organizar pedidos, hacer seguimiento a clientes y realizar tareas repetitivas consume horas valiosas cada semana. Creamos soluciones inteligentes que trabajan por ti para que puedas enfocarte en vender más, atender mejor y hacer crecer tu negocio.',
    highlight: '¿Cuántas oportunidades ganarías si tu negocio nunca dejara de responder a un cliente?',
    ctaText: 'Descubrir soluciones',
    href: '/negocios',
    accentGlow: 'from-[#6366F1]/20 via-transparent to-transparent',
  },
  {
    id: 'empresas',
    badge: '🏢 Empresas',
    icon: Building2,
    title: 'El futuro de tu empresa comienza hoy.',
    description:
      'Las organizaciones más competitivas no trabajan más, trabajan de forma más inteligente. Diseñamos soluciones tecnológicas e inteligencia artificial que optimizan procesos, conectan equipos y preparan a las empresas para crecer con mayor eficiencia y tomar mejores decisiones.',
    highlight: '¿Y si cada proceso de tu empresa fuera más rápido, más inteligente y estuviera conectado?',
    ctaText: 'Descubrir soluciones',
    href: '/empresas',
    accentGlow: 'from-[#4871B8]/20 via-transparent to-transparent',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <Section id="servicios" spacing="comfortable" className="relative bg-[#0E141D] py-24 md:py-32 overflow-hidden">
      {/* Top and Bottom Smooth Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#121B28] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#131C28] to-transparent pointer-events-none z-10" />

      {/* Ambient Radial Background Lighting */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.08)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121824] border border-white/[0.08] text-[#8892B0] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#BFC5CC]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BFC5CC]">
              SOLUCIONES A LA MEDIDA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E6E8EB] font-display tracking-tight leading-tight">
            ¿Cómo podemos ayudarte?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#8892B0] leading-relaxed max-w-2xl mx-auto font-normal">
            No importa si eres una persona, un emprendedor o una empresa. Diseñamos soluciones tecnológicas e inteligencia artificial adaptadas a cada necesidad.
          </p>
        </div>

        {/* 3 Large Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch">
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon;
            return (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-full flex"
              >
                <div className="relative group w-full flex flex-col justify-between rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0C121C]/80 backdrop-blur-md p-8 sm:p-10 transition-all duration-350 hover:border-white/[0.22] hover:bg-[#111826]/90 hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] hover:-translate-y-1.5">
                  {/* Subtle Top Inner Glow Effect */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-t-2xl md:rounded-t-3xl" />

                  <div className="relative space-y-6">
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-start justify-between gap-4">
                      {/* Large Main Icon Container */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#141B28] border border-white/[0.1] text-[#E6E8EB] flex items-center justify-center group-hover:border-white/[0.3] group-hover:scale-105 group-hover:text-white group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-all duration-300">
                        <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>

                      {/* Profile Badge */}
                      <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#BFC5CC] px-3.5 py-1.5 bg-[#121926] border border-white/[0.08] rounded-full shadow-sm">
                        {profile.badge}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#E6E8EB] font-display tracking-tight leading-snug group-hover:text-white transition-colors">
                      {profile.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#8892B0] leading-relaxed font-normal">
                      {profile.description}
                    </p>
                  </div>

                  {/* Bottom Section: Highlighted Phrase & Action Button */}
                  <div className="relative pt-8 mt-8 border-t border-white/[0.06] space-y-6">
                    {/* Highlighted Phrase Box */}
                    <div className="p-4 rounded-xl bg-white/[0.025] border border-white/[0.05] text-xs sm:text-sm font-medium text-[#CBD5E1] leading-relaxed group-hover:border-white/[0.12] group-hover:bg-white/[0.04] transition-all">
                      <p className="italic text-[#E2E8F0]">
                        "{profile.highlight}"
                      </p>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={profile.href}
                      onClick={(e) => {
                        e.preventDefault();
                        window.history.pushState({}, '', profile.href);
                        window.dispatchEvent(new Event('popstate'));
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-[#141C2B] border border-white/[0.1] text-xs sm:text-sm font-semibold tracking-wide text-[#E6E8EB] group-hover:bg-[#1E2A40] group-hover:border-white/[0.25] group-hover:text-white transition-all duration-250 shadow-sm"
                    >
                      <span>{profile.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#BFC5CC] group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
