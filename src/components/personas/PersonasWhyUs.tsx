import React from 'react';
import { motion } from 'motion/react';
import { Users, Sparkles, Layers } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const PersonasWhyUs: React.FC = () => {
  const reasons = [
    {
      id: 'personas-reales',
      icon: Users,
      badgeEmoji: '👤',
      title: 'Pensado para personas reales',
      description: 'Creamos herramientas enfocadas en resolver problemas cotidianos.',
      accent: 'border-blue-500/30 bg-blue-500/5',
    },
    {
      id: 'ia-util',
      icon: Sparkles,
      badgeEmoji: '✨',
      title: 'Inteligencia Artificial útil',
      description: 'La IA debe ayudarte a ahorrar tiempo y tomar mejores decisiones.',
      accent: 'border-indigo-500/30 bg-indigo-500/5',
    },
    {
      id: 'ecosistema-conectado',
      icon: Layers,
      badgeEmoji: '🌐',
      title: 'Un ecosistema conectado',
      description: 'Todas nuestras soluciones evolucionan para trabajar juntas y ofrecer una mejor experiencia.',
      accent: 'border-[#35507A]/30 bg-[#35507A]/5',
    },
  ];

  return (
    <Section spacing="comfortable" className="relative bg-[#F7F8FA] py-24 overflow-hidden">
      {/* Top and Bottom Smooth Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FFFFFF] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none z-10" />

      {/* Radial Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight leading-tight">
            ¿Por qué elegir ANSUZ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#5B6472] max-w-xl mx-auto leading-relaxed">
            Diseñamos tecnología centrada en las necesidades de las personas, sin complicaciones innecesarias.
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
                <div className="relative group w-full flex flex-col justify-between rounded-2xl md:rounded-3xl border border-[#0F172A]/[0.08] bg-[#FFFFFF]/80 backdrop-blur-md p-8 transition-all duration-300 hover:border-white/[0.22] hover:bg-[#FFFFFF]/90 hover:-translate-y-1 shadow-lg">
                  <div className="space-y-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFFFFF] border border-[#0F172A]/[0.1] text-[#0F172A] flex items-center justify-center group-hover:scale-105 group-hover:border-white/[0.3] transition-all">
                      <IconComp className="w-7 h-7 text-[#35507A]" />
                    </div>

                    <h3 className="text-xl font-bold text-[#0F172A] font-display tracking-tight group-hover:text-white transition-colors">
                      {reason.title}
                    </h3>

                    <p className="text-sm text-[#5B6472] leading-relaxed font-normal">
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
