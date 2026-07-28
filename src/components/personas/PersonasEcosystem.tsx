import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  Heart,
  Utensils,
  Calendar,
  BookOpen,
  PenTool,
  Home,
  X,
  TrendingUp,
  PieChart,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

interface Product {
  id: string;
  badgeEmoji: string;
  name: string;
  status: 'Disponible' | 'Próximamente' | 'En desarrollo';
  description: string;
  ctaText: string;
  icon: React.FC<{ className?: string }>;
  accentColor: string;
  previewGraphic: React.ReactNode;
  details?: string[];
}

export const PersonasEcosystem: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 'amara',
      badgeEmoji: '❤️',
      name: 'AMARA',
      status: 'Disponible',
      description:
        'Inteligencia financiera para hogares y pequeños negocios. Controla tus ingresos, gastos, presupuestos y toma mejores decisiones con ayuda de inteligencia artificial.',
      ctaText: 'Conocer AMARA',
      icon: Heart,
      accentColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
      details: [
        'Análisis automático de patrones de gasto',
        'Presupuestos mensuales predictivos',
        'Alertas de salud financiera y metas de ahorro',
        'Panel unificado para hogar y proyectos personales',
      ],
      previewGraphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#090E17] border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-[#CBD5E1] font-semibold">AMARA OS v2.4</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Salud Financiera 98%
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="bg-white/[0.03] p-2.5 rounded-lg border border-white/[0.05]">
              <span className="text-[10px] text-[#8892B0] block">Ahorro Mensual</span>
              <span className="text-sm font-bold text-white font-mono">$1,850.00</span>
              <span className="text-[9px] text-emerald-400 flex items-center gap-1 mt-0.5">
                <TrendingUp className="w-2.5 h-2.5" /> +14.2% este mes
              </span>
            </div>
            <div className="bg-white/[0.03] p-2.5 rounded-lg border border-white/[0.05]">
              <span className="text-[10px] text-[#8892B0] block">Meta Casa Propia</span>
              <span className="text-sm font-bold text-white font-mono">72% completado</span>
              <div className="w-full h-1 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[72%]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'nutricion',
      badgeEmoji: '🥗',
      name: 'Nutrición IA',
      status: 'Próximamente',
      description:
        'Organiza tu alimentación, crea planes personalizados, recetas inteligentes y listas de mercado adaptadas a tus objetivos.',
      ctaText: 'Conocer más',
      icon: Utensils,
      accentColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      details: [
        'Menús semanales adaptados a tus gustos y macros',
        'Generación de lista de mercado optimizada',
        'Recetas basadas en ingredientes que ya tienes en casa',
      ],
      previewGraphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#090E17] border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-xs font-mono text-[#CBD5E1] font-semibold">PLAN SEMANAL INTELIGENTE</span>
            <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
              Q3 2026
            </span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
              <span className="text-xs text-white font-medium">🥗 Almuerzo Proteico & Vegetales</span>
              <span className="text-[10px] text-[#8892B0] font-mono">540 kcal</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
              <span className="text-xs text-white font-medium">🛒 Lista de Compras Generada</span>
              <span className="text-[10px] text-blue-400 font-mono">12 ítems</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'asistente',
      badgeEmoji: '📅',
      name: 'Asistente Personal',
      status: 'En desarrollo',
      description:
        'Organiza tareas, agenda, recordatorios, metas y actividades con un asistente inteligente que te ayuda todos los días.',
      ctaText: 'En desarrollo',
      icon: Calendar,
      accentColor: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10',
      details: [
        'Sincronización fluida con tu calendario',
        'Priorización inteligente de pendientes diarios',
        'Recordatorios adaptativos basados en tu rutina',
      ],
      previewGraphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#090E17] border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-xs font-mono text-[#CBD5E1] font-semibold">AGENDA PROACTIVA</span>
            <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
              En desarrollo
            </span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between">
              <span className="text-xs text-indigo-200 font-medium">✨ Sugerencia: Bloque de enfoque 10:00 AM</span>
              <span className="text-[9px] text-indigo-300 font-mono">Optimizada</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
              <span className="text-xs text-white font-medium">📌 3 tareas prioritarias hoy</span>
              <span className="text-[10px] text-[#8892B0] font-mono">En curso</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tutor',
      badgeEmoji: '📚',
      name: 'Tutor IA',
      status: 'En desarrollo',
      description:
        'Aprende cualquier tema con explicaciones sencillas, planes de estudio personalizados y acompañamiento inteligente.',
      ctaText: 'En desarrollo',
      icon: BookOpen,
      accentColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      details: [
        'Explicaciones adaptadas a tu nivel de conocimiento',
        'Planes de estudio por etapas interactivas',
        'Preguntas y respuestas con ejemplos del mundo real',
      ],
      previewGraphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#090E17] border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-xs font-mono text-[#CBD5E1] font-semibold">APRENDIZAJE PERSONALIZADO</span>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
              Próximo módulo
            </span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
              <span className="text-xs text-amber-300 font-bold block">Lección: Fundamentos de IA</span>
              <span className="text-[11px] text-[#8892B0] block mt-0.5">Explicación conceptual paso a paso</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'creador',
      badgeEmoji: '✍️',
      name: 'Creador IA',
      status: 'En desarrollo',
      description:
        'Genera contenido para redes sociales, blogs, videos, presentaciones y mucho más en cuestión de minutos.',
      ctaText: 'En desarrollo',
      icon: PenTool,
      accentColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      details: [
        'Generación de ideas y guiones creativos',
        'Redacción para blogs, correos y redes',
        'Formatos listos para publicar',
      ],
      previewGraphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#090E17] border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-xs font-mono text-[#CBD5E1] font-semibold">STUDIO MULTICANAL</span>
            <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
              En laboratorio
            </span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
              <span className="text-xs text-purple-200 font-medium">✨ Post LinkedIn + Guión Reel</span>
              <span className="text-[10px] text-emerald-400 font-mono">Listo</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'hogar',
      badgeEmoji: '🏠',
      name: 'Hogar Inteligente',
      status: 'En desarrollo',
      description:
        'Organiza tu hogar, controla tareas, inventarios, compras y recordatorios desde un solo lugar.',
      ctaText: 'En desarrollo',
      icon: Home,
      accentColor: 'border-[#4871B8]/40 text-[#93C5FD] bg-[#4871B8]/10',
      details: [
        'Inventario doméstico y fecha de vencimiento de productos',
        'Asignación de actividades del hogar',
        'Gestión unificada de servicios y contratos',
      ],
      previewGraphic: (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-[#090E17] border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden relative group-hover:border-white/[0.2] transition-all">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-xs font-mono text-[#CBD5E1] font-semibold">CONTROL DEL HOGAR</span>
            <span className="text-[10px] font-mono text-[#93C5FD] bg-[#4871B8]/10 px-2 py-0.5 rounded-full border border-[#4871B8]/20">
              En desarrollo
            </span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
              <span className="text-xs text-white font-medium">🏠 Mantenimiento y Servicios</span>
              <span className="text-[10px] text-[#8892B0] font-mono">Al día</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section id="ecosistema" spacing="comfortable" className="relative bg-[#0E141D] py-24 md:py-32 overflow-hidden">
      {/* Top and Bottom Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#121B28] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#182231] to-transparent pointer-events-none z-10" />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(72,113,184,0.1)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container maxWidth="2xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121824] border border-white/[0.08] text-[#BFC5CC] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#BFC5CC]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#BFC5CC]">
              CATÁLOGO DE PRODUCTOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E6E8EB] font-display tracking-tight leading-tight">
            Nuestro Ecosistema de Soluciones
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#8892B0] leading-relaxed max-w-2xl mx-auto font-normal">
            Explora las herramientas diseñadas para simplificar tu cotidianidad. Cada solución evoluciona como parte de una plataforma interconectada.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product, index) => {
            const IconComp = product.icon;
            const isAvailable = product.status === 'Disponible';

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex"
              >
                <div className="relative group w-full flex flex-col justify-between rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0C121C]/80 backdrop-blur-md p-6 sm:p-8 transition-all duration-350 hover:border-white/[0.22] hover:bg-[#111826]/90 hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] hover:-translate-y-1.5">
                  {/* Subtle top inner sheen */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-t-2xl md:rounded-t-3xl" />

                  <div className="relative space-y-5">
                    {/* Header Row: Badge Emoji & Status */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{product.badgeEmoji}</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#E6E8EB] font-display tracking-tight group-hover:text-white transition-colors">
                          {product.name}
                        </h3>
                      </div>

                      {/* Status Badge */}
                      <span
                        className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border ${product.accentColor} flex items-center gap-1.5`}
                      >
                        {isAvailable && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />}
                        {product.status}
                      </span>
                    </div>

                    {/* Preview Graphic Box */}
                    {product.previewGraphic}

                    {/* Description */}
                    <p className="text-sm text-[#8892B0] leading-relaxed font-normal min-h-[72px]">
                      {product.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="relative pt-6 mt-6 border-t border-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className={`inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl border text-xs sm:text-sm font-semibold tracking-wide transition-all duration-250 shadow-sm ${
                        isAvailable
                          ? 'bg-[#18263A] border-emerald-500/30 text-white hover:bg-emerald-600/30 hover:border-emerald-400'
                          : 'bg-[#141C2B] border-white/[0.1] text-[#E6E8EB] hover:bg-[#1E2A40] hover:text-white'
                      }`}
                    >
                      <span>{product.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#BFC5CC] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Detail view */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg rounded-3xl border border-white/[0.15] bg-[#0D131E] p-6 sm:p-8 space-y-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] text-[#8892B0] hover:text-white hover:bg-white/[0.1] transition-all"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedProduct.badgeEmoji}</span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-white font-display">
                      {selectedProduct.name}
                    </h3>
                    <span className="text-xs text-[#8892B0] font-mono">
                      Estado: {selectedProduct.status}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {selectedProduct.description}
                </p>

                {selectedProduct.details && (
                  <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                    <h4 className="text-xs font-semibold text-[#8892B0] uppercase tracking-wider font-mono">
                      CARACTERÍSTICAS CLAVE
                    </h4>
                    <ul className="space-y-2">
                      {selectedProduct.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#E2E8F0]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProduct(null);
                      const contactEl = document.querySelector('#contacto');
                      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 rounded-xl bg-[#4871B8] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#3B5E9B] transition-colors"
                  >
                    Solicitar más información
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
};
