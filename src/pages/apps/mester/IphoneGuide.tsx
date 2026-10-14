import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Globe, Lightbulb, PlusSquare, Share, Smartphone, Tablet } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import mesterLogo from '@/assets/images/apps/mester-logo.png';

// Tutorial para usar la versión web de MESTER en iPhone/iPad y dejarla como ícono en la pantalla de inicio.

const GREEN = '#4AE176';
const PURPLE = '#9333EA';

type Device = 'iphone' | 'ipad';

// Pantallas dibujadas con código que imitan Safari en cada paso.
const MockScreen: React.FC<{ device: Device; step: number }> = ({ device, step }) => {
  const shareTop = device === 'ipad';
  const ShareButton = (
    <motion.span
      className="inline-flex items-center justify-center w-7 h-7 rounded-md text-[#0A84FF]"
      animate={step === 1 ? { scale: [1, 1.25, 1], backgroundColor: ['rgba(10,132,255,0)', 'rgba(10,132,255,0.2)', 'rgba(10,132,255,0)'] } : {}}
      transition={{ duration: 1.4, repeat: Infinity }}
    >
      <Share className="w-4 h-4" aria-hidden="true" />
    </motion.span>
  );

  return (
    <div
      className={`relative mx-auto rounded-[1.6rem] border-[5px] border-[#2A2A2C] bg-[#F2F2F7] overflow-hidden ${device === 'ipad' ? 'w-full max-w-[260px] aspect-[4/3]' : 'w-[150px] aspect-[9/19]'}`}
      aria-hidden="true"
    >
      {step === 4 ? (
        // Pantalla de inicio con el ícono nuevo.
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B0764] via-[#581C87] to-[#0A0A0A] p-3">
          <div className={`grid ${device === 'ipad' ? 'grid-cols-6' : 'grid-cols-4'} gap-2.5`}>
            {Array.from({ length: device === 'ipad' ? 11 : 7 }).map((_, i) => (
              <span key={i} className="aspect-square rounded-[22%] bg-white/15" />
            ))}
            <motion.span
              className="flex flex-col items-center gap-0.5"
              initial={{ scale: 0 }}
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
          {/* Barra de Safari arriba (iPad) */}
          {shareTop && (
            <div className="flex items-center gap-1.5 px-2 py-1.5 bg-white border-b border-black/10">
              <Compass className="w-3.5 h-3.5 text-[#0A84FF]" aria-hidden="true" />
              <span className="flex-1 rounded-md bg-[#E5E5EA] px-2 py-0.5 text-[7px] text-[#3C3C43] truncate">mester-web-ebon.vercel.app</span>
              {ShareButton}
            </div>
          )}

          {/* Contenido de la web */}
          <div className="absolute inset-x-0 bg-[#0A0A0A] flex flex-col items-center justify-center gap-1" style={{ top: shareTop ? 30 : 0, bottom: shareTop ? 0 : 38 }}>
            <img src={mesterLogo} alt="" className="w-10 h-10 object-contain" />
            <span className="text-[8px] font-bold text-white tracking-widest">MESTER</span>
          </div>

          {/* Barra de Safari abajo (iPhone) */}
          {!shareTop && (
            <div className="absolute inset-x-0 bottom-0 bg-white border-t border-black/10 px-2 pt-1 pb-1.5">
              <div className="rounded-md bg-[#E5E5EA] px-2 py-0.5 text-[6.5px] text-[#3C3C43] truncate text-center">mester-web-ebon.vercel.app</div>
              <div className="mt-1 flex items-center justify-between text-[#0A84FF] px-1">
                <span className="text-[9px]">‹</span>
                <span className="text-[9px]">›</span>
                {ShareButton}
                <span className="w-3 h-3 rounded-sm border border-[#0A84FF]" />
                <span className="w-3 h-3 rounded-sm border border-[#0A84FF]" />
              </div>
            </div>
          )}

          {/* Menú Compartir */}
          {(step === 2 || step === 3) && (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`absolute ${shareTop ? 'right-1.5 top-8 w-[62%]' : 'inset-x-0 bottom-0 rounded-t-xl'} bg-white shadow-xl p-1.5 space-y-1`}
            >
              {['Copiar', 'Añadir a favoritos', 'Añadir a pantalla de inicio', 'Buscar en la página'].map((item) => {
                const target = item === 'Añadir a pantalla de inicio';
                return (
                  <motion.div
                    key={item}
                    className="flex items-center justify-between rounded-md px-1.5 py-1 text-[7px] text-[#1C1C1E]"
                    animate={target ? { backgroundColor: ['#F2F2F7', 'rgba(74,225,118,0.35)', '#F2F2F7'] } : {}}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    style={{ backgroundColor: '#F2F2F7', fontWeight: target ? 700 : 400 }}
                  >
                    {item}
                    {target && <PlusSquare className="w-2.5 h-2.5" aria-hidden="true" />}
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Confirmar nombre */}
          {step === 3 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute inset-x-2 top-1/4 rounded-xl bg-white shadow-2xl p-2"
            >
              <div className="flex items-center justify-between text-[7px] mb-1.5">
                <span className="text-[#0A84FF]">Cancelar</span>
                <span className="font-bold text-[#1C1C1E]">Añadir a inicio</span>
                <motion.span className="font-bold text-[#0A84FF]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>
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

const stepsFor = (device: Device) => [
  {
    icon: Compass,
    title: 'Ábrela en Safari',
    text: 'Entra a la versión web de MESTER desde Safari (la brújula azul). Si el enlace se abrió dentro de WhatsApp o Instagram, toca "Abrir en Safari".',
  },
  {
    icon: Share,
    title: 'Toca Compartir',
    text:
      device === 'iphone'
        ? 'Es el cuadrado con una flecha hacia arriba, en la barra de abajo. Si no ves la barra, desliza la página un poco hacia abajo.'
        : 'Es el cuadrado con una flecha hacia arriba, arriba a la derecha, junto a la barra de dirección.',
  },
  {
    icon: PlusSquare,
    title: '"Añadir a pantalla de inicio"',
    text: 'Desliza hacia abajo en el menú hasta encontrarla y tócala. Luego toca "Añadir" arriba a la derecha.',
  },
  {
    icon: Smartphone,
    title: '¡Listo, ya es una app!',
    text: 'MESTER queda en tu pantalla de inicio. Ábrela desde ahí cada vez que vayas a entrenar.',
  },
];

export const IphoneGuide: React.FC<{ webUrl: string }> = ({ webUrl }) => {
  const [device, setDevice] = useState<Device>('iphone');
  const steps = stepsFor(device);

  return (
    <Section id="iphone" className="relative overflow-hidden bg-[#131315] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(74,225,118,0.12),transparent_70%)] pointer-events-none" />
      <Container maxWidth="xl" className="relative">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-md border border-[#4AE176]/50 bg-[#4AE176]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#4AE176]">
            <Globe className="w-3.5 h-3.5" aria-hidden="true" />
            Versión web
          </span>
          <h2 className="mt-5 font-bold italic uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl text-white">
            ¿Tienes{' '}
            <span className="bg-gradient-to-r from-[#4AE176] to-[#A3E635] bg-clip-text text-transparent pr-[0.15em]">iPhone o iPad?</span>
          </h2>
          <p className="mt-3 text-[#CFC2D7] max-w-2xl mx-auto">
            Usa MESTER en la web y déjala en tu pantalla de inicio como una app más. No necesitas la App Store.
          </p>

          <div className="mt-8 inline-flex rounded-2xl border border-white/10 bg-black/40 p-1" role="tablist" aria-label="Elige tu dispositivo">
            {(['iphone', 'ipad'] as const).map((d) => {
              const Icon = d === 'iphone' ? Smartphone : Tablet;
              const active = device === d;
              return (
                <button
                  key={d}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setDevice(d)}
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-colors"
                  style={{ background: active ? PURPLE : 'transparent', color: active ? '#FFFFFF' : '#CFC2D7' }}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {d === 'iphone' ? 'iPhone' : 'iPad'}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={`${device}-${s.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex flex-col rounded-3xl border border-white/10 bg-[#0A0A0A] p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: GREEN, color: '#04130A' }}>
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-white leading-tight flex items-center gap-1.5">
                    <Icon className="w-4 h-4 shrink-0 text-[#4AE176]" aria-hidden="true" />
                    {s.title}
                  </h3>
                </div>
                <div className="flex-1 flex items-center justify-center py-2">
                  <MockScreen device={device} step={i + 1} />
                </div>
                <p className="mt-4 text-sm text-[#CFC2D7] leading-relaxed">{s.text}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 rounded-3xl border border-[#F59E0B]/40 bg-[#F59E0B]/5 p-6">
            <h3 className="flex items-center gap-2 font-bold text-white">
              <Lightbulb className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />
              ¿No ves "Añadir a pantalla de inicio"?
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#CFC2D7] list-disc pl-5">
              <li>Asegúrate de estar en <strong className="text-white">Safari</strong>, no dentro de WhatsApp, Instagram u otra app.</li>
              <li>En el menú de Compartir, <strong className="text-white">desliza hacia abajo</strong>: la opción no está en la primera fila de íconos.</li>
              <li>
                Al final del menú toca <strong className="text-white">"Editar acciones…"</strong> y activa "Añadir a pantalla de inicio".
              </li>
              <li>Sal de la <strong className="text-white">navegación privada</strong> y ábrela en una pestaña normal.</li>
            </ul>
          </div>
          <div className="lg:col-span-5 rounded-3xl border border-[#9333EA]/40 bg-[#9333EA]/10 p-6 text-center">
            <p className="text-white font-bold">Empieza por aquí</p>
            <p className="mt-1 text-sm text-[#CFC2D7]">Abre este enlace en Safari y sigue los pasos.</p>
            <a
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 h-13 py-3.5 rounded-2xl font-bold text-white whitespace-nowrap transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: 'linear-gradient(90deg, #7E22CE, #9333EA, #C026D3)', boxShadow: '0 0 30px -6px rgba(147,51,234,0.9)' }}
            >
              <Globe className="w-5 h-5" aria-hidden="true" />
              Abrir MESTER en la web
            </a>
            <p className="mt-3 text-xs text-[#CFC2D7]/70 break-all">{webUrl.replace('https://', '')}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
