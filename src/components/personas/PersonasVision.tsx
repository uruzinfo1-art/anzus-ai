import React from 'react';
import { motion } from 'motion/react';
import { Zap, Brain, Heart, Sparkles } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const PersonasVision: React.FC = () => {
  const pillars = [
    {
      id: 'ahorra-tiempo',
      icon: Zap,
      badge: '⚡',
      title: 'Ahorra tiempo',
      description:
        'Automatiza tareas repetitivas y actividades cotidianas para recuperar horas valiosas en tu semana y dedicarlas a lo que realmente importa.',
      glow: 'from-[#3B82F6]/15 to-transparent',
    },
    {
      id: 'toma-decisiones',
      icon: Brain,
      badge: '🧠',
      title: 'Toma mejores decisiones',
      description:
        'Obtén análisis claros, recomendaciones personalizadas y datos en tiempo real que te permiten planificar tus metas con total claridad.',
      glow: 'from-[#6366F1]/15 to-transparent',
    },
    {
      id: 'simplifica-dia',
      icon: Heart,
      badge: '❤️',
      title: 'Simplifica tu día',
      description:
        'Disfruta de un entorno sin fricciones donde todas tus herramientas comparten la misma filosofía: hacer tu vida cotidiana más ligera.',
      glow: 'from-[#4871B8]/15 to-transparent',
    },
  ];

  return (
    <Section spacing="comfortable" className="relative bg-[#121B28] py-24 overflow-hidden">
      {/* Top and Bottom Smooth Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#090C11] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0E141D] to-transparent pointer-events-none z-10" />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[900px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C121C] border border-white/[0.08] text-[#BFC5CC] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#BFC5CC]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BFC5CC]">
              NUESTRA FILOSOFÍA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E6E8EB] font-display tracking-tight leading-tight">
            Más que aplicaciones. Un ecosistema pensado para ti.
          </h2>

          <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#8892B0] leading-relaxed max-w-2xl mx-auto font-normal">
            <p>
              La mayoría de las aplicaciones resuelven un solo problema. Nosotros creemos que la tecnología debe trabajar de forma integrada para ayudarte a organizar mejor tu vida.
            </p>
            <p className="text-[#CBD5E1]">
              Por eso estamos construyendo un ecosistema de soluciones inteligentes que evolucionan constantemente y comparten una misma filosofía: ayudarte a vivir de forma más simple.
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pillars.map((pillar, index) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group h-full flex flex-col justify-between rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0C121C]/80 backdrop-blur-md p-8 transition-all duration-300 hover:border-white/[0.2] hover:bg-[#111826]/90 hover:-translate-y-1 shadow-lg"
              >
                {/* Subtle top ambient glow */}
                <div className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b ${pillar.glow} pointer-events-none rounded-t-2xl md:rounded-t-3xl`} />

                <div className="relative space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#141B28] border border-white/[0.1] text-white flex items-center justify-center group-hover:scale-105 group-hover:border-white/[0.3] transition-all duration-300 shadow-md">
                    <IconComp className="w-7 h-7 text-[#93C5FD]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#E6E8EB] font-display tracking-tight group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#8892B0] leading-relaxed font-normal">
                    {pillar.description}
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
