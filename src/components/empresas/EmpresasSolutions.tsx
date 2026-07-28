import React from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Layout,
  Settings,
  Users,
  BarChart3,
  Cpu,
  RefreshCw,
  Bot,
  Rocket,
  Calendar,
  Package,
  UserCheck,
  Sparkles,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const EmpresasSolutions: React.FC = () => {
  const solutions = [
    {
      name: 'Aplicaciones Web',
      icon: Globe,
      desc: 'Desarrollamos aplicaciones web modernas, rápidas y adaptadas a las necesidades de cada organización.',
    },
    {
      name: 'Plataformas Administrativas',
      icon: Layout,
      desc: 'Paneles administrativos personalizados para centralizar información, procesos y operación.',
    },
    {
      name: 'Sistemas Internos',
      icon: Settings,
      desc: 'Herramientas desarrolladas a medida para optimizar procesos internos y mejorar la productividad.',
    },
    {
      name: 'Portales para Clientes',
      icon: Users,
      desc: 'Espacios digitales donde clientes, proveedores o usuarios pueden consultar información, realizar solicitudes o acceder a servicios.',
    },
    {
      name: 'Dashboards e Indicadores',
      icon: BarChart3,
      desc: 'Visualización inteligente de información mediante paneles personalizados para facilitar la toma de decisiones.',
    },
    {
      name: 'Automatización de Procesos',
      icon: Cpu,
      desc: 'Automatizamos tareas repetitivas conectando diferentes plataformas para ahorrar tiempo y reducir errores.',
    },
    {
      name: 'Integraciones mediante API',
      icon: RefreshCw,
      desc: 'Conectamos sistemas, aplicaciones y servicios para que trabajen de forma integrada y automática.',
    },
    {
      name: 'Asistentes Inteligentes con IA',
      icon: Bot,
      desc: 'Desarrollamos asistentes capaces de responder consultas, automatizar procesos y apoyar la atención al cliente o equipos internos.',
    },
    {
      name: 'Soluciones Tecnológicas a Medida',
      icon: Rocket,
      desc: 'Diseñamos herramientas personalizadas cuando un negocio necesita resolver un proceso específico que no cubre un software tradicional.',
      isFeatured: true,
    },
    {
      name: 'Sistemas de Reservas y Agendamiento',
      icon: Calendar,
      desc: 'Plataformas para administrar citas, reservas, disponibilidad y programación de servicios.',
    },
    {
      name: 'Sistemas de Inventario',
      icon: Package,
      desc: 'Control de productos, movimientos, existencias y procesos relacionados con inventarios.',
    },
    {
      name: 'CRM Personalizados',
      icon: UserCheck,
      desc: 'Sistemas para gestionar clientes, oportunidades comerciales y seguimiento adaptados a la forma de trabajar de cada organización.',
    },
  ];

  return (
    <Section spacing="comfortable" className="relative bg-[#101722] py-24 overflow-hidden">
      {/* Top and Bottom Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#182231] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1B2940] to-transparent pointer-events-none z-10" />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D131E] border border-white/[0.08] text-[#BFC5CC] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#BFC5CC]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BFC5CC]">
              PORTAFOLIO DE SOLUCIONES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E6E8EB] font-display tracking-tight leading-tight">
            Soluciones que Desarrollamos
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#8892B0] max-w-2xl mx-auto leading-relaxed">
            Diseñamos soluciones tecnológicas personalizadas y adaptadas a las necesidades específicas de cada cliente.
          </p>
        </div>

        {/* 12 Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => {
            const IconComp = item.icon;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className={`group relative rounded-2xl border p-6 flex items-start gap-4 transition-all duration-250 shadow-md ${
                  item.isFeatured
                    ? 'border-blue-500/40 bg-[#121D2E]/90 hover:border-blue-400/60 hover:bg-[#162338]/95 hover:-translate-y-1 ring-1 ring-blue-500/20'
                    : 'border-white/[0.08] bg-[#0C121C]/80 backdrop-blur-md hover:border-white/[0.22] hover:bg-[#111826]/90 hover:-translate-y-1'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${
                  item.isFeatured
                    ? 'bg-blue-600/20 border-blue-400/40 text-blue-300'
                    : 'bg-[#141C2B] border-white/[0.1] text-[#93C5FD]'
                }`}>
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-[#E6E8EB] group-hover:text-white transition-colors leading-snug font-display">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[#8892B0] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

