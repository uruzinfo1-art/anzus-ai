import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Clock, Layers } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const PersonasRoadmap: React.FC = () => {
  const roadmapSteps = [
    {
      id: 'amara',
      badgeEmoji: '❤️',
      name: 'AMARA',
      status: 'Disponible',
      tag: 'FASE 1',
      desc: 'Control financiero e inteligencia para tu hogar',
      isAvailable: true,
    },
    {
      id: 'nutricion',
      badgeEmoji: '🥗',
      name: 'Nutrición IA',
      status: 'Próximamente',
      tag: 'FASE 2',
      desc: 'Planes nutricionales y compras automatizadas',
      isAvailable: false,
    },
    {
      id: 'asistente',
      badgeEmoji: '📅',
      name: 'Asistente Personal',
      status: 'En desarrollo',
      tag: 'FASE 3',
      desc: 'Agenda, hábitos y organización del día a día',
      isAvailable: false,
    },
    {
      id: 'tutor',
      badgeEmoji: '📚',
      name: 'Tutor IA',
      status: 'En desarrollo',
      tag: 'FASE 4',
      desc: 'Planes de estudio y aprendizaje guiado',
      isAvailable: false,
    },
    {
      id: 'creador',
      badgeEmoji: '✍️',
      name: 'Creador IA',
      status: 'En desarrollo',
      tag: 'FASE 5',
      desc: 'Generador de contenido multicanal',
      isAvailable: false,
    },
    {
      id: 'hogar',
      badgeEmoji: '🏠',
      name: 'Hogar Inteligente',
      status: 'En desarrollo',
      tag: 'FASE 6',
      desc: 'Gestión unificada de tareas domésticas',
      isAvailable: false,
    },
  ];

  return (
    <Section spacing="comfortable" className="relative bg-[#FFFFFF] py-24 md:py-32 overflow-hidden">
      {/* Top and Bottom Smooth Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F7F8FA] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F7F8FA] to-transparent pointer-events-none z-10" />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F8FA] border border-white/[0.08] text-[#35507A] shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#35507A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#35507A]">
              LO QUE ESTAMOS CONSTRUYENDO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight leading-tight">
            Evolución Continua del Ecosistema
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5B6472] leading-relaxed max-w-2xl mx-auto font-normal">
            Cada nueva solución hace parte de un ecosistema que crecerá constantemente para ayudarte en diferentes aspectos de tu vida.
          </p>
        </div>

        {/* Timeline Grid / Pipeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Connecting Line Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-emerald-500/50 via-blue-500/30 to-white/[0.08]" />

          {/* Timeline Nodes */}
          <div className="space-y-8 lg:space-y-12 relative">
            {roadmapSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Block */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`relative group rounded-2xl border p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                        step.isAvailable
                          ? 'bg-[#F7F8FA]/90 border-emerald-500/40 shadow-[0_15px_40px_rgba(16,185,129,0.1)]'
                          : 'bg-[#FFFFFF]/80 border-white/[0.08] hover:border-white/[0.2]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="text-[10px] font-mono tracking-widest font-semibold uppercase text-[#5B6472]">
                          {step.tag}
                        </span>
                        <span
                          className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${
                            step.isAvailable
                              ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
                              : 'border-white/[0.1] text-[#5B6472] bg-white/[0.03]'
                          }`}
                        >
                          {step.isAvailable ? (
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Clock className="w-3 h-3 text-[#5B6472]" />
                          )}
                          {step.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl sm:text-3xl">{step.badgeEmoji}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-display">
                          {step.name}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Node Circle Center */}
                  <div className="relative z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#FFFFFF] border-2 border-white/[0.15] text-white shrink-0 shadow-lg">
                    {step.isAvailable ? (
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                    )}
                  </div>

                  {/* Empty Spacer for Desktop Layout */}
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
          <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed italic">
            "Cada nueva solución hace parte de un ecosistema que crecerá constantemente para ayudarte en diferentes aspectos de tu vida."
          </p>
        </div>
      </Container>
    </Section>
  );
};
