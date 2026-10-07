import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCheck,
  FileText,
  Home,
  Keyboard,
  Mic,
  PiggyBank,
  Receipt,
  Sprout,
  Store,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import type { AppInfo } from '../appsData';
import { AppBottomSections, BackToAppsLink, themeVarsFor, useAppPageSetup } from '../AppPage';
import { BigDownloadButton, Counter, FloatingChip, formatCOP } from '../shared';
import amaraLogo from '@/assets/images/apps/amara/logo-grande.webp';
import amaraPerfiles from '@/assets/images/apps/amara-perfiles.jpg';
import amaraBolsillos from '@/assets/images/apps/amara-bolsillos.jpg';
import amaraNuevoGasto from '@/assets/images/apps/amara-nuevo-gasto.jpg';

const GREEN = '#00E676';
const PURPLE = '#B05BD8';
const RED = '#FF4D6D';
const greenText = 'bg-gradient-to-r from-[#00E676] via-[#5CFFA8] to-[#00C853] bg-clip-text text-transparent';
const heading = 'font-extrabold tracking-tight leading-[1.02]';

/* ---------- Chat de WhatsApp que se reproduce solo (datos inventados) ---------- */

type ChatItem =
  | { from: 'user'; kind: 'text'; text: string }
  | { from: 'user'; kind: 'voice'; seconds: string }
  | { from: 'user'; kind: 'receipt' }
  | { from: 'amara'; kind: 'text'; text: string };

const script: ChatItem[] = [
  { from: 'user', kind: 'text', text: 'gasté 20 mil en almuerzo' },
  { from: 'amara', kind: 'text', text: 'Listo. Registré $20.000 en Comida.' },
  { from: 'user', kind: 'voice', seconds: '0:04' },
  { from: 'amara', kind: 'text', text: 'Anoté un ingreso de $500.000.' },
  { from: 'user', kind: 'receipt' },
  { from: 'amara', kind: 'text', text: 'Leí tu recibo: $86.400 en Mercado.' },
  { from: 'user', kind: 'text', text: '¿cuánto tengo disponible?' },
  { from: 'amara', kind: 'text', text: 'Este mes tienes $1.240.000 disponibles.' },
];

const VoiceBubble: React.FC<{ seconds: string }> = ({ seconds }) => (
  <div className="flex items-center gap-2">
    <Mic className="w-4 h-4 text-[#0B3D2E]" aria-hidden="true" />
    <div className="flex items-end gap-[3px] h-5">
      {[6, 12, 18, 10, 16, 8, 14, 20, 9, 13, 7, 11].map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-[#0B3D2E]"
          animate={{ height: [h * 0.5, h, h * 0.5] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.06 }}
        />
      ))}
    </div>
    <span className="text-[11px] text-[#0B3D2E]">{seconds}</span>
  </div>
);

const ReceiptBubble: React.FC = () => (
  <div className="relative w-40 rounded-lg bg-white p-2.5 font-mono text-[10px] text-[#111] overflow-hidden">
    <p className="text-center font-bold">SUPERMERCADO</p>
    <p className="text-center text-[#666] mb-1.5">Factura de venta</p>
    <div className="flex justify-between"><span>Arroz</span><span>8.900</span></div>
    <div className="flex justify-between"><span>Pollo</span><span>32.500</span></div>
    <div className="flex justify-between"><span>Frutas</span><span>21.000</span></div>
    <div className="flex justify-between"><span>Otros</span><span>24.000</span></div>
    <div className="mt-1.5 pt-1 border-t border-dashed border-[#999] flex justify-between font-bold">
      <span>TOTAL</span><span>86.400</span>
    </div>
    <motion.div
      className="absolute inset-x-0 h-6 bg-gradient-to-b from-transparent via-[#00E676]/60 to-transparent"
      initial={{ top: '-20%' }}
      animate={{ top: ['-20%', '100%'] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

const TypingDots: React.FC = () => (
  <div className="flex gap-1 px-1 py-1">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-[#8696A0]"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
  </div>
);

const WhatsAppDemo: React.FC = () => {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (shown >= script.length) {
      const restart = setTimeout(() => setShown(0), 3500);
      return () => clearTimeout(restart);
    }
    const next = script[shown];
    if (next.from === 'amara') {
      setTyping(true);
      const t = setTimeout(() => {
        setTyping(false);
        setShown((n) => n + 1);
      }, 1300);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 600 : 1500);
    return () => clearTimeout(t);
  }, [shown]);

  // Solo se ven los últimos mensajes, como en un chat que avanza.
  const visible = script.slice(0, shown).map((item, i) => ({ item, i })).slice(-4);

  return (
    <div
      className="w-[290px] rounded-[2.4rem] border-[7px] border-[#1C2128] bg-[#0B141A] overflow-hidden shadow-[0_30px_90px_-20px_rgba(0,230,118,0.6)]"
      role="img"
      aria-label="Ejemplo de conversación con AMARA por WhatsApp"
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-[#202C33]">
        <img src={amaraLogo} alt="" className="w-9 h-9 rounded-full bg-white object-contain" />
        <div>
          <p className="text-sm font-semibold text-white leading-tight">AMARA</p>
          <p className="text-[11px] text-[#8696A0]">{typing ? 'escribiendo…' : 'en línea'}</p>
        </div>
      </div>
      <div className="h-[430px] overflow-hidden px-3 py-4 flex flex-col justify-end gap-2 bg-[#0B141A] bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:14px_14px]">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map(({ item, i }) => {
            const isUser = item.from === 'user';
            return (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 14, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] rounded-xl px-3 py-2 text-[13px] leading-snug ${
                    isUser ? 'bg-[#005C4B] text-white rounded-tr-sm' : 'bg-[#202C33] text-white rounded-tl-sm'
                  }`}
                >
                  {item.kind === 'text' && item.text}
                  {item.kind === 'voice' && (
                    <div className="rounded-md bg-[#25D366]/90 px-2 py-1">
                      <VoiceBubble seconds={item.seconds} />
                    </div>
                  )}
                  {item.kind === 'receipt' && <ReceiptBubble />}
                  <div className="mt-0.5 flex justify-end items-center gap-1 text-[10px] text-white/50">
                    9:{(12 + i * 3).toString().padStart(2, '0')}
                    {isUser && <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" aria-hidden="true" />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {typing && (
          <div className="flex justify-start">
            <div className="rounded-xl rounded-tl-sm bg-[#202C33] px-3 py-2">
              <TypingDots />
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#202C33]">
        <div className="flex-1 rounded-full bg-[#2A3942] px-4 py-2 text-[12px] text-[#8696A0]">Mensaje</div>
        <div className="w-9 h-9 rounded-full bg-[#00A884] flex items-center justify-center">
          <Mic className="w-4 h-4 text-white" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

/* ---------- Secciones ---------- */

const RotatingWord: React.FC = () => {
  const words = ['escribir.', 'hablar.', 'una foto.'];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);
  // Se vuelve a montar con cada palabra: entra desde abajo sin dejar el título en blanco.
  return (
    <motion.span
      key={words[i]}
      initial={{ y: '40%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className={`inline-block pr-[0.1em] ${greenText}`}
    >
      {words[i]}
    </motion.span>
  );
};

const Hero: React.FC<{ app: AppInfo }> = ({ app }) => (
  <Section className="relative overflow-hidden bg-[#05070A] pt-28 pb-16 md:pt-32 lg:pb-24">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,230,118,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,230,118,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
    <div className="absolute -top-40 right-[-10%] w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(0,230,118,0.28),transparent_65%)] pointer-events-none" />
    <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(176,91,216,0.18),transparent_65%)] pointer-events-none" />

    <Container maxWidth="xl" className="relative z-10">
      <div className="mb-8">
        <BackToAppsLink />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <img src={amaraLogo} alt="Logo de AMARA" className="w-12 h-12 rounded-xl bg-white object-contain p-0.5" />
            <span className="px-3 py-1 rounded-full border border-[#00E676]/50 bg-[#00E676]/10 text-[#5CFFA8] text-xs font-bold uppercase tracking-widest">
              Android + WhatsApp · Gratis
            </span>
          </div>

          <h1 className={`${heading} text-5xl sm:text-6xl xl:text-7xl text-white`}>
            Tus finanzas,
            <br />
            con solo <RotatingWord />
          </h1>

          <p className="mt-6 text-lg text-[#A1A1AA] leading-relaxed max-w-xl mx-auto lg:mx-0">
            AMARA es tu asistente financiero personal y de negocios. Le hablas por WhatsApp o desde su app, como a una persona, y ella registra, organiza y te responde.{' '}
            <span className="text-white font-semibold">Sin formularios ni menús.</span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <BigDownloadButton
              href={app.downloadUrl}
              gradient="linear-gradient(90deg, #00C853, #00E676, #5CFFA8)"
              glow="rgba(0,230,118,0.8)"
              textColor="#02130A"
              className="w-full sm:w-auto"
            />
            <a
              href="#como-le-hablas"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#como-le-hablas')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center h-14 px-7 rounded-2xl border border-[#00E676]/40 text-white font-semibold hover:bg-[#00E676]/10 transition-colors w-full sm:w-auto"
            >
              Mira cómo funciona
            </a>
          </div>
          <p className="mt-5 text-sm text-[#A1A1AA]">
            APK para Android · Versión {app.version} · {app.fileSize} · <span className="text-[#00E676] font-semibold">Gratis</span>
          </p>
        </motion.div>

        <div className="lg:col-span-6 relative flex justify-center lg:justify-end min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block absolute right-0 top-10 w-[230px] rounded-[2.2rem] border-[6px] border-[#1C2128] overflow-hidden opacity-80"
          >
            <img src={amaraPerfiles} alt="Panel principal de la app AMARA" className="w-full h-auto block" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, type: 'spring', bounce: 0.3 }}
            className="relative z-20 lg:mr-[170px]"
          >
            <WhatsAppDemo />
          </motion.div>

          <FloatingChip color={GREEN} className="left-0 sm:left-6 lg:left-0 top-16" delay={0.2}>
            <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
            +$500.000 ingreso
          </FloatingChip>
          <FloatingChip color={RED} className="right-0 sm:right-6 lg:right-auto lg:left-[-10px] top-[55%]" delay={0.5}>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            −$20.000 almuerzo
          </FloatingChip>
          <FloatingChip color={PURPLE} className="left-4 lg:left-auto lg:right-0 bottom-6" delay={0.8}>
            <PiggyBank className="w-4 h-4" aria-hidden="true" />
            Bolsillo Viaje 62%
          </FloatingChip>
        </div>
      </div>
    </Container>
  </Section>
);

const WaysToTalk: React.FC = () => {
  const ways = [
    { icon: Keyboard, color: GREEN, title: 'Escríbele', text: '"gasté 20 mil en almuerzo" o "me pagaron 500 mil". Con una frase basta.' },
    { icon: Mic, color: '#34D3EE', title: 'Mándale un audio', text: 'Cuéntale tus gastos en una nota de voz y ella los entiende.' },
    { icon: Receipt, color: '#FBBF24', title: 'Tómale foto al recibo', text: 'Lee fotos de recibos y saca el total por ti.' },
    { icon: FileText, color: PURPLE, title: 'Envíale la factura', text: 'También lee facturas en PDF. No tienes que escribirlo todo.' },
  ];
  return (
    <Section id="como-le-hablas" className="bg-[#05070A] py-20 md:py-28 border-t border-[#00E676]/15">
      <Container maxWidth="xl">
        <h2 className={`${heading} text-4xl sm:text-5xl text-center text-white`}>
          Háblale <span className={greenText}>como quieras</span>
        </h2>
        <p className="mt-3 text-center text-[#A1A1AA]">Escribe, habla o manda una foto. AMARA se encarga del resto.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ways.map((way, i) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, rotate: i % 2 ? 1 : -1 }}
                className="rounded-3xl border bg-[#0B0F14] p-6"
                style={{ borderColor: `${way.color}55`, boxShadow: `0 0 50px -25px ${way.color}` }}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${way.color}1F`, color: way.color }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                >
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{way.title}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{way.text}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

const AskAnything: React.FC = () => {
  const questions = [
    { q: '¿Cuánto gasté este mes?', a: 'Llevas $1.860.000 en gastos este mes. El mayor fue Mercado.', value: 1860000, label: 'gastado' },
    { q: '¿Cuánto tengo disponible?', a: 'Tienes $1.240.000 disponibles, sin contar tus bolsillos.', value: 1240000, label: 'disponible' },
    { q: 'Hazme el resumen del mes', a: 'Ingresos $3.100.000 · Gastos $1.860.000 · Ahorrado $500.000.', value: 3100000, label: 'ingresos' },
  ];
  const [active, setActive] = useState(0);
  const current = questions[active];
  return (
    <Section className="relative overflow-hidden bg-[#0B0F14] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(0,230,118,0.14),transparent_70%)] pointer-events-none" />
      <Container maxWidth="xl" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className={`${heading} text-4xl sm:text-5xl text-white`}>
              Pregúntale <span className={greenText}>lo que quieras</span>
            </h2>
            <p className="mt-4 text-lg text-[#A1A1AA]">Toca una pregunta y mira cómo responde (ejemplo con datos inventados).</p>
            <div className="mt-8 flex flex-col gap-3 max-w-md mx-auto lg:mx-0">
              {questions.map((item, i) => (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={`text-left rounded-2xl border px-5 py-4 font-semibold transition-all ${
                    active === i
                      ? 'bg-[#005C4B] border-[#00E676] text-white shadow-[0_0_30px_-10px_#00E676]'
                      : 'bg-[#05070A] border-[#00E676]/20 text-[#D4D4D8] hover:border-[#00E676]/60'
                  }`}
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.q}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: 'spring', bounce: 0.35, duration: 0.6 }}
                className="w-full max-w-md rounded-3xl border border-[#00E676]/30 bg-[#05070A] p-8 shadow-[0_30px_80px_-30px_rgba(0,230,118,0.6)]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <img src={amaraLogo} alt="" className="w-10 h-10 rounded-full bg-white object-contain" />
                  <span className="font-semibold text-white">AMARA responde</span>
                </div>
                <Counter
                  key={current.q}
                  value={current.value}
                  format={formatCOP}
                  className="block text-5xl sm:text-6xl font-extrabold text-[#00E676] tracking-tight"
                />
                <p className="mt-1 text-sm uppercase tracking-widest text-[#A1A1AA]">{current.label}</p>
                <p className="mt-6 rounded-2xl bg-[#202C33] px-4 py-3 text-white">{current.a}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Pockets: React.FC = () => {
  const pockets = [
    { name: 'Viaje', pct: 62, color: '#34D3EE', saved: 1240000 },
    { name: 'Moto', pct: 35, color: PURPLE, saved: 2100000 },
    { name: 'Emergencias', pct: 80, color: GREEN, saved: 1600000 },
  ];
  return (
    <Section className="bg-[#05070A] py-20 md:py-28 overflow-hidden">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className={`${heading} text-4xl sm:text-5xl text-white text-center lg:text-left`}>
              Bolsillos que <span className={greenText}>se llenan</span>
            </h2>
            <p className="mt-4 text-lg text-[#A1A1AA] text-center lg:text-left">
              Guarda y saca plata para tus metas. Y al terminar el mes, AMARA te pregunta sola qué hacer con lo que sobró.
            </p>

            <div className="mt-10 space-y-5">
              {pockets.map((p, i) => (
                <div key={p.name} className="rounded-2xl border border-white/5 bg-[#0B0F14] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center gap-2 font-semibold text-white">
                      <PiggyBank className="w-5 h-5" style={{ color: p.color }} aria-hidden="true" />
                      {p.name}
                    </span>
                    <span className="text-sm text-[#A1A1AA]">
                      <Counter value={p.saved} format={formatCOP} className="text-white font-semibold" /> · {p.pct}%
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: p.color, boxShadow: `0 0 16px ${p.color}` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: i * 0.2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 rounded-2xl border border-[#00E676]/30 bg-[#0B141A] p-5"
            >
              <p className="text-xs uppercase tracking-widest text-[#00E676] mb-2">Cierre de mes</p>
              <p className="rounded-xl rounded-tl-sm bg-[#202C33] px-4 py-3 text-white inline-block">
                Te sobraron $350.000 este mes. ¿Qué quieres hacer con ellos?
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, rotate: 6, y: 40 }}
              whileInView={{ opacity: 1, rotate: -3, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
              className="w-[260px] rounded-[2.2rem] border-[6px] border-[#1C2128] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,230,118,0.5)]"
            >
              <img src={amaraBolsillos} alt="Bolsillos de ahorro en la app AMARA" loading="lazy" className="w-full h-auto block" />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Profiles: React.FC = () => {
  const profiles = [
    { icon: Home, color: '#34D3EE', title: 'Hogar', text: 'Tus gastos personales y los de la casa, sin esfuerzo.' },
    { icon: Store, color: GREEN, title: 'Negocio de flujo continuo', text: 'Tiendas y servicios con ventas y gastos todos los días.' },
    { icon: Sprout, color: '#FBBF24', title: 'Negocio de ciclo productivo', text: 'Agro y proyectos por ciclos, con socios e inversión.' },
  ];
  return (
    <Section className="relative bg-[#0B0F14] py-20 md:py-28">
      <Container maxWidth="xl">
        <h2 className={`${heading} text-4xl sm:text-5xl text-center text-white`}>
          Para tu casa <span className={greenText}>y tu negocio</span>
        </h2>
        <p className="mt-3 text-center text-[#A1A1AA]">Varios perfiles en una sola app. Cambias de uno a otro en un toque.</p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative overflow-hidden rounded-3xl border bg-[#05070A] p-8"
                style={{ borderColor: `${p.color}55` }}
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-40" style={{ backgroundColor: p.color }} />
                <Icon className="relative w-12 h-12 mb-6" style={{ color: p.color }} aria-hidden="true" />
                <h3 className="relative text-2xl font-bold text-white mb-2">{p.title}</h3>
                <p className="relative text-[#A1A1AA]">{p.text}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center items-end gap-4 sm:gap-8">
          {[
            { src: amaraNuevoGasto, alt: 'Registrar un gasto en AMARA', rotate: -6 },
            { src: amaraPerfiles, alt: 'Perfiles en AMARA', rotate: 0 },
            { src: amaraBolsillos, alt: 'Bolsillos de ahorro en AMARA', rotate: 6 },
          ].map((shot, i) => (
            <motion.div
              key={shot.alt}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{ opacity: 1, y: i === 1 ? -20 : 0, rotate: shot.rotate }}
              whileHover={{ y: -30, rotate: 0, scale: 1.05, zIndex: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`${i === 1 ? 'w-[180px] sm:w-[230px]' : 'hidden sm:block w-[200px]'} rounded-[2rem] border-[6px] border-[#1C2128] overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,230,118,0.6)]`}
            >
              <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full h-auto block" />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

/* ---------- Página ---------- */

export const AmaraPage: React.FC<{ app: AppInfo }> = ({ app }) => {
  useAppPageSetup(app);
  return (
    <div style={themeVarsFor(app.theme)} className="bg-[#05070A] text-[var(--app-text)] overflow-x-clip">
      <Hero app={app} />
      <WaysToTalk />
      <AskAnything />
      <Pockets />
      <Profiles />
      <AppBottomSections app={app} />
    </div>
  );
};
