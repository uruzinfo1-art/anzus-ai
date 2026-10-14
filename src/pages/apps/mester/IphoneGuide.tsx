import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, ChevronDown, Compass, Globe, PlusSquare, Share, Smartphone, Tablet } from 'lucide-react';
import { FaApple } from 'react-icons/fa';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { navigateTo } from '@/lib/navigate';
import mesterLogo from '@/assets/images/apps/mester-logo.png';

// Pantalla propia (/apps/mester/iphone) con un tutorial paso a paso para dejar
// la versión web de MESTER como ícono en la pantalla de inicio del iPhone o iPad.

const GREEN = '#4AE176';
const PURPLE = '#9333EA';

type Device = 'iphone' | 'ipad';
type Phase = 'abrir' | 'compartir' | 'menu' | 'nombre' | 'listo';

// Pantalla de Safari dibujada con código; cada fase resalta lo que hay que tocar.
const MockScreen: React.FC<{ device: Device; phase: Phase }> = ({ device, phase }) => {
  const shareTop = device === 'ipad';
  const ShareButton = (
    <motion.span
      className="inline-flex items-center justify-center w-7 h-7 rounded-md text-[#0A84FF]"
      animate={
        phase === 'compartir'
          ? { scale: [1, 1.35, 1], backgroundColor: ['rgba(74,225,118,0)', 'rgba(74,225,118,0.45)', 'rgba(74,225,118,0)'] }
          : {}
      }
      transition={{ duration: 1.2, repeat: Infinity }}
    >
      <Share className="w-4 h-4" aria-hidden="true" />
    </motion.span>
  );

  return (
    <div
      className={`relative rounded-[1.6rem] border-[5px] border-[#2A2A2C] bg-[#F2F2F7] overflow-hidden ${device === 'ipad' ? 'w-[260px] aspect-[4/3]' : 'w-[150px] aspect-[9/19]'}`}
      aria-hidden="true"
    >
      {phase === 'listo' ? (
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B0764] via-[#581C87] to-[#0A0A0A] p-3">
          <div className={`grid ${device === 'ipad' ? 'grid-cols-6' : 'grid-cols-4'} gap-2.5`}>
            {Array.from({ length: device === 'ipad' ? 11 : 7 }).map((_, i) => (
              <span key={i} className="aspect-square rounded-[22%] bg-white/15" />
            ))}
            <motion.span
              className="flex flex-col items-center gap-0.5"
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 2 }}
            >
              <img src={mesterLogo} alt="" className="w-full aspect-square rounded-[22%] bg-black object-contain p-0.5 ring-2 ring-[#4AE176]" />
              <span className="text-[6px] text-white font-semibold">MESTER</span>
            </motion.span>
          </div>
        </div>
      ) : (
        <>
          {shareTop && (
            <div className="flex items-center gap-1.5 px-2 py-1.5 bg-white border-b border-black/10">
              <Compass className="w-3.5 h-3.5 text-[#0A84FF]" aria-hidden="true" />
              <span className="flex-1 rounded-md bg-[#E5E5EA] px-2 py-0.5 text-[7px] text-[#3C3C43] truncate">mester-web-ebon.vercel.app</span>
              {ShareButton}
            </div>
          )}

          <div
            className="absolute inset-x-0 bg-[#0A0A0A] flex flex-col items-center justify-center gap-1"
            style={{ top: shareTop ? 30 : 0, bottom: shareTop ? 0 : 38 }}
          >
            <img src={mesterLogo} alt="" className="w-10 h-10 object-contain" />
            <span className="text-[8px] font-bold text-white tracking-widest">MESTER</span>
          </div>

          {!shareTop && (
            <div className="absolute inset-x-0 bottom-0 bg-white border-t border-black/10 px-2 pt-1 pb-1.5">
              <motion.div
                className="rounded-md bg-[#E5E5EA] px-2 py-0.5 text-[6.5px] text-[#3C3C43] truncate text-center"
                animate={phase === 'abrir' ? { backgroundColor: ['#E5E5EA', 'rgba(74,225,118,0.5)', '#E5E5EA'] } : {}}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                mester-web-ebon.vercel.app
              </motion.div>
              <div className="mt-1 flex items-center justify-between text-[#0A84FF] px-1">
                <span className="text-[9px]">‹</span>
                <span className="text-[9px]">›</span>
                {ShareButton}
                <span className="w-3 h-3 rounded-sm border border-[#0A84FF]" />
                <span className="w-3 h-3 rounded-sm border border-[#0A84FF]" />
              </div>
            </div>
          )}

          {(phase === 'menu' || phase === 'nombre') && (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`absolute ${shareTop ? 'right-1.5 top-8 w-[62%]' : 'inset-x-0 bottom-0 rounded-t-xl'} bg-white shadow-xl p-1.5 space-y-1`}
            >
              {['Copiar', 'Añadir a favoritos', 'Añadir a pantalla de inicio', 'Buscar en la página'].map((item) => {
                const target = item === 'Añadir a pantalla de inicio' && phase === 'menu';
                return (
                  <motion.div
                    key={item}
                    className="flex items-center justify-between rounded-md px-1.5 py-1 text-[7px] text-[#1C1C1E]"
                    animate={target ? { backgroundColor: ['#F2F2F7', 'rgba(74,225,118,0.55)', '#F2F2F7'] } : {}}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    style={{ backgroundColor: '#F2F2F7', fontWeight: item === 'Añadir a pantalla de inicio' ? 700 : 400 }}
                  >
                    {item}
                    {item === 'Añadir a pantalla de inicio' && <PlusSquare className="w-2.5 h-2.5" aria-hidden="true" />}
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {phase === 'nombre' && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute inset-x-2 top-1/4 rounded-xl bg-white shadow-2xl p-2"
            >
              <div className="flex items-center justify-between text-[7px] mb-1.5">
                <span className="text-[#0A84FF]">Cancelar</span>
                <span className="font-bold text-[#1C1C1E]">Añadir a inicio</span>
                <motion.span
                  className="font-bold text-[#0A84FF] rounded px-0.5"
                  animate={{ scale: [1, 1.4, 1], backgroundColor: ['rgba(74,225,118,0)', 'rgba(74,225,118,0.5)', 'rgba(74,225,118,0)'] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  Añadir
                </motion.span>
              </div>
              <div className="flex items-center gap-1.5">
                <img src={mesterLogo} alt="" className="w-6 h-6 rounded-md bg-black object-contain" />
                <span className="flex-1 rounded bg-[#F2F2F7] px-1.5 py-0.5 text-[7px] text-[#1C1C1E]">MESTER</span>
              </div>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

type Step = { phase: Phase; title: string; text: string; icon: React.FC<{ className?: string }> };

const stepsFor = (device: Device): Step[] => [
  {
    phase: 'abrir',
    icon: Compass,
    title: 'Abre MESTER en Safari',
    text: 'Toca el botón verde de abajo. Se abrirá MESTER en Safari.',
  },
  {
    phase: 'compartir',
    icon: Share,
    title: 'Toca Compartir',
    text:
      device === 'iphone'
        ? 'Es el cuadrado con una flecha hacia arriba, en la barra de abajo.'
        : 'Es el cuadrado con una flecha hacia arriba, arriba a la derecha.',
  },
  {
    phase: 'menu',
    icon: PlusSquare,
    title: 'Toca "Añadir a pantalla de inicio"',
    text: 'Si no la ves, desliza el menú hacia abajo.',
  },
  {
    phase: 'nombre',
    icon: Check,
    title: 'Toca "Añadir"',
    text: 'Está arriba a la derecha.',
  },
  {
    phase: 'listo',
    icon: Smartphone,
    title: '¡Listo!',
    text: 'MESTER ya está en tu pantalla de inicio. Ábrela desde ahí como cualquier app.',
  },
];

export const MesterIphonePage: React.FC<{ webUrl: string }> = ({ webUrl }) => {
  const [device, setDevice] = useState<Device>('iphone');
  const [index, setIndex] = useState(0);
  const [ayuda, setAyuda] = useState(false);
  const steps = stepsFor(device);
  const step = steps[index];
  const ultimo = index === steps.length - 1;
  const Icon = step.icon;

  useEffect(() => {
    const fontUrl = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap';
    if (!document.querySelector(`link[href="${fontUrl}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = fontUrl;
      document.head.appendChild(link);
    }
    const anterior = document.title;
    document.title = 'MESTER en tu iPhone o iPad — ANSUZ';
    window.scrollTo({ top: 0 });
    return () => {
      document.title = anterior;
    };
  }, []);

  // Cada dispositivo empieza desde el primer paso.
  const cambiarDispositivo = (d: Device) => {
    setDevice(d);
    setIndex(0);
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
      <Section className="relative overflow-hidden pt-28 pb-16 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(147,51,234,0.35),transparent_70%)] pointer-events-none" />
        <Container maxWidth="md" className="relative">
          <a
            href="/apps/mester"
            onClick={(e) => navigateTo(e, '/apps/mester')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#CFC2D7] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Volver a MESTER
          </a>

          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-[#CFC2D7]">
              <img src={mesterLogo} alt="" className="w-10 h-10 object-contain" />
              <FaApple className="w-6 h-6" aria-hidden="true" />
            </div>
            <h1 className="mt-3 font-bold italic uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl">
              MESTER en tu{' '}
              <span className="bg-gradient-to-r from-[#4AE176] to-[#A3E635] bg-clip-text text-transparent pr-[0.15em]">
                {device === 'iphone' ? 'iPhone' : 'iPad'}
              </span>
            </h1>
            <p className="mt-3 text-[#CFC2D7]">5 pasos sencillos. No necesitas la App Store.</p>

            <div className="mt-6 inline-flex rounded-2xl border border-white/10 bg-black/40 p-1" role="tablist" aria-label="Elige tu dispositivo">
              {(['iphone', 'ipad'] as const).map((d) => {
                const DIcon = d === 'iphone' ? Smartphone : Tablet;
                const active = device === d;
                return (
                  <button
                    key={d}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => cambiarDispositivo(d)}
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-bold transition-colors"
                    style={{ background: active ? PURPLE : 'transparent', color: active ? '#FFFFFF' : '#CFC2D7' }}
                  >
                    <DIcon className="w-5 h-5" aria-hidden="true" />
                    {d === 'iphone' ? 'iPhone' : 'iPad'}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tarjeta del paso actual */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-[#131315] p-6 sm:p-8">
            <div className="flex items-center justify-between text-sm font-semibold text-[#CFC2D7]">
              <span>
                Paso {index + 1} de {steps.length}
              </span>
              <div className="flex gap-1.5" aria-hidden="true">
                {steps.map((s, i) => (
                  <span
                    key={s.phase}
                    className="h-2 rounded-full transition-all"
                    style={{ width: i === index ? 24 : 8, background: i <= index ? GREEN : 'rgba(255,255,255,0.15)' }}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${device}-${index}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="mt-6"
              >
                <div className="text-center">
                  <h2 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold">
                    <Icon className="w-6 h-6 shrink-0 text-[#4AE176]" aria-hidden="true" />
                    {step.title}
                  </h2>
                  <p className="mt-2 text-lg text-[#CFC2D7]">{step.text}</p>
                </div>

                {/* Ilustración ampliada */}
                <div
                  className={`mt-6 flex justify-center ${device === 'iphone' ? 'h-[400px] sm:h-[500px]' : 'h-[205px] sm:h-[290px]'}`}
                >
                  <div className={`origin-top ${device === 'iphone' ? 'scale-[1.25] sm:scale-[1.55]' : 'scale-100 sm:scale-[1.35]'}`}>
                    <MockScreen device={device} phase={step.phase} />
                  </div>
                </div>

                <div className="text-center">

                  {step.phase === 'abrir' && (
                    <a
                      href={webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-[#04130A] transition-transform hover:-translate-y-0.5"
                      style={{ background: GREEN, boxShadow: '0 0 30px -6px rgba(74,225,118,0.9)' }}
                    >
                      <Globe className="w-5 h-5" aria-hidden="true" />
                      Abrir MESTER
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navegación */}
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className="inline-flex items-center justify-center gap-2 h-14 px-5 rounded-2xl border border-white/15 font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                Atrás
              </button>
              {ultimo ? (
                <a
                  href="/apps/mester"
                  onClick={(e) => navigateTo(e, '/apps/mester')}
                  className="flex-1 inline-flex items-center justify-center gap-2 h-14 rounded-2xl font-bold text-white"
                  style={{ backgroundImage: 'linear-gradient(90deg, #7E22CE, #9333EA, #C026D3)' }}
                >
                  <Check className="w-5 h-5" aria-hidden="true" />
                  Terminar
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setIndex((i) => Math.min(steps.length - 1, i + 1))}
                  className="flex-1 inline-flex items-center justify-center gap-2 h-14 rounded-2xl font-bold text-white transition-transform hover:-translate-y-0.5"
                  style={{ backgroundImage: 'linear-gradient(90deg, #7E22CE, #9333EA, #C026D3)', boxShadow: '0 0 30px -8px rgba(147,51,234,0.9)' }}
                >
                  Siguiente
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {/* Ayuda */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-[#131315]">
            <button
              type="button"
              onClick={() => setAyuda((v) => !v)}
              aria-expanded={ayuda}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-semibold"
            >
              ¿No te aparece "Añadir a pantalla de inicio"?
              <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${ayuda ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {ayuda && (
              <ul className="px-5 pb-5 space-y-2 text-[#CFC2D7] list-disc pl-10">
                <li>Usa <strong className="text-white">Safari</strong>. Si se abrió dentro de WhatsApp o Instagram, toca "Abrir en Safari".</li>
                <li>En el menú de Compartir, <strong className="text-white">desliza hacia abajo</strong>.</li>
                <li>Al final del menú toca <strong className="text-white">"Editar acciones…"</strong> y actívala.</li>
                <li>No uses la <strong className="text-white">navegación privada</strong>.</li>
              </ul>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
};
