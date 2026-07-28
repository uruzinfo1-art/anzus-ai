import React from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const NegociosProcess: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Conocemos tu negocio',
      desc: 'Entendemos tus procesos actuales, desafíos diarios y metas de crecimiento a corto y mediano plazo.',
    },
    {
      num: '2',
      title: 'Identificamos oportunidades',
      desc: 'Analizamos dónde estás perdiendo tiempo o ventas y detectamos las áreas de mayor impacto rápido.',
    },
    {
      num: '3',
      title: 'Diseñamos tu solución',
      desc: 'Creamos una propuesta a medida sin complicaciones innecesarias, enfocada 100% en tus objetivos reales.',
    },
    {
      num: '4',
      title: 'Implementamos la tecnología',
      desc: 'Configuramos, integramos y probamos cada herramienta asegurando que funcione sin interrumpir tu operación.',
    },
    {
      num: '5',
      title: 'Te acompañamos en el crecimiento',
      desc: 'Capacitamos a tu equipo y te brindamos soporte continuo para evolucionar las soluciones a medida que creces.',
    },
  ];

  return (
    <Section spacing="comfortable" className="relative bg-[#182231] py-24 md:py-32 overflow-hidden">
      {/* Top and Bottom Smooth Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0E141D] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#101722] to-transparent pointer-events-none z-10" />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D131E] border border-white/[0.08] text-[#BFC5CC] shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#BFC5CC]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BFC5CC]">
              NUESTRO PROCESO DE TRABAJO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E6E8EB] font-display tracking-tight leading-tight">
            Un Camino Claro y Estructurado
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#8892B0] leading-relaxed max-w-2xl mx-auto font-normal">
            Pasos sencillos en 5 etapas pensados para minimizar la fricción y maximizar los resultados de tu negocio.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Connecting Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-500/50 via-emerald-500/30 to-white/[0.08]" />

          <div className="space-y-8 md:space-y-12 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card Content */}
                  <div className="w-full md:w-1/2">
                    <div className="relative group rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0C121C]/80 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-white/[0.22] hover:bg-[#111826]/90 hover:-translate-y-1 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 rounded-xl bg-[#141C2B] border border-white/[0.1] text-xs font-bold text-emerald-400 font-mono flex items-center justify-center">
                          0{step.num}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#E6E8EB] font-display">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#8892B0] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Step Badge Node */}
                  <div className="relative z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#121B28] border-2 border-white/[0.2] text-white font-bold font-mono text-sm shrink-0 shadow-lg">
                    {step.num}
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
