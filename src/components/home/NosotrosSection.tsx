import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  HeartHandshake,
  Lightbulb,
  Target,
  Search,
  Puzzle,
  TrendingUp,
  Compass,
  Eye,
  Users,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const NosotrosSection: React.FC = () => {
  const valores = [
    {
      id: 'cercania',
      emoji: '🤝',
      icon: HeartHandshake,
      title: 'Cercanía',
      text: 'Trabajamos junto a nuestros clientes durante todo el proyecto.',
    },
    {
      id: 'innovacion',
      emoji: '💡',
      icon: Lightbulb,
      title: 'Innovación',
      text: 'Aplicamos nuevas tecnologías para resolver problemas reales.',
    },
    {
      id: 'compromiso',
      emoji: '🎯',
      icon: Target,
      title: 'Compromiso',
      text: 'Cada proyecto recibe la misma dedicación y responsabilidad.',
    },
    {
      id: 'transparencia',
      emoji: '🔍',
      icon: Search,
      title: 'Transparencia',
      text: 'Compartimos avances, decisiones y mantenemos una comunicación constante.',
    },
    {
      id: 'personalizacion',
      emoji: '🧩',
      icon: Puzzle,
      title: 'Personalización',
      text: 'Cada solución se adapta a las necesidades de cada cliente.',
    },
    {
      id: 'evolucion',
      emoji: '📈',
      icon: TrendingUp,
      title: 'Evolución Continua',
      text: 'Las soluciones crecen junto con nuestros clientes.',
    },
  ];

  return (
    <Section
      id="nosotros"
      spacing="comfortable"
      className="relative bg-[#F7F8FA] py-24 md:py-32 overflow-hidden"
    >
      {/* Background Lighting and Gradients */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F7F8FA] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F7F8FA] to-transparent pointer-events-none z-10" />

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[1100px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10 space-y-20 md:space-y-28">
        {/* Header Principal */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-white/[0.08] text-[#5B6472] shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#35507A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#35507A]">
              NOSOTROS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight leading-tight"
          >
            Más que desarrollar tecnología, construimos relaciones de confianza.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#5B6472] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            En ANSUZ creemos que la mejor tecnología nace de comprender a las personas y los desafíos que enfrentan. Trabajamos de forma cercana, colaborativa y transparente para desarrollar soluciones que generen valor real.
          </motion.p>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#F7F8FA]/80 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between hover:border-white/[0.2] transition-all duration-300 shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-display">
                Nuestra misión
              </h3>
              <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed font-normal">
                Ayudar a personas, emprendedores y organizaciones a crecer mediante soluciones tecnológicas útiles, accesibles y desarrolladas con un enfoque humano.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#F7F8FA]/80 backdrop-blur-md p-8 sm:p-10 flex flex-col justify-between hover:border-white/[0.2] transition-all duration-300 shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-display">
                Nuestra visión
              </h3>
              <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed font-normal">
                Ser un aliado tecnológico reconocido por crear soluciones innovadoras, generar relaciones de confianza y acompañar el crecimiento de nuestros clientes a largo plazo.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Nuestros Valores */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-display">
              Nuestros valores
            </h3>
            <p className="text-sm sm:text-base text-[#5B6472] max-w-xl mx-auto">
              Los principios que guían cada conversación, decisión y proyecto que realizamos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {valores.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="h-full flex"
                >
                  <div className="relative group w-full rounded-2xl border border-white/[0.08] bg-[#F7F8FA] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-white/[0.2] hover:bg-[#FFFFFF] hover:-translate-y-1 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border border-white/[0.1] text-[#0F172A] flex items-center justify-center group-hover:border-white/[0.25] group-hover:scale-105 transition-all">
                          <IconComponent className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="text-xl">{item.emoji}</span>
                      </div>

                      <h4 className="text-lg font-bold text-[#0F172A] font-display group-hover:text-white transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-sm text-[#5B6472] leading-relaxed font-normal">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Nuestra Filosofía */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl md:rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#FFFFFF] to-[#F7F8FA] p-8 sm:p-12 overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 text-blue-400 flex items-center justify-center mx-auto shadow-inner">
              <Users className="w-7 h-7" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 block">
              Nuestra filosofía
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-display tracking-tight">
              Desarrollamos contigo, no solo para ti.
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-[#5B6472] leading-relaxed font-normal max-w-2xl mx-auto">
              Cada proyecto se construye mediante colaboración, comunicación y mejora continua. Escuchamos, proponemos, desarrollamos y evolucionamos cada solución junto a nuestros clientes.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-medium text-[#5B6472]">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Escuchamos</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Proponemos</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Desarrollamos</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Evolucionamos</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sección Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl md:rounded-3xl border border-white/[0.12] bg-[#F7F8FA] p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-inner">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0F172A] font-display mb-4 tracking-tight">
            Cada proyecto es una oportunidad para generar valor.
          </h3>

          <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed max-w-2xl mx-auto font-normal">
            Nuestro propósito es desarrollar soluciones tecnológicas que simplifiquen procesos, impulsen el crecimiento y construyan relaciones de confianza a largo plazo.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};
