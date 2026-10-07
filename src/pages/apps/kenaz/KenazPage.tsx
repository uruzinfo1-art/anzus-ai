import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  BellOff,
  CircleDollarSign,
  CloudOff,
  FolderKanban,
  GraduationCap,
  HardDrive,
  History,
  Megaphone,
  Monitor,
  UserX,
  X,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import type { AppInfo } from '../appsData';
import { AppBottomSections, BackToAppsLink, themeVarsFor, useAppPageSetup } from '../AppPage';
import { BigDownloadButton, Counter, FloatingChip, formatCOP } from '../shared';
import kenazLogo from '@/assets/images/apps/kenaz/logo-grande.webp';

// Colores de la app (common.css de KENAZ).
const C = {
  bg: '#0B0F0E',
  bg2: '#121A17',
  bg3: '#1A2521',
  border: '#1F2D28',
  border2: '#2C3E37',
  text: '#ECF5F1',
  text2: '#8FA89E',
  accent: '#059669',
  accent2: '#34D399',
  gold: '#F5C451',
  red: '#EF4444',
};
const emeraldText = 'bg-gradient-to-r from-[#34D399] via-[#6EE7B7] to-[#F5C451] bg-clip-text text-transparent';
const heading = 'font-bold tracking-tight leading-[1.05]';

/* ---------- Piezas que imitan la app (datos inventados) ---------- */

// Ícono de la runa Kenaz, como en el botón flotante.
const KenazRune: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 4 8 12l8 8" />
  </svg>
);

const FloatingButton: React.FC<{ badge?: number; size?: number; pulse?: boolean }> = ({ badge, size = 64, pulse = true }) => (
  <div className="relative" style={{ width: size, height: size }}>
    {pulse && (
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-[#34D399]"
        animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
    )}
    <div
      className="absolute inset-0 rounded-full flex items-center justify-center text-[#34D399] border-2 border-[#059669]"
      style={{
        background: 'radial-gradient(circle at 35% 30%, #13201B, #0B0F0E 70%)',
        boxShadow: '0 0 18px rgba(5,150,105,.6), 0 3px 10px rgba(0,0,0,.45)',
      }}
    >
      <KenazRune className="w-1/2 h-1/2 drop-shadow-[0_0_4px_rgba(52,211,153,.8)]" />
    </div>
    {badge !== undefined && (
      <span className="absolute -right-1 -top-1 min-w-[22px] h-[22px] px-1 rounded-full bg-[#EF4444] text-white text-xs font-bold flex items-center justify-center border-2 border-white">
        {badge}
      </span>
    )}
  </div>
);

type Notice = { type: 'vencida' | 'hoy' | 'pronto'; text: string; project: string; color: string };

const notices: Notice[] = [
  { type: 'vencida', text: 'Entregar pedido de tortas', project: 'Panadería Sol', color: '#F97316' },
  { type: 'hoy', text: 'Cobrar abono a Carlos', project: 'Estudio Norte', color: '#60A5FA' },
  { type: 'pronto', text: 'Mantenimiento del horno · en 2 días', project: 'Panadería Sol', color: '#F97316' },
];

const noticeBorder: Record<Notice['type'], string> = { vencida: C.red, hoy: C.gold, pronto: C.accent2 };
const noticeLabel: Record<Notice['type'], string> = { vencida: 'Vencida', hoy: 'Hoy', pronto: 'Pronto' };

const NoticeBubble: React.FC<{ notice: Notice; className?: string }> = ({ notice, className = '' }) => (
  <div
    className={`flex items-start gap-3 rounded-xl px-3.5 py-3 border text-[13px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${className}`}
    style={{ background: C.bg2, borderColor: C.border2, borderLeft: `4px solid ${noticeBorder[notice.type]}`, color: C.text }}
  >
    <div className="flex-1 min-w-0">
      <p className="font-semibold leading-tight">{notice.text}</p>
      <p className="mt-1 flex items-center gap-1.5 text-xs" style={{ color: C.text2 }}>
        <span className="w-2 h-2 rounded-full" style={{ background: notice.color }} />
        {notice.project} · <span style={{ color: noticeBorder[notice.type] }}>{noticeLabel[notice.type]}</span>
      </p>
    </div>
    <X className="w-3.5 h-3.5 shrink-0" style={{ color: '#7F968D' }} aria-hidden="true" />
  </div>
);

const projects = [
  { name: 'Panadería Sol', color: '#F97316', pending: 3 },
  { name: 'Estudio Norte', color: '#60A5FA', pending: 1 },
  { name: 'Taller de motos', color: '#A78BFA', pending: 2 },
];

const ProjectsPanel: React.FC = () => (
  <div className="w-[250px] rounded-xl border overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]" style={{ background: C.bg, borderColor: C.border2 }}>
    <div className="flex items-center gap-2 px-3 pt-3 text-[13px]" style={{ color: C.text2 }}>
      <span className="w-[22px] h-[22px] rounded-md flex items-center justify-center text-white text-[13px] font-bold" style={{ background: C.accent }}>
        K
      </span>
      Kenaz
    </div>
    <div className="px-3.5 pt-1 pb-3">
      <p className="text-[26px] font-bold leading-tight" style={{ color: C.text }}>
        6 <span className="text-base font-semibold">pendientes</span>
      </p>
      <p className="text-xs" style={{ color: C.text2 }}>Hoy, martes</p>
    </div>
    <div className="px-2.5 pb-3 space-y-1.5">
      {projects.map((p) => (
        <div key={p.name} className="flex items-center gap-2.5 rounded-[10px] px-3 py-2.5 border text-[13.5px]" style={{ background: C.bg2, borderColor: C.border, color: C.text }}>
          <span className="w-[11px] h-[11px] rounded-full" style={{ background: p.color }} />
          <span className="flex-1">{p.name}</span>
          <span className="text-xs" style={{ color: C.text2 }}>{p.pending}</span>
          <span style={{ color: C.text2 }}>›</span>
        </div>
      ))}
      <div className="rounded-[10px] px-3 py-2 border border-dashed text-center text-[12.5px]" style={{ borderColor: C.border, color: C.text2 }}>
        + Nuevo proyecto
      </div>
    </div>
  </div>
);

// Escritorio de Windows con el botón flotante: avisos que aparecen y el panel que se abre.
const DesktopDemo: React.FC = () => {
  // 0-2: avisos uno a uno · 3: panel abierto
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setStep((s) => (s + 1) % 5), step === 3 ? 3800 : 2200);
    return () => clearTimeout(t);
  }, [step]);

  const shownNotices = step < 3 ? notices.slice(0, step + 1) : [];

  return (
    <div
      className="relative w-full max-w-[640px] aspect-[16/10] rounded-2xl border overflow-hidden shadow-[0_40px_100px_-30px_rgba(52,211,153,0.5)]"
      style={{ borderColor: C.border2 }}
      role="img"
      aria-label="Ejemplo del botón flotante de KENAZ en el escritorio de Windows, con avisos y el panel de proyectos"
    >
      {/* Fondo de escritorio */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,#0F3B2E,transparent_55%),radial-gradient(ellipse_at_80%_80%,#3A2F0F,transparent_50%),#070A09]" />
      {/* Ventanas de fondo, desenfocadas */}
      <div className="absolute left-[6%] top-[8%] w-[52%] h-[58%] rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm">
        <div className="h-6 border-b border-white/10 flex items-center gap-1.5 px-2">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <div className="p-3 space-y-2">
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="h-2 w-2/3 rounded bg-white/10" />
        </div>
      </div>

      {/* Avisos */}
      <div className="absolute right-[13%] bottom-[18%] w-[56%] sm:w-[44%] flex flex-col gap-2 items-stretch">
        <AnimatePresence>
          {shownNotices.map((n) => (
            <motion.div
              key={n.text}
              layout
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
            >
              <NoticeBubble notice={n} className="text-[11px] sm:text-[13px]" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Panel */}
      <AnimatePresence>
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
            className="absolute right-[13%] bottom-[14%] origin-bottom-right scale-[0.72] sm:scale-100"
          >
            <ProjectsPanel />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <motion.div className="absolute right-[3%] bottom-[16%]" animate={step === 3 ? { scale: [1, 0.9, 1] } : {}} transition={{ duration: 0.3 }}>
        <FloatingButton badge={step < 3 ? step + 1 : 6} size={52} />
      </motion.div>

      {/* Barra de tareas */}
      <div className="absolute inset-x-0 bottom-0 h-[10%] bg-[#0B0F0E]/90 border-t border-white/10 flex items-center justify-center gap-3">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`w-5 h-5 rounded ${i === 2 ? 'bg-[#34D399]/70' : 'bg-white/15'}`} />
        ))}
        <span className="absolute right-3 text-[10px] text-white/60">9:41</span>
      </div>
    </div>
  );
};

/* ---------- Secciones ---------- */

const Hero: React.FC<{ app: AppInfo }> = ({ app }) => (
  <Section className="relative overflow-hidden pt-28 pb-16 md:pt-32 lg:pb-24" style={{ background: C.bg }}>
    <div className="absolute -top-40 left-[-10%] w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(5,150,105,0.35),transparent_65%)] pointer-events-none" />
    <div className="absolute bottom-[-30%] right-[-10%] w-[700px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(245,196,81,0.12),transparent_65%)] pointer-events-none" />

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
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.img
              src={kenazLogo}
              alt="Logo de KENAZ"
              className="w-14 h-14 rounded-xl object-cover border"
              style={{ borderColor: C.border2 }}
              animate={{ boxShadow: ['0 0 0px rgba(52,211,153,0)', '0 0 30px rgba(52,211,153,0.7)', '0 0 0px rgba(52,211,153,0)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className="px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest" style={{ borderColor: `${C.accent2}66`, color: C.accent2, background: `${C.accent}1A` }}>
              Windows · Gratis
            </span>
          </div>

          <h1 className={`${heading} text-5xl sm:text-6xl xl:text-[4.2rem] text-[#ECF5F1]`}>
            Todos tus negocios, <span className={emeraldText}>a un botón.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ color: C.text2 }}>
            Un botón flotante, siempre visible en tu pantalla, con todo lo que tienes pendiente: trabajos, cobros, presupuestos y avisos de cada negocio.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <BigDownloadButton
              href={app.downloadUrl}
              gradient="linear-gradient(90deg, #059669, #34D399)"
              glow="rgba(52,211,153,0.75)"
              textColor="#04130E"
              className="w-full sm:w-auto"
            />
          </div>
          <p className="mt-5 text-sm" style={{ color: C.text2 }}>
            Instalador para Windows · Versión {app.version} · {app.fileSize} · <span className="font-semibold" style={{ color: C.gold }}>Gratis</span>
          </p>
          <p className="mt-1 text-xs" style={{ color: C.text2 }}>Requisitos: {app.requirements}.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-7 relative flex justify-center [perspective:1200px]"
        >
          <DesktopDemo />
          <FloatingChip color={C.gold} className="-top-4 left-2 sm:left-10" delay={0.4}>
            <CircleDollarSign className="w-4 h-4" aria-hidden="true" />
            Te deben $660.000
          </FloatingChip>
          <FloatingChip color={C.accent2} className="-bottom-5 left-6 sm:left-1/4" delay={0.8}>
            <HardDrive className="w-4 h-4" aria-hidden="true" />
            100% en tu computador
          </FloatingChip>
        </motion.div>
      </div>
    </Container>
  </Section>
);

const Reminders: React.FC = () => (
  <Section className="py-20 md:py-28" style={{ background: C.bg2 }}>
    <Container maxWidth="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="text-center lg:text-left">
          <h2 className={`${heading} text-4xl sm:text-5xl text-[#ECF5F1]`}>
            Un botón que <span className={emeraldText}>no te deja olvidar</span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: C.text2 }}>
            El botón flotante te avisa de lo que se venció, lo que toca hoy y lo que viene pronto. Puedes silenciarlo o ajustar cada cuánto aparece.
          </p>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            {(['vencida', 'hoy', 'pronto'] as const).map((t) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold" style={{ borderColor: `${noticeBorder[t]}66`, color: noticeBorder[t] }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: noticeBorder[t], boxShadow: `0 0 10px ${noticeBorder[t]}` }} />
                {noticeLabel[t]}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm" style={{ borderColor: C.border2, color: C.text2 }}>
              <BellOff className="w-4 h-4" aria-hidden="true" />
              Silenciar
            </span>
          </div>
        </div>

        <div className="relative flex flex-col items-center gap-3">
          {notices.map((n, i) => (
            <motion.div
              key={n.text}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', bounce: 0.35, duration: 0.6, delay: i * 0.25 }}
              className="w-full max-w-sm"
              style={{ paddingLeft: `${i * 20}px` }}
            >
              <NoticeBubble notice={n} />
            </motion.div>
          ))}
          <div className="self-end mr-6 mt-2">
            <FloatingButton badge={3} size={72} />
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

type Job = { client: string; job: string; total: number; paid: number };

const Collections: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([
    { client: 'Carlos R.', job: 'Logo y tarjetas', total: 450000, paid: 150000 },
    { client: 'Marta G.', job: 'Torta de bodas', total: 380000, paid: 200000 },
    { client: 'Taller Ruiz', job: 'Cambio de kit', total: 520000, paid: 340000 },
  ]);
  const owed = jobs.reduce((sum, j) => sum + (j.total - j.paid), 0);

  const registerPayment = (index: number) =>
    setJobs((list) => list.map((j, i) => (i === index ? { ...j, paid: j.total } : j)));

  return (
    <Section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.bg }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_20%_50%,rgba(245,196,81,0.10),transparent_70%)] pointer-events-none" />
      <Container maxWidth="xl" className="relative">
        <h2 className={`${heading} text-4xl sm:text-5xl text-center text-[#ECF5F1]`}>
          Sabes quién <span className={emeraldText}>te debe y cuánto</span>
        </h2>
        <p className="mt-3 text-center" style={{ color: C.text2 }}>
          Registra trabajos con su valor y sus abonos. Prueba: toca "Registrar pago" (datos de ejemplo).
        </p>

        <div className="mt-12 max-w-4xl mx-auto rounded-2xl border overflow-hidden" style={{ background: C.bg2, borderColor: C.border2 }}>
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 border-b" style={{ borderColor: C.border }}>
            <div>
              <p className="text-xs uppercase tracking-widest" style={{ color: C.text2 }}>Por cobrar</p>
              <motion.p key={owed} initial={{ scale: 1.15, color: C.gold }} animate={{ scale: 1, color: C.text }} className="text-4xl font-bold">
                {formatCOP(owed)}
              </motion.p>
            </div>
            <span className="text-sm" style={{ color: C.text2 }}>Cobros</span>
          </div>
          <div className="divide-y" style={{ borderColor: C.border }}>
            {jobs.map((j, i) => {
              const debt = j.total - j.paid;
              const pct = Math.round((j.paid / j.total) * 100);
              return (
                <div key={j.client} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center px-6 py-4" style={{ borderColor: C.border }}>
                  <div className="sm:col-span-4">
                    <p className="font-semibold text-[#ECF5F1]">{j.client}</p>
                    <p className="text-sm" style={{ color: C.text2 }}>{j.job}</p>
                  </div>
                  <div className="sm:col-span-4">
                    <div className="flex justify-between text-xs mb-1" style={{ color: C.text2 }}>
                      <span>Abonado {formatCOP(j.paid)}</span>
                      <span>Total {formatCOP(j.total)}</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: C.bg3 }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: debt === 0 ? C.accent2 : C.gold }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        animate={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 text-left sm:text-right font-semibold" style={{ color: debt === 0 ? C.accent2 : C.red }}>
                    {debt === 0 ? 'Pagado' : `Debe ${formatCOP(debt)}`}
                  </div>
                  <div className="sm:col-span-2 sm:text-right">
                    <button
                      type="button"
                      disabled={debt === 0}
                      onClick={() => registerPayment(i)}
                      className="rounded-lg px-3 py-2 text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-default hover:-translate-y-0.5"
                      style={{ background: debt === 0 ? C.bg3 : C.accent2, color: debt === 0 ? C.text2 : '#04130E' }}
                    >
                      {debt === 0 ? 'Listo' : 'Registrar pago'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

const BudgetsAndFinances: React.FC = () => {
  const budgets = [
    { name: 'Remodelar la vitrina', budget: 800000, spent: 920000 },
    { name: 'Comprar horno nuevo', budget: 2000000, spent: 1750000 },
  ];
  const months = [
    { m: 'May', inc: 2.1, exp: 1.4 },
    { m: 'Jun', inc: 2.6, exp: 1.6 },
    { m: 'Jul', inc: 2.3, exp: 1.9 },
    { m: 'Ago', inc: 3.0, exp: 1.7 },
    { m: 'Sep', inc: 3.4, exp: 2.0 },
    { m: 'Oct', inc: 3.8, exp: 2.1 },
  ];
  const max = 4;
  return (
    <Section className="py-20 md:py-28" style={{ background: C.bg2 }}>
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border p-7 sm:p-8" style={{ background: C.bg, borderColor: C.border2 }}>
            <h2 className={`${heading} text-3xl text-[#ECF5F1]`}>Proyectos internos</h2>
            <p className="mt-2 mb-8" style={{ color: C.text2 }}>Mejoras, compras o mantenimiento con presupuesto. Al terminar, KENAZ te dice si te sobró o te pasaste.</p>
            <div className="space-y-6">
              {budgets.map((b, i) => {
                const over = b.spent > b.budget;
                const diff = Math.abs(b.spent - b.budget);
                const pct = Math.min(100, (b.spent / b.budget) * 100);
                return (
                  <div key={b.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-[#ECF5F1]">{b.name}</span>
                      <span style={{ color: C.text2 }}>Presupuesto {formatCOP(b.budget)}</span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden" style={{ background: C.bg3 }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: over ? C.red : C.accent2 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.3 }}
                      />
                    </div>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 + i * 0.3 }}
                      className="mt-2 text-sm font-bold"
                      style={{ color: over ? C.red : C.accent2 }}
                    >
                      {over ? `Te pasaste ${formatCOP(diff)}` : `Te sobraron ${formatCOP(diff)}`}
                    </motion.p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border p-7 sm:p-8" style={{ background: C.bg, borderColor: C.border2 }}>
            <h2 className={`${heading} text-3xl text-[#ECF5F1]`}>Finanzas por mes</h2>
            <p className="mt-2 mb-6" style={{ color: C.text2 }}>Ingresos, gastos y ganancia de cada proyecto.</p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { label: 'Ingresos del mes', value: 3800000, color: C.accent2 },
                { label: 'Gastos del mes', value: 2100000, color: C.red },
                { label: 'Ganancia del mes', value: 1700000, color: C.gold },
              ].map((k) => (
                <div key={k.label} className="rounded-xl border p-3" style={{ background: C.bg2, borderColor: C.border }}>
                  <p className="text-[11px] leading-tight" style={{ color: C.text2 }}>{k.label}</p>
                  <Counter value={k.value} format={formatCOP} className="block mt-1 text-sm sm:text-lg font-bold" />
                  <span className="block h-0.5 mt-2 rounded" style={{ background: k.color }} />
                </div>
              ))}
            </div>
            <p className="text-xs mb-3" style={{ color: C.text2 }}>Ingresos y gastos · últimos 6 meses</p>
            <div className="flex items-end justify-between gap-2 h-40">
              {months.map((mo, i) => (
                <div key={mo.m} className="flex-1 flex flex-col items-center gap-2">
                  <div className="flex items-end gap-1 h-32 w-full justify-center">
                    <motion.span
                      className="w-1/3 max-w-[14px] rounded-t"
                      style={{ background: C.accent2 }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(mo.inc / max) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                    />
                    <motion.span
                      className="w-1/3 max-w-[14px] rounded-t"
                      style={{ background: C.red }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(mo.exp / max) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.05 }}
                    />
                  </div>
                  <span className="text-[11px]" style={{ color: C.text2 }}>{mo.m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: FolderKanban, title: 'Un proyecto por negocio', text: 'Cada negocio con su nombre y su color.' },
            { icon: History, title: 'Cierre e historial', text: 'Al terminar una tarea anotas gastos y detalles; todo queda por proyecto y fecha.' },
            { icon: GraduationCap, title: 'Tutorial integrado', text: 'La primera vez, unas burbujas te explican cada pantalla.' },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} whileHover={{ y: -6 }} className="rounded-2xl border p-6" style={{ background: C.bg, borderColor: C.border2 }}>
                <Icon className="w-8 h-8 mb-4" style={{ color: C.accent2 }} aria-hidden="true" />
                <h3 className="text-lg font-bold text-[#ECF5F1]">{f.title}</h3>
                <p className="mt-1 text-sm" style={{ color: C.text2 }}>{f.text}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

const OfflinePromise: React.FC = () => {
  const items = [
    { icon: UserX, title: 'Sin cuentas', text: 'No te registras en ningún lado.' },
    { icon: CloudOff, title: 'Sin internet', text: 'Funciona sin conexión.' },
    { icon: Megaphone, title: 'Sin publicidad', text: 'Ni analítica ni anuncios.' },
    { icon: Monitor, title: 'Todo en tu PC', text: 'Con copias de respaldo automáticas.' },
  ];
  return (
    <Section className="relative overflow-hidden py-20 md:py-24" style={{ background: C.bg }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(5,150,105,0.25),transparent_70%)] pointer-events-none" />
      <Container maxWidth="xl" className="relative">
        <h2 className={`${heading} text-4xl sm:text-5xl text-center text-[#ECF5F1]`}>
          Tus datos <span className={emeraldText}>nunca salen de tu computador</span>
        </h2>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', bounce: 0.4, delay: i * 0.1 }}
                className="rounded-3xl border p-6 text-center"
                style={{ background: C.bg2, borderColor: `${C.accent2}40` }}
              >
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: `${C.accent2}1A`, color: C.accent2 }}>
                  <Icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#ECF5F1]">{item.title}</h3>
                <p className="mt-1 text-sm" style={{ color: C.text2 }}>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

/* ---------- Página ---------- */

export const KenazPage: React.FC<{ app: AppInfo }> = ({ app }) => {
  useAppPageSetup(app);
  return (
    <div style={themeVarsFor(app.theme)} className="text-[var(--app-text)] overflow-x-clip">
      <Hero app={app} />
      <Reminders />
      <Collections />
      <BudgetsAndFinances />
      <OfflinePromise />
      <AppBottomSections app={app} />
    </div>
  );
};
