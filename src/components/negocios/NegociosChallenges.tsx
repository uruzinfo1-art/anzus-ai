import React from 'react';
import { motion } from 'motion/react';
import { Clock, TrendingUp, Users, Settings, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const NegociosChallenges: React.FC = () => {
  const challenges = [
    {
      id: 'falta-tiempo',
      icon: Clock,
      badgeEmoji: '⏳',
      title: 'Falta de tiempo',
      description:
        'Responder mensajes, organizar información y realizar tareas repetitivas consume gran parte del día.',
      accent: 'border-amber-500/30 bg-amber-500/5',
    },
    {
      id: 'crecimiento-limitado',
      icon: TrendingUp,
      badgeEmoji: '📈',
      title: 'Crecimiento limitado',
      description:
        'Sin herramientas adecuadas es difícil atender más clientes sin aumentar exponencialmente la carga de trabajo.',
      accent: 'border-blue-500/30 bg-blue-500/5',
    },
    {
      id: 'atencion-cliente',
      icon: Users,
      badgeEmoji: '🤝',
      title: 'Atención al cliente',
      description:
        'Responder siempre las mismas preguntas de forma manual reduce la productividad y genera demoras.',
      accent: 'border-indigo-500/30 bg-indigo-500/5',
    },
    {
      id: 'procesos-desorganizados',
      icon: Settings,
      badgeEmoji: '⚙️',
      title: 'Procesos desorganizados',
      description:
        'La información suele estar dispersa entre diferentes aplicaciones, planillas y documentos no sincronizados.',
      accent: 'border-emerald-500/30 bg-emerald-500/5',
    },
  ];

  return (
    <Section spacing="comfortable" className="relative bg-[#121B28] py-24 overflow-hidden">
      {/* Top and Bottom Smooth Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#090C11] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0E141D] to-transparent pointer-events-none z-10" />

      {/* Radial Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[900px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C121C] border border-white/[0.08] text-[#BFC5CC] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#BFC5CC]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BFC5CC]">
              EL RETO DÍA A DÍA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E6E8EB] font-display tracking-tight leading-tight">
            Sabemos lo difícil que es hacer crecer un negocio.
          </h2>

          <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#8892B0] leading-relaxed max-w-2xl mx-auto font-normal">
            <p>
              La mayoría de los emprendedores dedican demasiado tiempo a tareas repetitivas, atención al cliente, organización y administración.
            </p>
            <p className="text-[#CBD5E1]">
              Nuestra misión es ayudarte a reducir ese trabajo para que puedas enfocarte en lo más importante: hacer crecer tu negocio.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {challenges.map((challenge, index) => {
            const IconComp = challenge.icon;
            return (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex"
              >
                <div className="relative group w-full flex flex-col justify-between rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0C121C]/80 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-white/[0.22] hover:bg-[#111826]/90 hover:-translate-y-1 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#141B28] border border-white/[0.1] text-white flex items-center justify-center group-hover:scale-105 group-hover:border-white/[0.3] transition-all">
                        <IconComp className="w-6 h-6 text-[#93C5FD]" />
                      </div>
                      <span className="text-2xl">{challenge.badgeEmoji}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#E6E8EB] font-display tracking-tight group-hover:text-white transition-colors">
                      {challenge.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8892B0] leading-relaxed font-normal">
                      {challenge.description}
                    </p>
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
