import React from 'react';
import { motion } from 'motion/react';
import {
  Store,
  UtensilsCrossed,
  Coffee,
  Scissors,
  Stethoscope,
  Scale,
  Ruler,
  Palette,
  Camera,
  Video,
  ShoppingBag,
  Dumbbell,
  Wrench,
  Users,
  Laptop,
  Sparkles,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const NegociosSectors: React.FC = () => {
  const sectors = [
    { name: 'Restaurantes & Cafeterías', emoji: '☕', icon: Coffee },
    { name: 'Tiendas físicas & Virtuales', emoji: '🛍️', icon: ShoppingBag },
    { name: 'Barberías & Peluquerías', emoji: '💈', icon: Scissors },
    { name: 'Consultorios & Salud', emoji: '🩺', icon: Stethoscope },
    { name: 'Abogados independientes', emoji: '⚖️', icon: Scale },
    { name: 'Arquitectos & Diseñadores', emoji: '📐', icon: Ruler },
    { name: 'Fotógrafos & Creadores', emoji: '📸', icon: Camera },
    { name: 'Gimnasios & Estudios', emoji: '🏋️', icon: Dumbbell },
    { name: 'Talleres & Servicios', emoji: '🛠️', icon: Wrench },
    { name: 'Emprendimientos familiares', emoji: '🏪', icon: Store },
    { name: 'Freelancers & Creadores', emoji: '💻', icon: Laptop },
    { name: 'Profesionales independientes', emoji: '🎨', icon: Palette },
  ];

  return (
    <Section spacing="comfortable" className="relative bg-[#FFFFFF] py-24 overflow-hidden">
      {/* Top and Bottom Smooth Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FFFFFF] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFFFF] to-transparent pointer-events-none z-10" />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F8FA] border border-white/[0.08] text-[#35507A] shadow-sm">
            <span className="text-xs">🏪</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#35507A]">
              NEGOCIOS & EMPRENDIMIENTOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] font-display tracking-tight leading-tight">
            Diseñado para Emprendedores y Pequeños Negocios
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#5B6472] max-w-xl mx-auto leading-relaxed">
            Adaptamos la tecnología a las necesidades reales y cotidianas de tu actividad.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {sectors.map((sector, index) => {
            const IconComp = sector.icon;

            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#FFFFFF]/80 backdrop-blur-md p-5 flex items-center gap-3.5 transition-all duration-250 hover:border-white/[0.2] hover:bg-[#FFFFFF]/90 hover:-translate-y-0.5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-white/[0.08] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-lg">{sector.emoji}</span>
                </div>

                <span className="text-xs sm:text-sm font-semibold text-[#5B6472] group-hover:text-white transition-colors leading-tight font-display">
                  {sector.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Phrase */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-5 rounded-2xl bg-[#F7F8FA] border border-white/[0.08] shadow-md">
          <p className="text-sm text-[#E2E5EA] font-medium leading-relaxed">
            ✨ Si buscas ahorrar tiempo, atender mejor a tus clientes u organizar tus ventas, <span className="text-[#35507A] font-bold">podemos ayudarte.</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};

