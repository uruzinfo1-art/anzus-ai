import React from 'react';
import { motion } from 'motion/react';
import {
  Bot,
  Code2,
  RefreshCw,
  BarChart3,
  Cloud,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Cpu,
  Database,
  Lock,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const EmpresasCapabilities: React.FC = () => {
  const capabilities = [
    {
      id: 'ia',
      badgeEmoji: '🤖',
      title: 'Inteligencia Artificial',
      description:
        'Implementamos asistentes inteligentes, automatización con IA y soluciones que ayudan a optimizar procesos y mejorar la productividad.',
      icon: Bot,
      bullets: [
        'Asistentes inteligentes para tareas operativas',
        'Modelos de IA aplicados a la empresa',
        'Procesamiento inteligente de información',
      ],
      graphic: (
        <div className="w-full h-36 rounded-xl bg-[#F7F8FA] border border-white/[0.08] p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-[11px] font-mono text-[#5B6472] font-semibold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-400" /> IA APLICADA
            </span>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Productividad
            </span>
          </div>
          <div className="space-y-1.5 my-auto">
            <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex justify-between items-center text-[10px] text-white">
              <span>Asistente Inteligente de Tareas</span>
              <span className="text-emerald-400 font-mono">Respuesta inmediata</span>
            </div>
            <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 flex justify-between items-center text-[10px] text-blue-200">
              <span>Automatización con IA</span>
              <span className="text-blue-300 font-mono">Optimización continua</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'desarrollo',
      badgeEmoji: '💻',
      title: 'Desarrollo de Software a Medida',
      description:
        'Diseñamos y desarrollamos aplicaciones web, plataformas personalizadas, paneles administrativos y herramientas digitales adaptadas a las necesidades de cada cliente.',
      icon: Code2,
      bullets: [
        'Aplicaciones web y plataformas a medida',
        'Paneles administrativos y herramientas internas',
        'Soluciones adaptadas a requerimientos específicos',
      ],
      graphic: (
        <div className="w-full h-36 rounded-xl bg-[#F7F8FA] border border-white/[0.08] p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-[11px] font-mono text-[#5B6472] font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" /> SOFTWARE CUSTOM
            </span>
            <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
              A Medida
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-auto text-center">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
              <span className="text-[9px] text-[#5B6472] block">Plataformas Web</span>
              <span className="text-[11px] font-bold text-white">Diseño Exclusivo</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
              <span className="text-[9px] text-[#5B6472] block">Paneles Admin</span>
              <span className="text-[11px] font-bold text-white">Control Total</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'automatizacion',
      badgeEmoji: '🔄',
      title: 'Automatización de Procesos',
      description:
        'Automatizamos tareas repetitivas conectando diferentes plataformas, formularios, bases de datos, correos electrónicos y servicios digitales para ahorrar tiempo y reducir errores.',
      icon: RefreshCw,
      bullets: [
        'Flujos de trabajo automatizados sin fricción',
        'Conexión de formularios, correos y bases de datos',
        'Ahorro directo de tiempo y reducción de errores',
      ],
      graphic: (
        <div className="w-full h-36 rounded-xl bg-[#F7F8FA] border border-white/[0.08] p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-[11px] font-mono text-[#5B6472] font-semibold flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-400" /> FLUJOS AUTOMÁTICOS
            </span>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Sin Errores
            </span>
          </div>
          <div className="flex items-center justify-around my-auto text-[11px] text-white">
            <div className="px-2 py-1 rounded bg-white/[0.05] border border-white/[0.1]">Formularios</div>
            <span className="text-emerald-400 font-bold">➔</span>
            <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">Automatización</div>
            <span className="text-emerald-400 font-bold">➔</span>
            <div className="px-2 py-1 rounded bg-white/[0.05] border border-white/[0.1]">BD / Email</div>
          </div>
        </div>
      ),
    },
    {
      id: 'integracion',
      badgeEmoji: '🔗',
      title: 'Integración de Plataformas',
      description:
        'Conectamos aplicaciones y servicios mediante APIs para que la información fluya automáticamente entre las herramientas que ya utiliza el cliente.',
      icon: Database,
      bullets: [
        'Conexión vía API entre herramientas digitales',
        'Flujo de información automático e instantáneo',
        'Aprovechamiento de las plataformas existentes',
      ],
      graphic: (
        <div className="w-full h-36 rounded-xl bg-[#F7F8FA] border border-white/[0.08] p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-[11px] font-mono text-[#5B6472] font-semibold flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-amber-400" /> INTEGRACIÓN DE APIs
            </span>
            <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              Conectado
            </span>
          </div>
          <div className="flex items-center justify-around my-auto text-[11px] text-white">
            <div className="px-2 py-1 rounded bg-white/[0.05] border border-white/[0.1]">App A</div>
            <span className="text-amber-400 font-bold">↔</span>
            <div className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-200">API Gateway</div>
            <span className="text-amber-400 font-bold">↔</span>
            <div className="px-2 py-1 rounded bg-white/[0.05] border border-white/[0.1]">App B</div>
          </div>
        </div>
      ),
    },
    {
      id: 'datos',
      badgeEmoji: '📊',
      title: 'Paneles e Inteligencia de Datos',
      description:
        'Creamos dashboards e indicadores que permiten visualizar información importante para facilitar la toma de decisiones.',
      icon: BarChart3,
      bullets: [
        'Dashboards claros y funcionales',
        'Visualización de indicadores clave (KPIs)',
        'Información en tiempo real para decidir mejor',
      ],
      graphic: (
        <div className="w-full h-36 rounded-xl bg-[#F7F8FA] border border-white/[0.08] p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-[11px] font-mono text-[#5B6472] font-semibold flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-purple-400" /> DASHBOARDS
            </span>
            <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
              KPIs Live
            </span>
          </div>
          <div className="space-y-1.5 my-auto">
            <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.03]">
              <span className="text-[10px] text-[#5B6472]">Indicadores Operativos</span>
              <span className="text-[10px] font-bold text-purple-400 font-mono">100% Visibilidad</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-blue-400 w-[90%]" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'web-moderna',
      badgeEmoji: '☁️',
      title: 'Soluciones Web Modernas',
      description:
        'Desarrollamos plataformas seguras, rápidas y escalables utilizando tecnologías modernas y arquitecturas orientadas al crecimiento.',
      icon: Cloud,
      bullets: [
        'Plataformas rápidas, seguras y escalables',
        'Tecnologías modernas de última generación',
        'Arquitecturas preparadas para crecer',
      ],
      graphic: (
        <div className="w-full h-36 rounded-xl bg-[#F7F8FA] border border-white/[0.08] p-3.5 flex flex-col justify-between relative overflow-hidden group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-[11px] font-mono text-[#5B6472] font-semibold flex items-center gap-1.5">
              <Cloud className="w-3.5 h-3.5 text-sky-400" /> TECH STACK
            </span>
            <span className="text-[9px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20">
              Moderno
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-auto text-center">
            <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.05]">
              <span className="text-[8px] text-[#5B6472] block">Velocidad</span>
              <span className="text-[10px] font-bold text-emerald-400 font-mono">Ultra Rápido</span>
            </div>
            <div className="p-1.5 rounded bg-white/[0.03] border border-white/[0.05]">
              <span className="text-[8px] text-[#5B6472] block">Escalabilidad</span>
              <span className="text-[10px] font-bold text-white font-mono">Modular</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section id="capacidades" spacing="comfortable" className="relative bg-[#F7F8FA] py-24 md:py-32 overflow-hidden">
      {/* Top and Bottom Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FFFFFF] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none z-10" />

      {/* Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.1)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-white/[0.08] text-[#35507A] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#35507A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#35507A]">
              NUESTRAS SOLUCIONES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight leading-tight">
            Nuestras Soluciones
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5B6472] leading-relaxed max-w-2xl mx-auto font-normal">
            Desarrollamos soluciones digitales personalizadas y adaptadas a las necesidades reales de tu organización.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {capabilities.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex"
              >
                <div className="relative group w-full flex flex-col justify-between rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#FFFFFF]/80 backdrop-blur-md p-6 sm:p-8 transition-all duration-350 hover:border-white/[0.22] hover:bg-[#FFFFFF]/90 hover:shadow-[0_25px_60px_rgba(15,23,42,0.6)] hover:-translate-y-1.5">
                  <div className="relative space-y-5">
                    {/* Header Row */}
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.badgeEmoji}</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-display tracking-tight group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Graphic Preview Box */}
                    {item.graphic}

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed font-normal min-h-[64px]">
                      {item.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 pt-2 border-t border-white/[0.06]">
                      {item.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#5B6472]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
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
