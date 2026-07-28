import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';

export const EmpresasCta: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contacto';
    }
  };

  const scrollToCapabilities = () => {
    const el = document.querySelector('#capacidades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#capacidades';
    }
  };

  return (
    <Section spacing="comfortable" className="relative overflow-hidden bg-[#1B2940] py-24 md:py-32">
      {/* Top and Bottom Smooth Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#182231] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#090C11] to-transparent pointer-events-none z-10" />

      {/* Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[900px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(72,113,184,0.22)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/[0.15] bg-[#0E1522]/90 backdrop-blur-xl p-8 sm:p-12 md:p-16 text-center shadow-[0_30px_70px_rgba(0,0,0,0.6)] space-y-8 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-[#CBD5E1]">
            <Sparkles className="w-3.5 h-3.5 text-[#93C5FD]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
              SOLUCIONES TECNOLÓGICAS DE ALTO NIVEL
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Construyamos la solución digital que tu organización necesita.
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto font-normal">
            Si buscas optimizar procesos, conectar plataformas, desarrollar sistemas a medida o implementar inteligencia artificial, en ANSUZ te acompañamos en cada etapa del proyecto con calidad técnica y atención cercana.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={scrollToContact}
              className="w-full sm:w-auto text-xs sm:text-sm tracking-wider font-semibold px-8 py-4"
            >
              HABLAR CON UN ESPECIALISTA
            </Button>

            <Button
              variant="outline"
              size="lg"
              leftIcon={<MessageSquare className="w-4 h-4" />}
              onClick={scrollToContact}
              className="w-full sm:w-auto text-xs sm:text-sm tracking-wider border-white/[0.15] text-[#CBD5E1] hover:bg-white/[0.05] px-8 py-4"
            >
              INICIAR UN PROYECTO
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
