import React from 'react';
import { motion } from 'motion/react';
import { Layers, HeartHandshake } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const EmpresasApproach: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Escuchamos',
      desc: 'Conocemos tus necesidades, tus procesos y tus objetivos antes de plantear cualquier solución.',
    },
    {
      num: '2',
      title: 'Construimos la idea',
      desc: 'Analizamos alternativas y definimos contigo el camino que mejor se adapta a tu organización.',
    },
    {
      num: '3',
      title: 'Desarrollamos en conjunto',
      desc: 'Compartimos avances constantemente para validar que la solución evolucione en la dirección correcta.',
    },
    {
      num: '4',
      title: 'Implementamos',
      desc: 'Ponemos la solución en funcionamiento acompañándote durante la transición.',
    },
    {
      num: '5',
      title: 'Evolucionamos',
      desc: 'Seguimos a tu lado para mejorar la solución y adaptarla a los nuevos desafíos de tu organización.',
    },
  ];

  return (
    <Section spacing="comfortable" className="relative bg-[#182231] py-24 md:py-32 overflow-hidden">
      {/* Top and Bottom Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0E141D] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#101722] to-transparent pointer-events-none z-10" />

      {/* Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D131E] border border-white/[0.08] text-[#BFC5CC] shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#BFC5CC]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BFC5CC]">
              Cómo trabajamos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E6E8EB] font-display tracking-tight leading-tight">
            Desarrollamos contigo, no solo para ti.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#8892B0] leading-relaxed max-w-2xl mx-auto font-normal">
            Nuestro proceso está basado en la colaboración. Queremos que formes parte del proyecto desde la primera conversación hasta la implementación.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Central Connecting Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-500/50 via-indigo-500/40 to-white/[0.08]" />

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
                        <span className="w-8 h-8 rounded-xl bg-[#141C2B] border border-white/[0.1] text-xs font-bold text-blue-400 font-mono flex items-center justify-center">
                          0{step.num}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#E6E8EB] font-display">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#8892B0] leading-relaxed font-normal">
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

        {/* Sección Final / Banner de Confianza */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-3xl mx-auto rounded-3xl border border-white/[0.12] bg-gradient-to-b from-[#111A28] to-[#0D1420] p-8 sm:p-10 text-center shadow-2xl"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 text-blue-300 flex items-center justify-center mx-auto mb-5 shadow-inner">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-[#E6E8EB] font-display mb-3 tracking-tight">
            Más que desarrollar software, construimos relaciones de confianza.
          </h3>

          <p className="text-sm sm:text-base text-[#8892B0] leading-relaxed max-w-xl mx-auto">
            Cada proyecto representa un compromiso con nuestros clientes. Trabajamos de forma cercana, escuchamos sus necesidades y desarrollamos soluciones que evolucionan junto con ellos.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};
