import React from 'react';
import { motion } from 'motion/react';
import {
  HeartHandshake,
  Target,
  Lightbulb,
  Search,
  Puzzle,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const EmpresasWhyUs: React.FC = () => {
  const values = [
    {
      id: 'cercania',
      icon: HeartHandshake,
      badgeEmoji: '🤝',
      title: 'Cercanía',
      description:
        'Nos involucramos en cada proyecto como un aliado, manteniendo una comunicación cercana durante todo el proceso.',
    },
    {
      id: 'compromiso',
      icon: Target,
      badgeEmoji: '🎯',
      title: 'Compromiso',
      description:
        'Cada solución que desarrollamos busca resolver un problema real y generar un impacto positivo.',
    },
    {
      id: 'innovacion',
      icon: Lightbulb,
      badgeEmoji: '💡',
      title: 'Innovación',
      description:
        'Exploramos nuevas tecnologías e inteligencia artificial para crear soluciones modernas y útiles.',
    },
    {
      id: 'transparencia',
      icon: Search,
      badgeEmoji: '🔍',
      title: 'Transparencia',
      description:
        'Creemos en una comunicación clara, avances constantes y decisiones compartidas durante todo el proyecto.',
    },
    {
      id: 'personalizacion',
      icon: Puzzle,
      badgeEmoji: '🧩',
      title: 'Personalización',
      description:
        'Cada organización es diferente. Diseñamos soluciones adaptadas a su realidad, nunca proyectos genéricos.',
    },
    {
      id: 'evolucion',
      icon: TrendingUp,
      badgeEmoji: '📈',
      title: 'Evolución',
      description:
        'Las soluciones crecen junto con nuestros clientes. Siempre buscamos mejorar, optimizar y evolucionar.',
    },
  ];

  return (
    <Section spacing="comfortable" className="relative bg-[#FFFFFF] py-24 overflow-hidden">
      {/* Top and Bottom Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FFFFFF] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none z-10" />

      {/* Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-white/[0.08] text-[#35507A] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#35507A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#35507A]">
              Nuestra esencia
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight leading-tight">
            Creemos que la mejor tecnología nace de escuchar.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5B6472] max-w-2xl mx-auto leading-relaxed font-normal">
            En ANSUZ no comenzamos escribiendo código. Comenzamos entendiendo a las personas, sus procesos, sus objetivos y los desafíos que quieren resolver. Creemos que las mejores soluciones tecnológicas se construyen en conjunto con nuestros clientes.
          </p>
        </div>

        {/* 6 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {values.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full flex"
              >
                <div className="relative group w-full flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#FFFFFF]/80 backdrop-blur-md p-6 transition-all duration-300 hover:border-white/[0.22] hover:bg-[#FFFFFF]/90 hover:-translate-y-1 shadow-md">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border border-white/[0.1] text-white flex items-center justify-center group-hover:scale-105 group-hover:border-white/[0.3] transition-all">
                        <IconComp className="w-6 h-6 text-[#35507A]" />
                      </div>
                      <span className="text-2xl">{item.badgeEmoji}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0F172A] font-display tracking-tight group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed font-normal">
                      {item.description}
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
