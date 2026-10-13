import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ChevronDown,
  Dumbbell,
  Flame,
  Globe,
  ListChecks,
  Medal,
  Smartphone,
  Timer,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import type { AppInfo } from '../appsData';
import { AppBottomSections, BackToAppsLink, themeVarsFor, useAppPageSetup } from '../AppPage';
import { BigDownloadButton, Counter, FloatingChip } from '../shared';
import { coaches, type Coach } from './coaches';
import heroNala from '@/assets/images/apps/mester/hero-nala.webp';
import fondoGym from '@/assets/images/apps/mester/fondo-gym.webp';
import pantallaMentor from '@/assets/images/apps/mester/pantalla-mentor.webp';
import nutricion from '@/assets/images/apps/mester/nutricion.webp';
import tarroProteina from '@/assets/images/apps/mester/tarro-proteina.webp';
import tarroCreatina from '@/assets/images/apps/mester/tarro-reatina.webp';
import tarroOmega from '@/assets/images/apps/mester/tarro-omega.webp';
import tarroColageno from '@/assets/images/apps/mester/tarro-colageno.webp';
import tarroPreworkout from '@/assets/images/apps/mester/tarro-preworkout.webp';
import entornoCasa from '@/assets/images/apps/mester/entorno-casa.webp';
import entornoGym from '@/assets/images/apps/mester/entorno-gym.webp';
import entornoParque from '@/assets/images/apps/mester/entorno-parque.webp';

// Versión web de MESTER (proyecto de Vercel aparte), para iPhone y computador.
const MESTER_WEB_URL = 'https://mester-web-ebon.vercel.app';
const PURPLE = '#9333EA';
const XP_GREEN = '#4AE176';
// El padding evita que la cursiva recorte la última letra del degradado.
const gradientText = 'bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#E879F9] bg-clip-text text-transparent pr-[0.15em]';
const headingClass = 'font-bold italic uppercase tracking-tight leading-[0.95]';

/* ---------- Pequeñas piezas ---------- */

const MesterDownloadButton: React.FC<{ app: AppInfo; className?: string }> = ({ app, className = '' }) => (
  <BigDownloadButton
    href={app.downloadUrl}
    gradient="linear-gradient(90deg, #7E22CE, #9333EA, #C026D3)"
    glow="rgba(147,51,234,0.9)"
    className={className}
  />
);

// Celular dibujado con código: pantalla de ejemplo de "Arma tu plato" (datos inventados).
const NutritionPhone: React.FC<{ className?: string }> = ({ className = '' }) => {
  const macros = [
    { label: 'Proteína', grams: 140, pct: 82, color: '#C084FC' },
    { label: 'Carbohidratos', grams: 200, pct: 64, color: XP_GREEN },
    { label: 'Grasas', grams: 60, pct: 48, color: '#F59E0B' },
  ];
  return (
    <div
      className={`rounded-[2.2rem] border-[6px] border-[#2A2A2C] bg-[#0E0E10] p-4 shadow-[0_30px_80px_-20px_rgba(147,51,234,0.7)] ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between text-[10px] text-[#CFC2D7] mb-4">
        <span>9:41</span>
        <span className="font-bold tracking-widest text-[#DDB8FF]">MESTER</span>
      </div>
      <p className="text-white font-bold text-lg leading-tight">Arma tu plato</p>
      <p className="text-[11px] text-[#CFC2D7] mb-4">Según tus macros y tu objetivo</p>
      <div className="flex items-center gap-4 mb-5">
        <svg viewBox="0 0 100 100" className="w-24 h-24 -rotate-90 shrink-0">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#2A2A2C" strokeWidth="10" />
          <circle cx="50" cy="50" r="40" fill="none" stroke={PURPLE} strokeWidth="10" strokeLinecap="round" strokeDasharray="251" strokeDashoffset="42" />
        </svg>
        <div>
          <p className="text-2xl font-bold text-white leading-none">1.850</p>
          <p className="text-[11px] text-[#CFC2D7]">de 2.200 kcal</p>
        </div>
      </div>
      <div className="space-y-3">
        {macros.map((m) => (
          <div key={m.label}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-[#CFC2D7]">{m.label}</span>
              <span className="text-white font-semibold">{m.grams} g</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#2A2A2C] overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${m.pct}%`, backgroundColor: m.color }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-2">
        {['Pechuga de pollo · 180 g', 'Arroz · 150 g', 'Aguacate · 50 g'].map((item) => (
          <div key={item} className="rounded-xl bg-[#1B1B1D] px-3 py-2 text-[11px] text-white">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- Secciones ---------- */

const Hero: React.FC<{ app: AppInfo }> = ({ app }) => (
  <Section className="relative overflow-hidden bg-[#0A0A0A] pt-28 pb-16 md:pt-32 lg:pb-24">
    {/* Fondo: gimnasio oscurecido con luces moradas */}
    <img src={fondoGym} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-25" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />
    <div className="absolute -top-40 right-0 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.45),transparent_65%)] pointer-events-none" />
    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0A0A0A]" />

    <Container maxWidth="xl" className="relative z-10">
      <div className="mb-8">
        <BackToAppsLink />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-6 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#9333EA]/70 bg-[#9333EA]/15 text-[#DDB8FF] text-xs font-bold uppercase tracking-widest mb-6">
            <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
            Nueva · Android · Gratis
          </span>

          <h1 className={`${headingClass} text-5xl sm:text-6xl xl:text-7xl text-white`}>
            Entrena,
            <br />
            sube de nivel,
            <br />
            <span className={gradientText}>evoluciona.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#CFC2D7] leading-relaxed max-w-xl mx-auto lg:mx-0">
            MESTER convierte tu entrenamiento en un juego: eliges un entrenador con personalidad, entrenas, ganas{' '}
            <span className="text-[#4AE176] font-semibold">XP</span>, subes de nivel y llenas tu propio espacio de
            entrenamiento.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-3">
            <MesterDownloadButton app={app} className="w-full sm:w-auto" />
            <a
              href={MESTER_WEB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-2xl bg-white/10 border border-[#4AE176]/60 text-white font-semibold whitespace-nowrap hover:bg-[#4AE176]/15 transition-colors w-full sm:w-auto"
            >
              <Globe className="w-5 h-5 text-[#4AE176]" aria-hidden="true" />
              Usar en la web
            </a>
            <a
              href="#entrenadores"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#entrenadores')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-2xl border border-[#9333EA]/70 text-white font-semibold hover:bg-[#9333EA]/15 transition-colors w-full sm:w-auto"
            >
              Conoce a los entrenadores
              <ChevronDown className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-5 text-sm text-[#CFC2D7]/80">
            APK para Android · Versión {app.version} · {app.fileSize} · <span className="text-[#4AE176] font-semibold">Gratis</span>
          </p>
          <p className="mt-1 text-xs text-[#CFC2D7]/60">¿Tienes iPhone o computador? Úsala en la web, sin instalar nada.</p>
          {app.downloadNote && <p className="mt-1 text-xs text-[#CFC2D7]/60">{app.downloadNote}</p>}
        </motion.div>

        {/* Personaje + celulares */}
        <div className="lg:col-span-6 relative h-[440px] sm:h-[540px] lg:h-[620px]">
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 8 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:block absolute right-0 top-6 w-[230px]"
          >
            <NutritionPhone />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: -2 }}
            animate={{ opacity: 1, x: 0, rotate: -4 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="hidden lg:block absolute right-[150px] top-16 w-[230px]"
          >
            <div className="rounded-[2.2rem] border-[6px] border-[#2A2A2C] bg-black overflow-hidden shadow-[0_30px_80px_-20px_rgba(147,51,234,0.8)]">
              <img src={pantallaMentor} alt="Pantalla de MESTER para elegir entrenador" className="w-full h-auto block" />
            </div>
          </motion.div>

          <div className="absolute left-1/2 lg:left-[-40px] -translate-x-1/2 lg:translate-x-0 bottom-0 w-[300px] sm:w-[360px] lg:w-[400px] z-20">
            <div className="absolute inset-x-6 bottom-6 top-20 rounded-full bg-[#9333EA]/50 blur-[70px]" aria-hidden="true" />
            <motion.img
              src={heroNala}
              alt="Nala, entrenadora de MESTER, celebrando"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, type: 'spring', bounce: 0.35 }}
              className="relative w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            />
          </div>

          <FloatingChip color={XP_GREEN} className="left-2 sm:left-8 lg:left-[-30px] top-10" delay={0}>
            <Zap className="w-4 h-4" aria-hidden="true" />
            +70 XP
          </FloatingChip>
          <FloatingChip color="#C084FC" className="right-2 sm:right-10 lg:right-auto lg:left-[300px] top-[38%]" delay={0.3}>
            <Medal className="w-4 h-4" aria-hidden="true" />
            ¡Subiste al nivel 12!
          </FloatingChip>
          <FloatingChip color="#F59E0B" className="left-0 sm:left-4 lg:left-[-20px] bottom-24" delay={0.6}>
            <Flame className="w-4 h-4" aria-hidden="true" />
            Racha de 7 días
          </FloatingChip>
        </div>
      </div>
    </Container>
  </Section>
);

const StatsStrip: React.FC = () => {
  const stats = [
    { value: 7, label: 'entrenadores' },
    { value: 876, label: 'ejercicios con fotos' },
    { value: 100, label: 'niveles' },
    { value: 100, label: 'logros' },
  ];
  return (
    <Section className="relative bg-[#0A0A0A] py-10 md:py-12 border-y border-[#9333EA]/30">
      <Container maxWidth="xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} className={`block text-5xl sm:text-6xl font-bold italic ${gradientText}`} />
              <span className="text-sm uppercase tracking-widest text-[#CFC2D7]">{s.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    { icon: Users, color: '#A855F7', title: 'Elige a tu entrenador', text: '7 personajes con personalidad propia. Cambiar no te quita progreso.' },
    { icon: ListChecks, color: '#3B82F6', title: 'Arma tu rutina', text: 'Según tu objetivo, tu nivel y dónde entrenas: casa, gym o parque.' },
    { icon: Timer, color: XP_GREEN, title: 'Entrena con "A darle"', text: 'Cronómetro, series y descansos guiados. Cada sesión completa suma XP.' },
    { icon: Trophy, color: '#F59E0B', title: 'Sube de nivel', text: '100 niveles, 100 logros y recompensas que llenan tu espacio.' },
  ];
  return (
    <Section className="bg-[#0A0A0A] py-20 md:py-28">
      <Container maxWidth="xl">
        <h2 className={`${headingClass} text-4xl sm:text-5xl text-center text-white`}>
          ¿Cómo <span className={gradientText}>funciona?</span>
        </h2>
        <p className="mt-3 text-center text-[#CFC2D7]">Cuatro pasos para convertir el gym en tu juego.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl border p-6 pt-8 bg-[#131315]"
                style={{ borderColor: `${step.color}66`, boxShadow: `0 0 40px -18px ${step.color}` }}
              >
                <span
                  className="absolute -top-4 left-6 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold bg-[#0A0A0A] border-2"
                  style={{ borderColor: step.color, color: step.color }}
                >
                  {i + 1}
                </span>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${step.color}22`, color: step.color }}
                >
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#CFC2D7] leading-relaxed">{step.text}</p>
                <div className="mt-6 h-1 rounded-full bg-[#2A2A2C] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: step.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(i + 1) * 25}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

const CoachRoster: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [userPicked, setUserPicked] = useState(false);
  const coach: Coach = coaches[index];

  // Cambia de entrenador solo hasta que el visitante elija uno.
  useEffect(() => {
    if (userPicked) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % coaches.length), 4500);
    return () => clearInterval(timer);
  }, [userPicked]);

  return (
    <Section id="entrenadores" className="relative overflow-hidden bg-[#131315] py-20 md:py-28">
      <div
        className="absolute inset-0 pointer-events-none transition-[background] duration-700"
        style={{ background: `radial-gradient(ellipse 50% 60% at 30% 50%, ${coach.color}55, transparent 70%)` }}
      />
      <Container maxWidth="xl" className="relative">
        <h2 className={`${headingClass} text-4xl sm:text-5xl text-center text-white`}>
          Elige a tu <span className={gradientText}>entrenador</span>
        </h2>
        <p className="mt-3 text-center text-[#CFC2D7]">Cada uno tiene su estilo. Tu progreso es tuyo con cualquiera.</p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] flex items-end justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={coach.id}
                src={coach.celebra}
                alt={`${coach.name}, ${coach.species.toLowerCase()} entrenador de ${coach.specialty.toLowerCase()}`}
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
                className="h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
              />
            </AnimatePresence>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="text-center lg:text-left"
              >
                <p className="text-sm uppercase tracking-widest text-[#CFC2D7]">{coach.species}</p>
                <p className={`${headingClass} text-6xl sm:text-7xl`} style={{ color: coach.text }}>
                  {coach.name}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{coach.specialty}</p>
                <blockquote
                  className="mt-6 rounded-2xl border-l-4 bg-black/30 px-6 py-5 text-xl sm:text-2xl italic text-white"
                  style={{ borderColor: coach.text }}
                >
                  "{coach.quote}"
                </blockquote>
                <p className="mt-4 text-[#CFC2D7]">Estilo: {coach.style}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 grid grid-cols-4 sm:grid-cols-7 gap-3" role="group" aria-label="Entrenadores de MESTER">
              {coaches.map((c, i) => {
                const active = i === index;
                return (
                  <motion.button
                    key={c.id}
                    type="button"
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIndex(i);
                      setUserPicked(true);
                    }}
                    aria-pressed={active}
                    className="relative rounded-2xl bg-black/40 border-2 overflow-hidden aspect-[3/4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    style={{
                      borderColor: active ? c.text : 'rgba(255,255,255,0.08)',
                      boxShadow: active ? `0 0 24px -4px ${c.text}` : 'none',
                    }}
                  >
                    <img src={c.saludo} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top" />
                    <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent pt-6 pb-1.5 text-xs font-bold text-white">
                      {c.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const LevelUp: React.FC = () => {
  const cards = [
    { icon: Zap, color: XP_GREEN, title: '70 XP por sesión', text: 'Cada entrenamiento completo con el cronómetro suma XP.' },
    { icon: Dumbbell, color: '#C084FC', title: 'Tope de 150 XP al día', text: 'Nada de trampas: tu nivel refleja entrenamiento real.' },
    { icon: Medal, color: '#F59E0B', title: 'Bonus por récords', text: 'Registra peso y repeticiones (opcional) y gana extra cuando rompes un récord.' },
  ];
  return (
    <Section className="bg-[#0A0A0A] py-20 md:py-28">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className={`${headingClass} text-4xl sm:text-5xl text-white`}>
              Sube de <span className={gradientText}>nivel</span>
            </h2>
            <p className="mt-4 text-[#CFC2D7] text-lg leading-relaxed">
              100 niveles: unos 1,3 a 1,7 años entrenando 4 o 5 veces por semana. Y 100 logros, cada uno con su propio bonus de XP.
            </p>

            <div className="mt-8 rounded-2xl border border-[#9333EA]/40 bg-[#131315] p-5">
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-white">
                  LV. <Counter value={100} />
                </span>
                <span className="text-[#4AE176]">XP</span>
              </div>
              <div className="h-4 rounded-full bg-[#2A2A2C] overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#9333EA] via-[#C026D3] to-[#4AE176]"
                  initial={{ width: '2%' }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.6, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex items-start gap-4 rounded-2xl border bg-[#131315] p-5"
                  style={{ borderColor: `${card.color}55` }}
                >
                  <div
                    className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${card.color}22`, color: card.color }}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <p className="text-sm text-[#CFC2D7] leading-relaxed">{card.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Rewards: React.FC = () => {
  const jars = [
    { src: tarroProteina, name: 'Proteína' },
    { src: tarroCreatina, name: 'Creatina' },
    { src: tarroOmega, name: 'Omega 3' },
    { src: tarroColageno, name: 'Colágeno' },
    { src: tarroPreworkout, name: 'Preworkout' },
  ];
  const spaces = [
    { src: entornoCasa, name: 'Casa' },
    { src: entornoGym, name: 'Gym' },
    { src: entornoParque, name: 'Parque' },
  ];
  return (
    <Section className="relative overflow-hidden bg-[#131315] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(147,51,234,0.25),transparent_70%)] pointer-events-none" />
      <Container maxWidth="xl" className="relative">
        <h2 className={`${headingClass} text-4xl sm:text-5xl text-center text-white`}>
          Gana <span className={gradientText}>recompensas</span>
        </h2>
        <p className="mt-3 text-center text-[#CFC2D7] max-w-2xl mx-auto">
          Los Tarros de Proteína tienen distinta rareza y desbloquean decoración. Tu espacio de entrenamiento empieza vacío y se llena con lo que ganas.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
          {jars.map((jar, i) => (
            <motion.div
              key={jar.name}
              animate={{ y: [0, -14, 0], rotate: [0, i % 2 ? 4 : -4, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              <img
                src={jar.src}
                alt={`Recompensa de ${jar.name}`}
                loading="lazy"
                className="w-24 sm:w-32 h-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
              />
              <span className="mt-2 text-sm font-semibold text-[#DDB8FF]">{jar.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {spaces.map((space) => (
            <motion.div
              key={space.name}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden border border-[#9333EA]/30 aspect-[3/2]"
            >
              <img src={space.src} alt={`Espacio de entrenamiento: ${space.name}`} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className={`absolute bottom-3 left-4 ${headingClass} text-2xl text-white`}>{space.name}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-[#CFC2D7]">Entrena en casa, en el gym o en el parque.</p>
      </Container>
    </Section>
  );
};

const Nutrition: React.FC = () => (
  <Section className="bg-[#0A0A0A] py-20 md:py-28 overflow-hidden">
    <Container maxWidth="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-10 rounded-full bg-[#4AE176]/25 blur-[80px]" aria-hidden="true" />
          <img
            src={nutricion}
            alt="Entrenadora de MESTER mostrando un plato balanceado"
            loading="lazy"
            className="relative w-full max-w-sm rounded-3xl border border-[#4AE176]/30"
          />
          <div className="hidden sm:block absolute -right-2 lg:right-0 bottom-6 w-[200px] rotate-6">
            <NutritionPhone />
          </div>
        </motion.div>

        <div className="text-center lg:text-left">
          <h2 className={`${headingClass} text-4xl sm:text-5xl text-white`}>
            Arma tu <span className="bg-gradient-to-r from-[#4AE176] to-[#A3E635] bg-clip-text text-transparent pr-[0.15em]">plato</span>
          </h2>
          <p className="mt-4 text-[#CFC2D7] text-lg leading-relaxed">
            Un cuestionario de lo que comes normalmente y "Arma tu plato", que calcula las cantidades exactas según tus macros y tu objetivo.
          </p>
          <ul className="mt-6 space-y-3 text-left max-w-md mx-auto lg:mx-0">
            {[
              'Cuestionario inicial de tus alimentos habituales',
              'Cantidades calculadas según tu gasto calórico y tu objetivo',
              'Biblioteca de 48 alimentos',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#4AE176] shadow-[0_0_10px_#4AE176] shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-[#CFC2D7]">
            Y para ver tu avance: mapa de calor del cuerpo con lo que más has trabajado, mejora mensual por músculo e historial.
          </p>
        </div>
      </div>
    </Container>
  </Section>
);

/* ---------- Página ---------- */

export const MesterPage: React.FC<{ app: AppInfo }> = ({ app }) => {
  useAppPageSetup(app);
  return (
    <div style={themeVarsFor(app.theme)} className="bg-[#0A0A0A] text-[var(--app-text)] overflow-x-clip">
      <Hero app={app} />
      <StatsStrip />
      <HowItWorks />
      <CoachRoster />
      <LevelUp />
      <Rewards />
      <Nutrition />
      <AppBottomSections app={app} />
    </div>
  );
};
