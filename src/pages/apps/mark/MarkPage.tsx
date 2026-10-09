import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, ChevronDown, Film, ImageIcon, Loader2, MessageCircle, Play, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import type { AppInfo } from '../appsData';
import { BackToAppsLink, themeVarsFor, useAppPageSetup } from '../AppPage';
import { FloatingChip } from '../shared';
import markSimbolo from '@/assets/images/apps/mark/simbolo.webp';

// Colores de la app (styles.css de MARK: acento rojo y editor oscuro).
const C = {
  bg: '#0E0E11',
  stage: '#16161A',
  panel: '#1E1E23',
  bar: '#26262C',
  line: '#33333B',
  text: '#E9E9EC',
  muted: '#8B8B95',
  red: '#D71920',
  redHi: '#FF4D4D',
};
const redText = 'bg-gradient-to-r from-[#FF4D4D] via-[#D71920] to-[#FF8A5B] bg-clip-text text-transparent pr-[0.12em]';
const heading = 'font-black tracking-tight leading-[1.0]';
const WHATSAPP_HREF = `https://wa.me/573207283295?text=${encodeURIComponent('Hola ANSUZ, quiero saber cuando salga MARK.')}`;

const SoonPill: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest ${className}`}
    style={{ borderColor: `${C.red}99`, background: `${C.red}1F`, color: '#FFB4B4' }}
  >
    <motion.span
      className="w-2 h-2 rounded-full"
      style={{ background: C.redHi }}
      animate={{ opacity: [1, 0.2, 1] }}
      transition={{ duration: 1.2, repeat: Infinity }}
    />
    Próximamente
  </span>
);

const NotifyButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a
    href={WHATSAPP_HREF}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2.5 h-14 px-7 rounded-2xl text-base font-bold text-white whitespace-nowrap border border-white/20 transition-all hover:-translate-y-0.5 ${className}`}
    style={{ backgroundImage: 'linear-gradient(90deg, #B0141A, #D71920, #FF4D4D)', boxShadow: '0 0 40px -6px rgba(215,25,32,0.85)' }}
  >
    <MessageCircle className="w-5 h-5" aria-hidden="true" />
    Avísame cuando salga
  </a>
);

/* ---------- Editor simulado (datos de ejemplo) ---------- */

const PROMPT = 'Video de 15 segundos para mi panadería, con energía, que termine con el WhatsApp bien visible.';
const STAGES = ['Analizando tus clips', 'Creando el plan', 'Editando el video', '¡Listo para publicar!'];
const SCENES = [
  { caption: 'PAN RECIÉN HORNEADO', bg: 'linear-gradient(160deg, #7A2E0E, #F59E0B 70%, #FDE68A)' },
  { caption: 'TODOS LOS DÍAS · 6 AM', bg: 'linear-gradient(200deg, #3B0D0D, #D71920 60%, #FF8A5B)' },
  { caption: 'PIDE POR WHATSAPP', bg: 'linear-gradient(180deg, #052E16, #16A34A 65%, #86EFAC)' },
];
const CLIPS = [
  { bg: 'linear-gradient(135deg, #92400E, #F59E0B)', icon: Film },
  { bg: 'linear-gradient(135deg, #7F1D1D, #F87171)', icon: Film },
  { bg: 'linear-gradient(135deg, #1E3A8A, #60A5FA)', icon: ImageIcon },
];

const useTypewriter = (text: string, active: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    if (count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), 28);
    return () => clearTimeout(t);
  }, [active, count, text]);
  return text.slice(0, count);
};

const EditorDemo: React.FC = () => {
  // 0: escribiendo · 1-3: procesando · 4: listo (reproduce)
  const [step, setStep] = useState(0);
  const typed = useTypewriter(PROMPT, step >= 0);
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const durations = [3600, 1500, 1500, 1500, 6000];
    const t = setTimeout(() => setStep((s) => (s + 1) % 5), durations[step]);
    return () => clearTimeout(t);
  }, [step]);

  useEffect(() => {
    if (step !== 4) {
      setScene(0);
      return;
    }
    const t = setInterval(() => setScene((s) => (s + 1) % SCENES.length), 1900);
    return () => clearInterval(t);
  }, [step]);

  const stageIndex = Math.min(Math.max(step - 1, 0), 3);

  return (
    <div
      className="w-full max-w-[640px] rounded-2xl border overflow-hidden shadow-[0_40px_120px_-30px_rgba(215,25,32,0.55)]"
      style={{ background: C.stage, borderColor: C.line }}
      role="img"
      aria-label="Ejemplo de MARK: subes tus clips, escribes lo que quieres y MARK edita un video vertical"
    >
      {/* Barra superior */}
      <div className="flex items-center gap-2 px-4 h-10 border-b" style={{ background: C.bar, borderColor: C.line }}>
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 flex items-center gap-1.5 text-xs font-semibold" style={{ color: C.text }}>
          <img src={markSimbolo} alt="" className="w-4 h-4 object-contain" />
          MARK Studio
        </span>
      </div>

      <div className="grid grid-cols-5 gap-4 p-4">
        {/* Panel izquierdo: material y pedido */}
        <div className="col-span-3 space-y-3 min-w-0">
          <p className="text-[10px] uppercase tracking-widest" style={{ color: C.muted }}>Material del anuncio</p>
          <div className="grid grid-cols-3 gap-2">
            {CLIPS.map((clip, i) => {
              const Icon = clip.icon;
              return (
                <div key={i} className="relative aspect-[3/4] rounded-lg overflow-hidden" style={{ background: clip.bg }}>
                  <Icon className="absolute left-1.5 top-1.5 w-3.5 h-3.5 text-white/80" aria-hidden="true" />
                  {step === 1 && (
                    <motion.div
                      className="absolute inset-x-0 h-5 bg-gradient-to-b from-transparent via-white/70 to-transparent"
                      initial={{ top: '-20%' }}
                      animate={{ top: ['-20%', '110%'] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: 'linear' }}
                    />
                  )}
                  {step >= 2 && (
                    <span className="absolute right-1 bottom-1 w-4 h-4 rounded-full bg-black/60 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-[#4ADE80]" aria-hidden="true" />
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-[10px] uppercase tracking-widest pt-1" style={{ color: C.muted }}>Dirección creativa</p>
          <div className="rounded-lg border p-3 text-[12px] leading-snug min-h-[78px]" style={{ background: C.panel, borderColor: C.line, color: C.text }}>
            {typed}
            {step === 0 && (
              <motion.span
                className="inline-block w-[2px] h-3.5 align-middle ml-0.5"
                style={{ background: C.redHi }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>

          <div className="rounded-lg border p-3" style={{ background: C.panel, borderColor: C.line }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={step === 0 ? 'idle' : stageIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2 text-[12px] font-semibold"
                style={{ color: step === 4 ? '#4ADE80' : C.text }}
              >
                {step === 0 ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5" style={{ color: C.redHi }} aria-hidden="true" />
                    Generar video
                  </>
                ) : step === 4 ? (
                  <>
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    {STAGES[3]}
                  </>
                ) : (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" style={{ color: C.redHi }} aria-hidden="true" />
                    {STAGES[stageIndex]}…
                  </>
                )}
              </motion.div>
            </AnimatePresence>
            <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: C.line }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: step === 4 ? '#4ADE80' : C.red }}
                animate={{ width: `${[0, 30, 65, 92, 100][step]}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>

        {/* Vista previa vertical */}
        <div className="col-span-2 flex flex-col items-center">
          <p className="self-start text-[10px] uppercase tracking-widest mb-3" style={{ color: C.muted }}>Vista previa</p>
          <div className="relative w-full max-w-[150px] aspect-[9/16] rounded-xl overflow-hidden border" style={{ borderColor: C.line, background: '#000' }}>
            <AnimatePresence mode="popLayout">
              {step === 4 ? (
                <motion.div
                  key={scene}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-end p-2.5"
                  style={{ background: SCENES[scene].bg }}
                >
                  <motion.span
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full rounded bg-black/55 px-1.5 py-1 text-center text-[10px] font-black text-white leading-tight"
                  >
                    {SCENES[scene].caption}
                  </motion.span>
                </motion.div>
              ) : (
                <motion.div key="empty" exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-8 h-8" style={{ color: C.line }} aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="absolute right-1.5 top-1.5 rounded bg-black/60 px-1 text-[8px] font-bold text-white">9:16</span>
          </div>
          {/* Línea de tiempo */}
          <div className="relative mt-3 w-full max-w-[150px] h-3 rounded overflow-hidden flex gap-[2px]">
            {SCENES.map((s) => (
              <span key={s.caption} className="flex-1 opacity-80" style={{ background: s.bg }} />
            ))}
            {step === 4 && (
              <motion.span
                className="absolute top-0 bottom-0 w-[2px] bg-white"
                initial={{ left: '0%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 5.7, ease: 'linear' }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Secciones ---------- */

const Hero: React.FC<{ app: AppInfo }> = ({ app }) => (
  <Section className="relative overflow-hidden pt-28 pb-16 md:pt-32 lg:pb-24" style={{ background: C.bg }}>
    <div className="absolute -top-40 right-[-10%] w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(215,25,32,0.35),transparent_65%)] pointer-events-none" />
    <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(0deg,#fff_0px,#fff_1px,transparent_1px,transparent_4px)] pointer-events-none" />
    <img
      src={markSimbolo}
      alt=""
      aria-hidden="true"
      className="absolute -left-40 bottom-[-120px] w-[520px] opacity-[0.07] rotate-[-12deg] pointer-events-none"
    />

    <Container maxWidth="xl" className="relative z-10">
      <div className="mb-8">
        <BackToAppsLink />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 mb-6">
            <motion.img
              src={markSimbolo}
              alt="Símbolo de MARK"
              className="w-14 h-14 object-contain"
              animate={{ filter: ['drop-shadow(0 0 0px #D71920)', 'drop-shadow(0 0 18px #D71920)', 'drop-shadow(0 0 0px #D71920)'] }}
              transition={{ duration: 2.6, repeat: Infinity }}
            />
            <span className="text-3xl font-black tracking-[0.25em]" style={{ color: C.text }}>
              MARK
            </span>
            <SoonPill />
          </div>

          <h1 className={`${heading} text-5xl sm:text-6xl xl:text-[4.4rem] text-white uppercase italic`}>
            Tus videos para redes,
            <br />
            <span className={redText}>editados por IA.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ color: '#B4B4BE' }}>
            {app.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-3">
            <NotifyButton className="w-full sm:w-auto" />
            <a
              href="#como-funciona"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#como-funciona')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-2xl border text-white font-semibold whitespace-nowrap hover:bg-white/5 transition-colors w-full sm:w-auto"
              style={{ borderColor: `${C.red}80` }}
            >
              Mira cómo funciona
              <ChevronDown className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 text-sm" style={{ color: C.muted }}>
            Programa para Windows · <span className="font-semibold" style={{ color: '#FFB4B4' }}>Próximamente</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-7 relative flex justify-center"
        >
          <EditorDemo />
          <FloatingChip color={C.redHi} className="-top-12 right-4 sm:right-16" delay={0.4}>
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Editado con IA
          </FloatingChip>
          <FloatingChip color="#FBBF24" className="-bottom-5 right-4 sm:right-12" delay={0.8}>
            <Film className="w-4 h-4" aria-hidden="true" />
            Listo en formato 9:16
          </FloatingChip>
        </motion.div>
      </div>
    </Container>
  </Section>
);

const HowItWorks: React.FC = () => {
  const steps = [
    { title: 'Sube tu material', text: 'Videos, fotos y, si quieres, tu logo o manual de marca.' },
    { title: 'Pídelo con tus palabras', text: 'Cuéntale qué video necesitas, sin términos técnicos.' },
    { title: 'MARK lo planea y edita', text: 'Analiza tus clips, decide escenas, textos y música, y lo produce.' },
    { title: 'Publícalo', text: 'Descárgalo en vertical, listo para tus redes, con descripciones sugeridas.' },
  ];
  return (
    <Section id="como-funciona" className="py-20 md:py-28" style={{ background: C.stage }}>
      <Container maxWidth="xl">
        <h2 className={`${heading} text-4xl sm:text-5xl text-center text-white uppercase italic`}>
          Así <span className={redText}>funcionará</span>
        </h2>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl border p-6 pt-10 overflow-hidden"
              style={{ background: C.panel, borderColor: C.line }}
            >
              <span className="absolute -right-2 -top-6 text-[110px] font-black italic leading-none" style={{ color: `${C.red}26` }}>
                {i + 1}
              </span>
              <span className="relative text-sm font-black" style={{ color: C.redHi }}>
                0{i + 1}
              </span>
              <h3 className="relative mt-2 text-xl font-bold text-white">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>{s.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const Features: React.FC<{ app: AppInfo }> = ({ app }) => (
  <Section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.bg }}>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(215,25,32,0.18),transparent_70%)] pointer-events-none" />
    <Container maxWidth="xl" className="relative">
      <h2 className={`${heading} text-4xl sm:text-5xl text-center text-white uppercase italic`}>
        Lo que <span className={redText}>hará por ti</span>
      </h2>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {app.features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', bounce: 0.35, delay: i * 0.08 }}
              className="group rounded-3xl border p-6 transition-colors hover:border-[#D71920]"
              style={{ background: C.stage, borderColor: C.line }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style={{ background: `${C.red}26`, color: C.redHi }}>
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.muted }}>{f.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Container>
  </Section>
);

// Ejemplos de pedidos, basados en las ayudas de la propia app.
const AskInYourWords: React.FC = () => {
  const requests = [
    'que dure unos 15 segundos',
    'rápido y con energía',
    'pon el nombre del producto en verde',
    'el texto arriba, no abajo',
    'termina con el logo y el WhatsApp bien visibles',
    'música tecnológica',
    'empieza mostrando el producto terminado',
  ];
  const row = [...requests, ...requests];
  return (
    <Section className="py-16 md:py-20 overflow-hidden" style={{ background: C.stage }}>
      <Container maxWidth="xl">
        <h2 className={`${heading} text-3xl sm:text-4xl text-center text-white`}>
          Pídelo <span className={redText}>con tus palabras</span>
        </h2>
        <p className="mt-3 text-center" style={{ color: C.muted }}>No hace falta saber de edición.</p>
      </Container>
      <div className="mt-10 relative">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {row.map((r, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border px-5 py-3 text-base font-semibold"
              style={{ borderColor: i % 3 === 0 ? `${C.red}99` : C.line, background: C.panel, color: C.text }}
            >
              "{r}"
            </span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

const SoonCta: React.FC<{ app: AppInfo }> = ({ app }) => (
  <Section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.bg }}>
    <Container maxWidth="md">
      <div className="space-y-3 mb-14">
        {app.faq.map((item) => (
          <details key={item.q} className="group rounded-xl border px-5 py-4" style={{ background: C.stage, borderColor: C.line }}>
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
              {item.q}
              <span className="transition-transform group-open:rotate-45 text-xl leading-none" style={{ color: C.redHi }} aria-hidden="true">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: C.muted }}>{item.a}</p>
          </details>
        ))}
      </div>

      <div
        className="relative overflow-hidden rounded-3xl border px-6 py-14 sm:px-12 text-center"
        style={{ borderColor: `${C.red}66`, background: `radial-gradient(ellipse at top, rgba(215,25,32,0.35), transparent 70%), ${C.stage}` }}
      >
        <img src={markSimbolo} alt="" aria-hidden="true" className="mx-auto w-20 h-20 object-contain mb-6 drop-shadow-[0_0_24px_rgba(215,25,32,0.8)]" />
        <SoonPill className="mb-5" />
        <h2 className={`${heading} text-3xl sm:text-4xl text-white uppercase italic`}>MARK llega pronto</h2>
        <p className="mt-3 mb-8" style={{ color: C.muted }}>Escríbenos y te avisamos apenas esté lista.</p>
        <NotifyButton />
      </div>
    </Container>
  </Section>
);

/* ---------- Página ---------- */

export const MarkPage: React.FC<{ app: AppInfo }> = ({ app }) => {
  useAppPageSetup(app);
  return (
    <div style={themeVarsFor(app.theme)} className="text-[var(--app-text)] overflow-x-clip">
      <Hero app={app} />
      <HowItWorks />
      <Features app={app} />
      <AskInYourWords />
      <SoonCta app={app} />
    </div>
  );
};
