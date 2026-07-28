import React from 'react';
import { motion } from 'motion/react';
import { Target, Sliders, TrendingUp } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const NegociosWhyUs: React.FC = () => {
  const reasons = [
    {
      id: 'resultados',
      icon: Target,
      badgeEmoji: '🎯',
      title: 'Pensamos en resultados',
      description: 'Nuestro objetivo no es vender software, sino ayudarte a trabajar mejor, ahorrar tiempo y crecer.',
    },
    {
      id: 'adaptadas',
      icon: Sliders,
      badgeEmoji: '🧩',
      title: 'Soluciones adaptadas',
      description: 'Cada negocio es diferente. Diseñamos e implementamos soluciones que responden a tus necesidades reales.',
    },
    {
      id: 'evolucion',
      icon: TrendingUp,
      badgeEmoji: '📈',
      title: 'Tecnología que evoluciona contigo',
      description: 'A medida que tu negocio escala y requiere nuevos módulos, nuestras soluciones crecen a tu ritmo.',
    },
  ];

  return (
    <Section spacing="comfortable" className="relative bg-[#101722] py-24 overflow-hidden">
      {/* Top and Bottom Smooth Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#182231] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1B2940] to-transparent pointer-events-none z-10" />

      {/* Radial Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E6E8EB] font-display tracking-tight leading-tight">
            ¿Por qué elegir ANSUZ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#8892B0] max-w-xl mx-auto leading-relaxed">
            Un aliado tecnológico comprometido con la eficiencia y el éxito sostenido de tu negocio.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {reasons.map((reason, index) => {
            const IconComp = reason.icon;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="h-full flex"
              >
                <div className="relative group w-full flex flex-col justify-between rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0C121C]/80 backdrop-blur-md p-8 transition-all duration-300 hover:border-white/[0.22] hover:bg-[#111826]/90 hover:-translate-y-1 shadow-lg">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#141B28] border border-white/[0.1] text-white flex items-center justify-center group-hover:scale-105 group-hover:border-white/[0.3] transition-all">
                        <IconComp className="w-7 h-7 text-[#93C5FD]" />
                      </div>
                      <span className="text-2xl">{reason.badgeEmoji}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#E6E8EB] font-display tracking-tight group-hover:text-white transition-colors">
                      {reason.title}
                    </h3>

                    <p className="text-sm text-[#8892B0] leading-relaxed font-normal">
                      {reason.description}
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
