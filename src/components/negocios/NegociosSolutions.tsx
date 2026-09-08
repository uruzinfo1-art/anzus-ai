import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Bot,
  MessageSquare,
  TrendingUp,
  CalendarCheck,
  Layers,
  Rocket,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  MessageCircle,
  Zap,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

interface Solution {
  id: string;
  badgeEmoji: string;
  title: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  accentColor: string;
  benefits: string[];
  graphic: React.ReactNode;
}

export const NegociosSolutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  const solutions: Solution[] = [
    {
      id: 'automatizacion',
      badgeEmoji: '🤖',
      title: 'Automatización de Tareas',
      description:
        'Automatizamos tareas repetitivas, envíos de confirmaciones y avisos para que puedas dedicar más tiempo a hacer crecer tu negocio.',
      icon: Bot,
      accentColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
      benefits: [
        'Ahorro de hasta 15 horas semanales en tareas manuales',
        'Cero errores en el procesamiento de pedidos o registros',
        'Flujos sencillos diseñados a la medida de tu trabajo diario',
      ],
      graphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#F7F8FA] border border-[#0F172A]/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-[#0F172A]/[0.06] pb-2">
            <span className="text-xs font-mono text-[#5B6472] font-semibold">FLUJO DE AUTOMATIZACIÓN</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Activo 24/7
            </span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between p-2 rounded-lg bg-[#0F172A]/[0.03] border border-[#0F172A]/[0.05]">
              <span className="text-xs text-[#0F172A] font-medium flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" /> Disparador: Consulta o Pedido
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">Ejecutado</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-xs text-emerald-200 font-medium">✨ Confirmar + Notificar por WhatsApp</span>
              <span className="text-[10px] text-emerald-300 font-mono">0.4s</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'atencion',
      badgeEmoji: '💬',
      title: 'Atención al Cliente & WhatsApp',
      description:
        'Asistentes inteligentes para responder preguntas frecuentes, agendar citas y brindar soporte inmediato en WhatsApp, sitio web y redes sociales.',
      icon: MessageSquare,
      accentColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      benefits: [
        'Respuesta instantánea las 24 horas, los 365 días del año',
        'Atención de preguntas frecuentes sin perder ventas',
        'Sincronización directa con tu catálogo, precios y servicios',
      ],
      graphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#F7F8FA] border border-[#0F172A]/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-[#0F172A]/[0.06] pb-2">
            <span className="text-xs font-mono text-[#5B6472] font-semibold flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" /> BOT WHATSAPP
            </span>
            <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
              IA Entrenada
            </span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="p-2 rounded-lg bg-[#0F172A]/[0.04] text-xs text-[#5B6472] max-w-[85%]">
              "Hola, ¿cuáles son los horarios y disponibilidad de turnos?"
            </div>
            <div className="p-2 rounded-lg bg-[#FFFFFF] border border-blue-500/30 text-xs text-[#0F172A] max-w-[90%] ml-auto text-right">
              "¡Hola! Atendemos de 9am a 7pm. Te envío los turnos libres para hoy y te los confirmo al instante. 🗓️"
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ventas',
      badgeEmoji: '📈',
      title: 'Organización de Clientes y Ventas',
      description:
        'Organizamos tus contactos, oportunidades, presupuestos y ventas para que no pierdas ningún prospecto y puedas hacer crecer tu negocio.',
      icon: TrendingUp,
      accentColor: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
      benefits: [
        'Embudo de ventas claro y ordenado en tiempo real',
        'Recordatorios automáticos de seguimiento a clientes',
        'Mayor control de tus ingresos y oportunidades',
      ],
      graphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#F7F8FA] border border-[#0F172A]/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-[#0F172A]/[0.06] pb-2">
            <span className="text-xs font-mono text-[#5B6472] font-semibold">MIS CLIENTES Y VENTAS</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Ventas en Crecimiento
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-auto text-center">
            <div className="p-2 rounded-lg bg-[#0F172A]/[0.03] border border-[#0F172A]/[0.05]">
              <span className="text-[9px] text-[#5B6472] block">Consultas</span>
              <span className="text-xs font-bold text-[#0F172A]">18</span>
            </div>
            <div className="p-2 rounded-lg bg-[#0F172A]/[0.03] border border-[#0F172A]/[0.05]">
              <span className="text-[9px] text-[#5B6472] block">Presupuestos</span>
              <span className="text-xs font-bold text-[#0F172A]">7</span>
            </div>
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-[9px] text-emerald-300 block">Concretados</span>
              <span className="text-xs font-bold text-emerald-400">12</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'citas',
      badgeEmoji: '🗓️',
      title: 'Gestión de Citas y Reservas',
      description:
        'Permite a tus clientes agendar citas o servicios directamente, con confirmaciones y recordatorios automáticos para reducir cancelaciones.',
      icon: CalendarCheck,
      accentColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      benefits: [
        'Agendamiento autónomo de turnos las 24 horas',
        'Recordatorios automáticos por WhatsApp que evitan inasistencias',
        'Sincronización directa con tu calendario personal',
      ],
      graphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#F7F8FA] border border-[#0F172A]/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-[#0F172A]/[0.06] pb-2">
            <span className="text-xs font-mono text-[#5B6472] font-semibold">AGENDA DE CITAS</span>
            <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
              Turnos Llenos
            </span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between p-2 rounded-lg bg-[#0F172A]/[0.03]">
              <span className="text-xs text-[#5B6472]">Citas Confirmadas esta semana</span>
              <span className="text-xs font-bold text-emerald-400 font-mono">24 Turnos</span>
            </div>
            <div className="w-full h-1.5 bg-[#0F172A]/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 w-[85%]" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'integraciones',
      badgeEmoji: '⚙️',
      title: 'Conexión de tus Aplicaciones',
      description:
        'Conectamos las herramientas que ya usas (WhatsApp, correo, planillas de cálculo, cobros) para que funcionen unificadas sin copiar datos a mano.',
      icon: Layers,
      accentColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      benefits: [
        'Cero copia manual de información entre sistemas',
        'Sincronización instantánea de tus ventas y mensajes',
        'Trabajo organizado sin cambiar tus aplicaciones favoritas',
      ],
      graphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#F7F8FA] border border-[#0F172A]/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-[#0F172A]/[0.06] pb-2">
            <span className="text-xs font-mono text-[#5B6472] font-semibold">SISTEMA CONECTADO</span>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              Sincronizado
            </span>
          </div>
          <div className="flex items-center justify-around my-auto text-xs text-[#0F172A]">
            <div className="px-2.5 py-1.5 rounded-lg bg-[#0F172A]/[0.05] border border-[#0F172A]/[0.1]">WhatsApp</div>
            <span className="text-amber-400 font-bold">↔</span>
            <div className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-200">ANSUZ</div>
            <span className="text-amber-400 font-bold">↔</span>
            <div className="px-2.5 py-1.5 rounded-lg bg-[#0F172A]/[0.05] border border-[#0F172A]/[0.1]">Planillas</div>
          </div>
        </div>
      ),
    },
    {
      id: 'transformacion',
      badgeEmoji: '🚀',
      title: 'Impulso y Digitalización',
      description:
        'Diseñamos e implementamos un plan sencillo a la medida de tu negocio para digitalizar tus procesos de forma práctica.',
      icon: Rocket,
      accentColor: 'border-[#35507A]/40 text-[#35507A] bg-[#35507A]/10',
      benefits: [
        'Diagnóstico directo de las necesidades de tu negocio',
        'Plan claro dividido en pasos fáciles de implementar',
        'Acompañamiento cercano para que adaptes cada herramienta',
      ],
      graphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#F7F8FA] border border-[#0F172A]/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-[#0F172A]/[0.06] pb-2">
            <span className="text-xs font-mono text-[#5B6472] font-semibold">PLAN A TU MEDIDA</span>
            <span className="text-[10px] font-mono text-[#35507A] bg-[#35507A]/10 px-2 py-0.5 rounded-full border border-[#35507A]/20">
              Ágil
            </span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="p-2 rounded-lg bg-[#0F172A]/[0.03] border border-[#0F172A]/[0.05] flex items-center justify-between">
              <span className="text-xs text-[#0F172A] font-medium">🎯 Digitalización de mi Negocio</span>
              <span className="text-[10px] text-emerald-400 font-mono">100% Personalizado</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section id="soluciones" spacing="comfortable" className="relative bg-[#F7F8FA] py-24 md:py-32 overflow-hidden">
      {/* Top and Bottom Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FFFFFF] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none z-10" />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.1)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#0F172A]/[0.08] text-[#35507A] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#35507A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#35507A]">
              ¿CÓMO PODEMOS AYUDARTE?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight leading-tight">
            Soluciones Diseñadas para Impulsar tu Crecimiento
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5B6472] leading-relaxed max-w-2xl mx-auto font-normal">
            No vendemos software genérico. Implementamos soluciones reales adaptadas a los objetivos concretos de tu negocio.
          </p>
        </div>

        {/* 6 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {solutions.map((solution, index) => {
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex"
              >
                <div className="relative group w-full flex flex-col justify-between rounded-2xl md:rounded-3xl border border-[#0F172A]/[0.08] bg-[#FFFFFF]/80 backdrop-blur-md p-6 sm:p-8 transition-all duration-350 hover:border-white/[0.22] hover:bg-[#FFFFFF]/90 hover:shadow-[0_25px_60px_rgba(15,23,42,0.6)] hover:-translate-y-1.5">
                  {/* Subtle top inner sheen */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-t-2xl md:rounded-t-3xl" />

                  <div className="relative space-y-5">
                    {/* Header Row */}
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{solution.badgeEmoji}</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-display tracking-tight group-hover:text-white transition-colors">
                        {solution.title}
                      </h3>
                    </div>

                    {/* Preview Graphic Box */}
                    {solution.graphic}

                    {/* Description */}
                    <p className="text-sm text-[#5B6472] leading-relaxed font-normal min-h-[72px]">
                      {solution.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="relative pt-6 mt-6 border-t border-[#0F172A]/[0.06]">
                    <button
                      type="button"
                      onClick={() => setSelectedSolution(solution)}
                      className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-[#FFFFFF] border border-[#0F172A]/[0.1] text-xs sm:text-sm font-semibold tracking-wide text-[#0F172A] hover:bg-[#FFFFFF] hover:border-white/[0.25] hover:text-white transition-all duration-250 shadow-sm"
                    >
                      <span>Conocer detalles</span>
                      <ArrowRight className="w-4 h-4 text-[#35507A] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Detail view */}
        <AnimatePresence>
          {selectedSolution && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedSolution(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg rounded-3xl border border-[#0F172A]/[0.15] bg-[#F7F8FA] p-6 sm:p-8 space-y-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedSolution(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-[#0F172A]/[0.05] text-[#5B6472] hover:text-white hover:bg-white/[0.1] transition-all"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedSolution.badgeEmoji}</span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#0F172A] font-display">
                      {selectedSolution.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#5B6472] leading-relaxed">
                  {selectedSolution.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#0F172A]/[0.08]">
                  <h4 className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider font-mono">
                    BENEFICIOS PRINCIPALES
                  </h4>
                  <ul className="space-y-2">
                    {selectedSolution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#5B6472]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSolution(null);
                      const contactEl = document.querySelector('#contacto');
                      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 rounded-xl bg-[#35507A] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#2A4064] transition-colors"
                  >
                    Solicitar asesoría para mi negocio
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
};

